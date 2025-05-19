import { DataProvider, GetListParams, GetListResult, GetOneParams, 
    GetOneResult, GetManyParams, GetManyResult, GetManyReferenceParams, 
    GetManyReferenceResult, CreateParams, CreateResult, UpdateParams, 
    UpdateResult, UpdateManyParams, UpdateManyResult, DeleteParams, 
    DeleteResult, DeleteManyParams, DeleteManyResult, RaRecord } from 'react-admin';

import { Room } from './types';

let roomsData: Room[] = [
    {
        id: 1,
        ID_Room: 1,
        ID_Hotel: 1,
        Number_room: 101,
        Type_room: 'двухместный стандарт',
        Number_of_beds: 2,
        Room_Availability: true,
        Room_rate_per_night: 5000.00,
        View_from_the_windows: 'горы',
        Accessibility_for_people_with_disabilities: false,
        Extra_sleeping_place: false
    },
    {
        id: 2,
        ID_Room: 2,
        ID_Hotel: 1,
        Number_room: 102,
        Type_room: 'люкс',
        Number_of_beds: 2,
        Room_Availability: true,
        Room_rate_per_night: 12000.00,
        View_from_the_windows: 'панорамный вид на горы',
        Accessibility_for_people_with_disabilities: true,
        Extra_sleeping_place: true
    },
    {
        id: 3,
        ID_Room: 3,
        ID_Hotel: 1,
        Number_room: 201,
        Type_room: 'семейный номер',
        Number_of_beds: 4,
        Room_Availability: false,
        Room_rate_per_night: 8000.00,
        View_from_the_windows: 'город',
        Accessibility_for_people_with_disabilities: false,
        Extra_sleeping_place: true
    },
    {
        id: 4,
        ID_Room: 4,
        ID_Hotel: 2,
        Number_room: 301,
        Type_room: 'президентский люкс',
        Number_of_beds: 2,
        Room_Availability: true,
        Room_rate_per_night: 25000.00,
        View_from_the_windows: 'панорамный вид на горы',
        Accessibility_for_people_with_disabilities: true,
        Extra_sleeping_place: false
    },
    {
        id: 5,
        ID_Room: 5,
        ID_Hotel: 2,
        Number_room: 202,
        Type_room: 'трехместный номер Комфорт',
        Number_of_beds: 3,
        Room_Availability: true,
        Room_rate_per_night: 7000.00,
        View_from_the_windows: 'сад',
        Accessibility_for_people_with_disabilities: false,
        Extra_sleeping_place: false
    },
    {
        id: 6,
        ID_Room: 6,
        ID_Hotel: 3,
        Number_room: 103,
        Type_room: 'улучшенный двухместный',
        Number_of_beds: 2,
        Room_Availability: false,
        Room_rate_per_night: 6500.00,
        View_from_the_windows: 'горы',
        Accessibility_for_people_with_disabilities: false,
        Extra_sleeping_place: false
    },
    {
        id: 7,
        ID_Room: 7,
        ID_Hotel: 3,
        Number_room: 104,
        Type_room: 'дом с тремя спальнями',
        Number_of_beds: 6,
        Room_Availability: true,
        Room_rate_per_night: 15000.00,
        View_from_the_windows: 'панорамный вид на горы',
        Accessibility_for_people_with_disabilities: true,
        Extra_sleeping_place: true
    },
    {
        id: 8,
        ID_Room: 8,
        ID_Hotel: 3,
        Number_room: 105,
        Type_room: 'четырехместный номер комфорт',
        Number_of_beds: 4,
        Room_Availability: true,
        Room_rate_per_night: 9000.00,
        View_from_the_windows: 'город',
        Accessibility_for_people_with_disabilities: false,
        Extra_sleeping_place: true
    }
];

