package models

type Additional_services struct {
    ID_Additional    int     `db:"id_additional"`
    Name_Additional  string  `db:"Name_Additional"`
    Price_Additional float64 `db:"Price_Additional"`
}