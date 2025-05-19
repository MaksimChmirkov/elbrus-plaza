package models

type Room struct {
	ID_Room int
	ID_Hotel int
	Number_room int
	Type_room string
	Number_of_beds int
	Room_Availability bool
	Room_rate_per_night float32
	View_from_the_windows string
	Accessibility_for_people_with_disabilities bool
	Extra_sleeping_place bool
}
