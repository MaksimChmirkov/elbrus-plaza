import React from 'react';
import BaseNumber from './BaseNumber';
import CarouselTreeNumber from '../CarouselTreeNumber';
import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const StandardNumber: React.FC = () => (
  <BaseNumber
    CarouselComponent={CarouselTreeNumber}
    roomType="TreePlaceComfortNumber"
    description={
      <>
        Трехместный номер "Комфорт" — уютное пространство с панорамными <br />
        видами на Эльбрус, где вас ждут ортопедические кровати, современная <br />
        ванная и теплая атмосфера в стиле горного шале. Идеальное место для <br />
        отдыха после активного дня, наполненного природной гармонией<br />
        и комфортом.
        <br /><br />
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: '#383B52',          // Основной цвет кнопки
                colorPrimaryHover: '#E3D9D4',     // Цвет фона при наведении
                colorTextLightSolid: '#ffffff',    // Цвет текста по умолчанию (белый)
                colorPrimaryTextHover: '#000000',  // Цвет текста при наведении (чёрный)
              },
            },
          }}
        >
          <Link to="/bookingform">
            <Button type="primary" size="large">
              Забронировать
            </Button>
          </Link>
        </ConfigProvider>
      </>
    }
  />
);

export default StandardNumber;