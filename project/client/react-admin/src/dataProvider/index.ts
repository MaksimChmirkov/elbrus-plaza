import { DataProvider } from 'react-admin';
import { hotelDataProvider } from './hotelsProvider';
import roomsDataProvider from './roomsProvider';
import { bookingsDataProvider } from './bookingsProvider';
import { clientsDataProvider } from './clientsProvider';
import { 
    GetListParams,
    GetListResult,
} from 'react-admin';

export const dataProvider: DataProvider = {
  getList: (resource: string, params: GetListParams): Promise<GetListResult<any>> => {
        if (resource === 'hotel-rooms') {
            if (!params.filter || !params.filter.ID_Hotel) {
                return Promise.reject(new Error(
                    'Для получения номеров отеля необходимо указать ID_Hotel в параметрах фильтра'
                ));
            }
        }

      
        switch (resource) {
            case 'hotels':
                return hotelDataProvider.getList(resource, params)
                    .catch(error => {
                        console.error('Ошибка при получении списка отелей:', error);
                        throw new Error('Не удалось загрузить данные об отелях');
                    });

            case 'rooms':
            case 'hotel-rooms':
                return roomsDataProvider.getList(resource, params)
                    .catch(error => {
                        console.error(`Ошибка при получении списка номеров (${resource}):`, error);
                        throw new Error('Не удалось загрузить данные о номерах');
                    });

            case 'bookings':
                return bookingsDataProvider.getList(resource, params)
                    .catch(error => {
                        console.error('Ошибка при получении списка бронирований:', error);
                        throw new Error('Не удалось загрузить данные о бронированиях');
                    });

            case 'clients':
                return clientsDataProvider.getList(resource, params)
                    .catch(error => {
                        console.error('Ошибка при получении списка клиентов:', error);
                        throw new Error('Не удалось загрузить данные о клиентах');
                    });

            default:
                console.error(`Попытка доступа к неизвестному ресурсу: ${resource}`);
                return Promise.reject(new Error(`Неизвестный ресурс: ${resource}`));
        }
    },

  getOne: (resource, params) => {
    switch (resource) {
      case 'hotels':
        return hotelDataProvider.getOne(resource, params);
      case 'rooms':
      case 'hotel-rooms': 
        return roomsDataProvider.getOne(resource, params);
      case 'bookings':
        return bookingsDataProvider.getOne(resource, params);
      case 'clients':
        return clientsDataProvider.getOne(resource, params);
      default:
        throw new Error(`Unknown resource: ${resource}`);
    }
  },

  getMany: (resource, params) => {
    switch (resource) {
      case 'hotels':
        return hotelDataProvider.getMany(resource, params);
      case 'rooms':
      case 'hotel-rooms':
        return roomsDataProvider.getMany(resource, params);
      case 'bookings':
        return bookingsDataProvider.getMany(resource, params);
      case 'clients':
        return clientsDataProvider.getMany(resource, params);
      default:
        throw new Error(`Unknown resource: ${resource}`);
    }
  },

  getManyReference: (resource, params) => {
    switch (resource) {
      case 'hotels':
        return hotelDataProvider.getManyReference(resource, params);
      case 'rooms':
      case 'hotel-rooms':
        return roomsDataProvider.getManyReference(resource, params);
      case 'bookings':
        return bookingsDataProvider.getManyReference(resource, params);
      case 'clients':
        return clientsDataProvider.getManyReference(resource, params);
      default:
        throw new Error(`Unknown resource: ${resource}`);
    }
  },

  create: (resource, params) => {
    switch (resource) {
      case 'hotels':
        return hotelDataProvider.create(resource, params);
      case 'rooms':
        return roomsDataProvider.create(resource, params);
      case 'bookings':
        return bookingsDataProvider.create(resource, params);
      case 'clients':
        return clientsDataProvider.create(resource, params);
      default:
        throw new Error(`Unknown resource: ${resource}`);
    }
  },

  update: (resource, params) => {
    switch (resource) {
      case 'hotels':
        return hotelDataProvider.update(resource, params);
      case 'rooms':
      case 'hotel-rooms':
        return roomsDataProvider.update(resource, params);
      case 'bookings':
        return bookingsDataProvider.update(resource, params);
      case 'clients':
        return clientsDataProvider.update(resource, params);
      default:
        throw new Error(`Unknown resource: ${resource}`);
    }
  },

  updateMany: (resource, params) => {
    switch (resource) {
      case 'hotels':
        return hotelDataProvider.updateMany(resource, params);
      case 'rooms':
      case 'hotel-rooms': 
        return roomsDataProvider.updateMany(resource, params);
      case 'bookings':
        return bookingsDataProvider.updateMany(resource, params);
      case 'clients':
        return clientsDataProvider.updateMany(resource, params);
      default:
        throw new Error(`Unknown resource: ${resource}`);
    }
  },

  delete: (resource, params) => {
    switch (resource) {
      case 'hotels':
        return hotelDataProvider.delete(resource, params);
      case 'rooms':
      case 'hotel-rooms':
        return roomsDataProvider.delete(resource, params);
      case 'bookings':
        return bookingsDataProvider.delete(resource, params);
      case 'clients':
        return clientsDataProvider.delete(resource, params);
      default:
        throw new Error(`Unknown resource: ${resource}`);
    }
  },

  deleteMany: (resource, params) => {
    switch (resource) {
      case 'hotels':
        return hotelDataProvider.deleteMany(resource, params);
      case 'rooms':
      case 'hotel-rooms':
        return roomsDataProvider.deleteMany(resource, params);
      case 'bookings':
        return bookingsDataProvider.deleteMany(resource, params);
      case 'clients':
        return clientsDataProvider.deleteMany(resource, params);
      default:
        throw new Error(`Unknown resource: ${resource}`);
    }
  },
};