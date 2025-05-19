import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    useNotify,
    useRedirect,
    required,
    email,
    number,
    minValue,
    maxValue,
    EditProps,
} from 'react-admin';

interface HotelEditType {
    id: number;
    name_hotel: string;
    adress_hotel: string;
    phone_hotel: string;
    rating_hotel: number;
    description_hotel?: string;
    email_hotel: string;
}

const validatePhone = (value: string) => {
    if (!value) return 'Обязательное поле';
    if (!/^[\d\s+\-()]+$/.test(value)) {
        return 'Некорректный формат телефона';
    }
    return undefined;
};

export const HotelEdit: React.FC<EditProps<HotelEditType>> = (props) => {
    const notify = useNotify();
    const redirect = useRedirect();

    const onError = (error: Error) => {
        notify(`Ошибка при редактировании отеля: ${error.message}`, { type: 'error' });
        redirect('list');
    };

    return (
        <Edit<HotelEditType> 
            {...props} 
            title="Редактирование отеля"
            mutationOptions={{ onError }}
        >
            <SimpleForm warnWhenUnsavedChanges>
                <TextInput 
                    disabled 
                    source="id" 
                    label="ID отеля" 
                    fullWidth 
                />
                
                <TextInput 
                    source="name_hotel" 
                    label="Название отеля" 
                    validate={required('Это поле обязательно')} 
                    fullWidth
                />
                
                <TextInput 
                    source="adress_hotel" 
                    label="Адрес" 
                    validate={required('Это поле обязательно')} 
                    fullWidth
                />
                
                <TextInput 
                    source="phone_hotel" 
                    label="Телефон" 
                    validate={validatePhone} 
                    fullWidth
                    helperText="Формат: +7 (XXX) XXX-XX-XX"
                />
                
                <NumberInput 
                    source="rating_hotel" 
                    label="Рейтинг (1-5)" 
                    validate={[
                        required('Это поле обязательно'),
                        number('Должно быть числом'),
                        minValue(1, 'Минимальный рейтинг 1'),
                        maxValue(5, 'Максимальный рейтинг 5')
                    ]} 
                    min={1}
                    max={5}
                    step={0.1}
                />
                
                <TextInput 
                    source="email_hotel" 
                    label="Email" 
                    type="email"
                    validate={[
                        required('Это поле обязательно'),
                        email('Некорректный email')
                    ]} 
                    fullWidth
                />
                
                <TextInput 
                    source="description_hotel" 
                    label="Описание" 
                    multiline 
                    rows={4}
                    fullWidth
                    helperText="Дополнительная информация об отеле"
                />
            </SimpleForm>
        </Edit>
    );
};