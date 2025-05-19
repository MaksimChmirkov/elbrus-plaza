package postgres

import (
	"backend/internal/models"
	"context"
	"fmt"
)

func (s *Storage) GetEvents(ctx context.Context) ([]models.Events, error) {
	var events []models.Events

	err := s.DB.SelectContext(ctx, &events, "select * from Events")
	if err != nil {
		return nil, fmt.Errorf("Couldn't get events: %w", err)
	}

	return events, nil
}


func (s *Storage) CreateEvents(ctx context.Context, events *models.Events) (int64, error) {
	var id int64

	query := `insert into Events (ID_Hotel, Name_events, Description_events, Start_date_events, End_date_events, Location_event, Price_events, Number_of_available_seats) values ($1, $2, $3, $4, $5, $6, $7) returning ID_Events`
	err := s.DB.QueryRowContext(ctx, query, events.ID_Hotel, events.Name_events, events.Description_events, events.Start_date_events, events.End_date_events, events.Location_event, events.Price_events, events.Number_of_available_seats).Scan(&id)
	if err != nil {
		return -1, fmt.Errorf("Couldn't create an event: %w", err)
	}

	return id, nil
}

func (s *Storage) UpdateEvents(ctx context.Context, event *models.Events) error {
	query := `update Event set ID_Hotel = :ID_Hotel, Name_events = :Name_events, Description_events = :Description_events, Start_date_events = :Start_date_events, End_date_events = :End_date_events, Location_event = :Location_event, Price_events = :Price_events, Number_of_available_seats = :Number_of_available_seats`
	_, err := s.DB.NamedExecContext(ctx, query, event)
	if err != nil {
		return fmt.Errorf("Couldn't update an event: %w", err)
	}

	return nil
}

func (s *Storage) GetEventByID(ctx context.Context, id int) (*models.Events, error) {
	var event models.Events
	query := `select * from Event where ID_Event = $1`
	
	err := s.DB.GetContext(ctx, &event, query, id)
	if err != nil {
		return nil, fmt.Errorf("Couldn't get an event with id = %d: %w", id, err)
	}

	return &event, nil
}

func (s *Storage) DeleteEvent(ctx context.Context, id int) error {
	query := `delete from Event where ID_Events = $1`
	if _, err := s.DB.ExecContext(ctx, query, id); err != nil {
		return fmt.Errorf("Couldn't delete an event with id = %d: %w", id, err)
	}
	return nil
}