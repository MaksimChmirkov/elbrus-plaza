import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    ReferenceField,
    Filter,
    TextInput,
    NumberInput,
    ListProps,
    useRecordContext
} from 'react-admin';
import { Link } from 'react-router-dom';

const HotelRoomsLinkField = () => {
    const record = useRecordContext();
    if (!record) return null;
    
    return (
        <ReferenceField
            label="Номера"
            reference="hotel-rooms"
            source="id"
            link={(record) => 
                `/hotel-rooms?filter=${JSON.stringify({ ID_Hotel: record.id })}&displayedFilters=${JSON.stringify({ ID_Hotel: true })}`
            }
        >
            <Link to="#" onClick={e => e.stopPropagation()}>
                Просмотреть номера
            </Link>
        </ReferenceField>
    );
};

export const HotelList: React.FC<ListProps> = (props) => {
    return (
        <List 
            {...props}
            filters={
                <Filter>
                    <TextInput 
                        label="Поиск по названию" 
                        source="name_hotel" 
                        alwaysOn 
                        resettable
                    />
                    <TextInput 
                        label="Поиск по адресу" 
                        source="adress_hotel" 
                        resettable
                    />
                    <NumberInput 
                        label="Минимальный рейтинг" 
                        source="rating_hotel_gte" 
                        min={1} 
                        max={5}
                        step={0.1}
                    />
                </Filter>
            }
            sort={{ field: 'id', order: 'DESC' }}
            perPage={25}
        >
            <Datagrid rowClick="edit">
                <TextField source="id" label="ID" />
                <TextField source="name_hotel" label="Название отеля" />
                <TextField source="adress_hotel" label="Адрес" />
                <TextField source="phone_hotel" label="Телефон" />
                <NumberField 
                    source="rating_hotel" 
                    label="Рейтинг" 
                    options={{ 
                        style: 'decimal', 
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1 
                    }} 
                />
                <HotelRoomsLinkField />
                <EditButton />
            </Datagrid>
        </List>
    );
};