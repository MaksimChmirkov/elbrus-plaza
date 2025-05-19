package models

import "time"

type Events struct {
	ID_Events          int 
	ID_Hotel           int
	Name_events        string
	Description_events string
	Start_date_events  time.Time
	End_date_events time.Time
	Location_event string
	Price_events int
	Number_of_available_seats int
}