const dataProvider: DataProvider = {
    getList: async <RecordType extends RaRecord = Room>(
    resource: string,
    params: GetListParams
): Promise<GetListResult<RecordType>> => {
    // Проверяем допустимые ресурсы
    if (resource !== 'rooms' && resource !== 'hotel-rooms') {
        throw new Error('Resource not found. Supported resources: rooms, hotel-rooms');
    }

    // Для ресурса hotel-rooms проверяем наличие обязательного параметра ID_Hotel
    if (resource === 'hotel-rooms') {
        if (!params.filter || !params.filter.ID_Hotel) {
            throw new Error('ID_Hotel filter parameter is required for hotel-rooms resource');
        }
    }

    const filter = params.filter || {};
    let filteredData = roomsData.filter(item => {
        // Фильтрация по ID отеля (обязательна для hotel-rooms)
        if (filter.ID_Hotel && item.ID_Hotel !== filter.ID_Hotel) {
            return false;
        }

        // Фильтрация по доступности номеров
        if (filter.onlyAvailable === 'true' && !item.Room_Availability) {
            return false;
        }

        // Общий поиск по всем текстовым полям
        if (filter.q) {
            const searchTerm = filter.q.toString().toLowerCase();
            const matchesNumber = item.Number_room.toString().includes(searchTerm);
            const matchesType = item.Type_room.toLowerCase().includes(searchTerm);
            const matchesHotel = item.ID_Hotel.toString().includes(searchTerm);
            
            if (!(matchesNumber || matchesType || matchesHotel)) {
                return false;
            }
        }

        // Обработка дополнительных фильтров
        return Object.keys(filter).every(key => {
            // Пропускаем уже обработанные специальные фильтры
            if (key === 'q' || key === 'ID_Hotel' || key === 'onlyAvailable') {
                return true;
            }
            
            // Если значение фильтра не задано, пропускаем
            if (filter[key] === undefined) {
                return true;
            }
            
            // Специальная обработка для boolean полей
            if (typeof item[key as keyof Room] === 'boolean') {
                return item[key as keyof Room] === (filter[key] === 'true');
            }
            
            // Стандартное сравнение для остальных полей
            return item[key as keyof Room] === filter[key];
        });
    });

    // Сортировка результатов
    const { field = 'Number_room', order = 'ASC' } = params.sort || {};
    filteredData.sort((a, b) => {
        const aValue = a[field as keyof Room];
        const bValue = b[field as keyof Room];

        if (order === 'ASC') {
            if (aValue > bValue) return 1;
            if (aValue < bValue) return -1;
            return 0;
        } else {
            if (aValue < bValue) return 1;
            if (aValue > bValue) return -1;
            return 0;
        }
    });

    // Пагинация результатов
    const { page = 1, perPage = 10 } = params.pagination || {};
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedData = filteredData.slice(startIndex, endIndex) as unknown as RecordType[];

    return {
        data: paginatedData,
        total: filteredData.length,
    };
},
getOne: async <RecordType extends RaRecord = Room>(
    resource: string,
    params: GetOneParams
): Promise<GetOneResult<RecordType>> => {
    if (resource !== 'rooms') throw new Error('Resource not found');
    
    const id = typeof params.id === 'string' ? parseInt(params.id, 10) : params.id;
    
    const room = roomsData.find(r => r.id === id);
    if (!room) throw new Error(`Room not found for id: ${id}`);
    
    return { data: room as unknown as RecordType };
},

getMany: async <RecordType extends RaRecord = Room>(
    resource: string,
    params: GetManyParams
): Promise<GetManyResult<RecordType>> => {
    if (resource !== 'rooms') throw new Error('Resource not found');
    
    const rooms = roomsData
        .filter(room => params.ids.includes(room.id))
        .map(room => room as unknown as RecordType);
        
    return { data: rooms };
},

getManyReference: async <RecordType extends RaRecord = Room>(
    resource: string,
    params: GetManyReferenceParams
): Promise<GetManyReferenceResult<RecordType>> => {
    if (resource !== 'rooms') {
        throw new Error('Resource not found');
    }

    const { page = 1, perPage = 10 } = params.pagination || {};
    const { field = 'id', order = 'ASC' } = params.sort || {};
    const filter = params.filter || {};

    let filteredData = roomsData.filter(room => 
        room[params.target] === params.id
    );

    filteredData = filteredData.filter(room => {
        return Object.keys(filter).every(key => {
            if (key === 'q') {
                const searchTerm = filter.q.toString().toLowerCase();
                return (
                    room.Number_room.toString().includes(searchTerm) ||
                    room.Type_room.toLowerCase().includes(searchTerm) ||
                    room.ID_Hotel.toString().includes(searchTerm)
                );
            }
            
            if (filter[key] === undefined) return true;
            
            if (typeof room[key as keyof Room] === 'boolean') {
                return room[key as keyof Room] === filter[key];
            }
            
            return room[key as keyof Room] === filter[key];
        });
    });

    filteredData.sort((a, b) => {
        const aValue = a[field as keyof Room];
        const bValue = b[field as keyof Room];

        if (order === 'ASC') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    const start = (page - 1) * perPage;
    const paginatedData = filteredData.slice(start, start + perPage);

    return {
        data: paginatedData as unknown as RecordType[],
        total: filteredData.length,
    };
},

create: async <RecordType extends RaRecord = Room>(
    resource: string,
    params: CreateParams<RecordType>
): Promise<CreateResult<RecordType>> => {
    if (resource !== 'rooms') throw new Error('Resource not found');

    const maxId = roomsData.length > 0 
        ? Math.max(...roomsData.map(r => Number(r.id)))
        : 0;
    const newId = maxId + 1;

    const newRoom: Room = {
        id: newId,
        ID_Room: newId,
        ID_Hotel: params.data.ID_Hotel || 0,
        Number_room: params.data.Number_room || 0,
        Type_room: params.data.Type_room || 'двухместный стандарт',
        Number_of_beds: params.data.Number_of_beds || 1,
        Room_Availability: params.data.Room_Availability !== undefined 
            ? params.data.Room_Availability 
            : true,
        Room_rate_per_night: params.data.Room_rate_per_night || 0,
        Accessibility_for_people_with_disabilities: 
            params.data.Accessibility_for_people_with_disabilities !== undefined
            ? params.data.Accessibility_for_people_with_disabilities
            : false,
        Extra_sleeping_place: params.data.Extra_sleeping_place !== undefined
            ? params.data.Extra_sleeping_place
            : false,

        View_from_the_windows: params.data.View_from_the_windows,
    };

    roomsData.push(newRoom);
    return { data: newRoom as unknown as RecordType };
},

update: async <RecordType extends RaRecord = Room>(
    resource: string,
    params: UpdateParams
): Promise<UpdateResult<RecordType>> => {
    if (resource !== 'rooms') throw new Error('Resource not found');
    
    const index = roomsData.findIndex(r => r.id === params.id);
    if (index === -1) throw new Error('Room not found');
    
    const updatedRoom = {
        ...roomsData[index],
        ...params.data,
        id: params.id,
    };
    
    roomsData[index] = updatedRoom;
    return { data: updatedRoom as unknown as RecordType };
},

updateMany: async <RecordType extends RaRecord = Room>(
    resource: string,
    params: UpdateManyParams
): Promise<UpdateManyResult<RecordType>> => {
    if (resource !== 'rooms') throw new Error('Resource not found');

    const updatedIds: RecordType['id'][] = [];
    
    params.ids.forEach(id => {
        const index = roomsData.findIndex(r => r.id === id);
        if (index !== -1) {
            roomsData[index] = {
                ...roomsData[index],
                ...params.data,
                id,
            };
            updatedIds.push(id);
        }
    });

    return { 
        data: updatedIds.map(id => id as unknown as RecordType['id']) 
    };
},

delete: async <RecordType extends RaRecord = Room>(
    resource: string,
    params: DeleteParams
): Promise<DeleteResult<RecordType>> => {
    if (resource !== 'rooms') throw new Error('Resource not found');
    
    const roomToDelete = roomsData.find(r => r.id === params.id);
    if (!roomToDelete) throw new Error('Room not found');
    
    roomsData = roomsData.filter(r => r.id !== params.id);
    return { data: roomToDelete as unknown as RecordType };
},

deleteMany: async <RecordType extends RaRecord = Room>(
    resource: string,
    params: DeleteManyParams
): Promise<DeleteManyResult<RecordType>> => {
    if (resource !== 'rooms') throw new Error('Resource not found');
    
    const deletedIds = roomsData
        .filter(r => params.ids.includes(r.id))
        .map(r => r.id);
    
    roomsData = roomsData.filter(r => !params.ids.includes(r.id));
    
    return { 
        data: deletedIds as unknown as RecordType['id'][] 
    };
},
};

export default dataProvider;