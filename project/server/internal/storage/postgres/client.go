package postgres

import (
	"backend/internal/models"
	"context"
	"fmt"
)

func (s *Storage) GetClients(ctx context.Context) ([]models.Client, error) {
	var clients []models.Client

	err := s.DB.SelectContext(ctx, &clients, "select * from Client")
	if err != nil {
		return nil, fmt.Errorf("Couldn't get Client: %w", err)
	}

	return clients, nil
}


func (s *Storage) CreateClient(ctx context.Context, client *models.Client) (int64, error) {
	var id int64

	query := `insert into Client (ID_Hotel, Name_client, Email_client, Phone_client, Password_client) values ($1, $2, $3, $4, $5) returning ID_Client`
	err := s.DB.QueryRowContext(ctx, query, client.ID_Hotel, client.Name_client, client.Email_client, client.Phone_client, client.Password_client).Scan(&id)
	if err != nil {
		return -1, fmt.Errorf("Couldn't create an client: %w", err)
	}

	return id, nil
}

func (s *Storage) UpdateClient(ctx context.Context, client *models.Client) error {
	query := `update Client set ID_Hotel = :ID_Hotel, Name_client = :Name_client, Email_client = :Email_client, Phone_client = :Phone_client, Password_client = :Password_client`
	_, err := s.DB.NamedExecContext(ctx, query, client)
	if err != nil {
		return fmt.Errorf("Couldn't update an client: %w", err)
	}

	return nil
}

func (s *Storage) GetClientByID(ctx context.Context, id int) (*models.Client, error) {
	var client models.Client
	query := `select * from Client where ID_Client = $1`
	
	err := s.DB.GetContext(ctx, &client, query, id)
	if err != nil {
		return nil, fmt.Errorf("Couldn't get an client with id = %d: %w", id, err)
	}

	return &client, nil
}

func (s *Storage) DeleteClient(ctx context.Context, id int) error {
	query := `delete from Client where ID_Client = $1`
	if _, err := s.DB.ExecContext(ctx, query, id); err != nil {
		return fmt.Errorf("Couldn't delete an client with id = %d: %w", id, err)
	}
	return nil
}