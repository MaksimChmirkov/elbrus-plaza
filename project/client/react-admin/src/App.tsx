import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { RoomsList } from './components/rooms/RoomsList';
import { RoomsEdit } from './components/rooms/RoomsEdit';
import { RoomsCreate } from './components/rooms/RoomsCreate';
import { RoomsShow } from './components/rooms/RoomsShow';
import { HotelList } from './components/hotels/hotelsList';
import { HotelEdit } from './components/hotels/hotelsEdit';
import { HotelCreate } from './components/hotels/hotelsCreate';
import { HotelShow } from './components/hotels/hotelsShow';
import { BookingsList } from './components/bookings/bookingsList';
import { BookingsEdit } from './components/bookings/bookingsEdit';
import { BookingsCreate } from './components/bookings/bookingsCreate';
import { BookingsShow } from './components/bookings/bookingsShow';
import { ClientsList } from './components/clients/clientsList';
import { ClientsEdit } from './components/clients/clientsEdit';
import { ClientsCreate } from './components/clients/clientsCreate';
import { ClientsShow } from './components/clients/clientsShow';
import HotelRoomsList from './components/rooms/hotelsRoomsList';// Добавлен новый компонент
import { dataProvider } from './dataProvider';
import './App.css';

const App = () => (
  <Admin 
    dataProvider={dataProvider}
    theme={{
      components: {
        MuiTextField: {
          defaultProps: {
            variant: 'outlined',
            margin: 'normal',
          },
        },
      },
    }}
  >
    {/* Ресурс для отелей */}
    <Resource 
      name="hotels" 
      list={HotelList}
      edit={HotelEdit}
      create={HotelCreate}
      show={HotelShow}
      options={{ label: 'Отели' }}
      recordRepresentation={(record) => record.name_hotel}
      icon={MountainHotelIcon}
    />
    
    {/* Ресурс для всех комнат */}
    <Resource 
      name="rooms" 
      list={RoomsList}
      edit={RoomsEdit}
      create={RoomsCreate}
      show={RoomsShow}
      options={{ label: 'Все комнаты' }}
      recordRepresentation={(record) => `Комната №${record.Number_room}`}
      icon={SimpleRoomIcon}
    />
    
    {/* Ресурс для номеров конкретного отеля */}
    <Resource 
      name="hotel-rooms"
      list={HotelRoomsList}
      options={{ label: 'Номера отелей' }}
    />
    
    {/* Ресурс для бронирований */}
    <Resource 
      name="bookings" 
      list={BookingsList}
      edit={BookingsEdit}
      create={BookingsCreate}
      show={BookingsShow}
      options={{ label: 'Бронирования' }}
      recordRepresentation={(record) => `Бронирование #${record.ID_booking}`}
    />
    
    {/* Ресурс для клиентов */}
    <Resource 
      name="clients" 
      list={ClientsList}
      edit={ClientsEdit}
      create={ClientsCreate}
      show={ClientsShow}
      options={{ label: 'Клиенты' }}
      recordRepresentation={(record) => record.Name_client}
      icon={UserIcon}
    />
  </Admin>
);

// Иконки остаются без изменений
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MountainHotelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 4.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
  </svg>
);

const SimpleRoomIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="5" y="5" width="14" height="14" rx="1" />
    <text x="12" y="16" textAnchor="middle" fontSize="8" fill="currentColor">№</text>
  </svg>
);

export default App;