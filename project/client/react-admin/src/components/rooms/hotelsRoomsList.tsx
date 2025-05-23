import * as React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    NumberField, 
    BooleanField, 
    Filter, 
    SelectInput, 
    ReferenceInput,
    FilterProps,
    ListProps
} from 'react-admin';

const RoomsFilter = (props: Omit<FilterProps, 'children'>) => (
    <Filter>
        <ReferenceInput 
            source="ID_Hotel" 
            reference="hotels" 
            label="Отель"
            alwaysOn
        />
        <SelectInput
            source="onlyAvailable"
            label="Статус номеров"
            choices={[
                { id: 'false', name: 'Все номера' },
                { id: 'true', name: 'Только свободные' },
            ]}
            alwaysOn
        />
    </Filter>
);

const HotelRoomsList: React.FC<ListProps> = (props) => {
    return (
        <List
            {...props}
            title="Номера отеля"
            filters={<RoomsFilter />}
            perPage={25}
            sort={{ field: 'Number_room', order: 'ASC' }}
        >
            <Datagrid rowClick="edit">
                <NumberField source="Number_room" label="Номер" />
                <TextField source="Type_room" label="Тип номера" />
                <NumberField source="Number_of_beds" label="Кроватей" />
                <BooleanField source="Room_Availability" label="Доступен" />
                <NumberField 
                    source="Room_rate_per_night" 
                    label="Цена за ночь" 
                    options={{ style: 'currency', currency: 'RUB' }}
                />
                <TextField source="View_from_the_windows" label="Вид из окна" />
            </Datagrid>
        </List>
    );
};

export default HotelRoomsList;