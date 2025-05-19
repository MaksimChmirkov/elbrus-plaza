import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    CreateProps,
    required,
    email,
    number,
    minValue,
    maxValue,
} from 'react-admin';

// Локальный тип для создания отеля
interface HotelCreateType {
    name_hotel: string;
    adress_hotel: string;
    phone_hotel: string;
    rating_hotel: number;
    description_hotel?: string;
    email_hotel: string;
}

export const HotelCreate: React.FC<CreateProps<HotelCreateType>> = (props) => {
    return (
        <Create {...props} title="Добавление нового отеля" redirect="list">
            <SimpleForm>
                <TextInput
                    source="name_hotel"
                    label="Название отеля*"
                    validate={[required()]}
                    fullWidth
                />
                
                <TextInput
                    source="adress_hotel"
                    label="Адрес*"
                    validate={[required()]}
                    fullWidth
                />
                
                <TextInput
                    source="phone_hotel"
                    label="Телефон*"
                    validate={[required()]}
                    fullWidth
                />
                
                <NumberInput
                    source="rating_hotel"
                    label="Рейтинг (1-5)*"
                    validate={[required(), number(), minValue(1), maxValue(5)]}
                    min={1}
                    max={5}
                    step={0.1}
                    defaultValue={3}
                />
                
                <TextInput
                    source="email_hotel"
                    label="Email*"
                    type="email"
                    validate={[required(), email()]}
                    fullWidth
                />
                
                <TextInput
                    source="description_hotel"
                    label="Описание"
                    multiline
                    rows={4}
                    fullWidth
                />
            </SimpleForm>
        </Create>
    );
};