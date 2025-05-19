import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    NumberField,
    EmailField,
    ShowProps,
} from 'react-admin';
import { Hotel } from '../../dataProvider/types';

export const HotelShow: React.FC<ShowProps<Hotel>> = (props) => {
    return (
        <Show {...props} title="Просмотр отеля">
            <SimpleShowLayout>
                <TextField source="id" label="ID" />
                <TextField source="name_hotel" label="Название" />
                <TextField source="adress_hotel" label="Адрес" />
                <TextField source="phone_hotel" label="Телефон" />
                <NumberField source="rating_hotel" label="Рейтинг" />
                <EmailField source="email_hotel" label="Email" />
                <TextField 
                    source="description_hotel" 
                    label="Описание" 
                    component="pre"
                />
            </SimpleShowLayout>
        </Show>
    );
};