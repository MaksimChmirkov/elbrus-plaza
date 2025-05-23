package postgres

import (
	"backend/internal/models"
	"context"
	"fmt"
)

func (s *Storage) GetHotels(ctx context.Context) ([]models.Hotel, error) {
	var hotels []models.Hotel

	err := s.DB.SelectContext(ctx, &hotels, "select * from hotel")
	if err != nil {
		return nil, fmt.Errorf("Couldn't get hotels: %w", err)
	}

	return hotels, nil
}

func (s *Storage) GetAllHotelRooms(ctx context.Context, ID_Hotel int) ([]models.Room, error) {
    var rooms []models.Room
    err := s.DB.SelectContext(ctx, &rooms, "SELECT * FROM get_rooms_by_hotel($1)", ID_Hotel)
    return rooms, err
}

func (s *Storage) GetAvailableHotelRooms(ctx context.Context, ID_Hotel int) ([]models.Room, error) {
    var rooms []models.Room
    err := s.DB.SelectContext(ctx, &rooms, "SELECT * FROM available_rooms_by_hotel where ID_Hotel = $1", ID_Hotel)
	if err != nil {
		return nil, fmt.Errorf("Couldn't get a room: %w", err)
	}
    return rooms, nil
}

func (s *Storage) GetUnavailableHotelRooms(ctx context.Context, ID_Hotel int) ([]models.Room, error) {
    var rooms []models.Room
    err := s.DB.SelectContext(ctx, &rooms, "SELECT * FROM unavailable_rooms_by_hotel where ID_Hotel = $1", ID_Hotel)
	if err != nil {
		return nil, fmt.Errorf("Couldn't get a room: %w", err)
	}
    return rooms, nil
}

func (s *Storage) CreateHotel(ctx context.Context, hotel *models.Hotel) (int64, error) {
	var id int64

	query := `insert into Hotel (Name_hotel, Adress_hotel, Phone_hotel, Description_hotel, Email_hotel) values ($1, $2, $3, $4, $5) returning ID_Hotel`
	err := s.DB.QueryRowContext(ctx, query, hotel.Name_hotel, hotel.Adress_hotel, hotel.Phone_hotel, hotel.Description_hotel, hotel.Email_hotel).Scan(&id)
	if err != nil {
		return -1, fmt.Errorf("Couldn't create a hotel: %w", err)
	}

	return id, nil
}

func (s *Storage) UpdateHotel(ctx context.Context, hotel *models.Hotel) error {
	query := `update Hotel set Name_hotel = :Name_hotel, Adress_hotel = :Adress_hotel, Phone_hotel = :Phone_hotel, Description_hotel = Description_hotel, Email_hotel = :Email_hotel`
	_, err := s.DB.NamedExecContext(ctx, query, hotel)
	if err != nil {
		return fmt.Errorf("Couldn't update hotel: %w", err)
	}

	return nil
}

func (s *Storage) GetHotelByID(ctx context.Context, id int) (*models.Hotel, error) {
	var hotel models.Hotel
	query := `select * from hotel where ID_Hotel = $1`
	
	err := s.DB.GetContext(ctx, &hotel, query, id)
	if err != nil {
		return nil, fmt.Errorf("Couldn't get hotel with id = %d: %w", id, err)
	}

	return &hotel, nil
}

func (s *Storage) DeleteHotel(ctx context.Context, id int) error {
	query := `delete from hotel where ID_Hotel = $1`
	if _, err := s.DB.ExecContext(ctx, query, id); err != nil {
		return fmt.Errorf("Couldn't delete hotel: %w", err)
	}
	return nil
}