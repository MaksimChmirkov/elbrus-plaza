package postgres

import (
	"backend/internal/models"
	"context"
	"fmt"
)

type Repository interface {
	GetRooms(ctx context.Context) ([]models.Room, error)
	GetRoomByID(ctx context.Context, id int) (*models.Room, error)
	CreateRoom(ctx context.Context, room *models.Room) error
	UpdateRoom(ctx context.Context, room *models.Room) error
	DeleteRoom(ctx context.Context, id int) error
}

func (s *Storage) GetRooms(ctx context.Context) ([]models.Room, error) {
	var rooms []models.Room
	err := s.DB.SelectContext(ctx, &rooms, "select * from Room")
	if err != nil {
		return nil, fmt.Errorf("Couldn't get info from table Room: %w", err)
	}
	return rooms, nil
}

func (s *Storage) CreateRoom(ctx context.Context, room *models.Room) (int64, error) {
	var id int64

	query := `insert into Room (ID_Hotel, Number_room, Room_Availability, View_from_the_windows, Accessibility_for_people_with_disabilities, Extra_sleeping_place) values ($1, $2, $3, $4, $5, $6) returning id`
	err := s.DB.QueryRowContext(ctx, query, room.ID_Hotel, room.Number_room, room.Room_Availability, room.View_from_the_windows, room.Accessibility_for_people_with_disabilities, room.Extra_sleeping_place).Scan(&id)
	if err != nil {
		return -1, fmt.Errorf("Cannot create a room: %w", err)
	}

	return id, nil
}

func (s *Storage) UpdateRoom(ctx context.Context, room *models.Room) (error) {
	query := `update Room set ID_Hotel = :ID_Hotel, Number_room = :Number_room, Room_Availability = :Room_Availability, View_from_the_windows = :View_from_the_windows, Accessibility_for_people_with_disabilities = :Accessibility_for_people_with_disabilities, Extra_sleeping_place = :Extra_sleeping_place where ID_Room = ID_Room`
	if _, err := s.DB.NamedExecContext(ctx, query, room); err != nil {
		return fmt.Errorf("Couldnt update room %d info: %w", room.ID_Room, err)
	}
	return nil
}

func (s *Storage) GetRoomByID(ctx context.Context, id int) (*models.Room, error) {
	var room models.Room
	query := `select * from room where ID_Room = $1`
	
	err := s.DB.GetContext(ctx, &room, query, id)
	if err != nil {
		return nil, fmt.Errorf("Couldn't get room №%d: %w", id, err)
	}

	return &room, nil
}

func (s *Storage) DeleteRoom(ctx context.Context, id int) error {
	query := `delete from room where ID_Room = $1`
	if _, err := s.DB.ExecContext(ctx, query, id); err != nil {
		return fmt.Errorf("Couldn't delete room: %w", err)
	}
	return nil
}