import React from 'react';
import BaseNumber from './BaseNumber';
import CarouselStandart from '../CarouselStandart';
import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const StandardNumber: React.FC = () => (
  <BaseNumber
    CarouselComponent={CarouselStandart}
    description={
      <>
        Простой, но одновременно красивый и светлый номер с видом на горы. <br />
        Тёплый интерьер и уютная атмосфера идеально подходят <br />
        для отдыха после прогулок или катания на склонах Эльбруса.
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