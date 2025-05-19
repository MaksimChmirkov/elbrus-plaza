package models

import "time"

type Booking struct {
	ID_Booking int
	ID_Client int
	ID_Room int
	In_date_booking	time.Time
	Out_date_booking time.Time
	Price_of_booking int
	Status_booking string
	Status_payment string
}