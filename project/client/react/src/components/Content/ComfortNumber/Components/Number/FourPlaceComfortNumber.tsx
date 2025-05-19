import React from 'react';
import BaseNumber from './BaseNumber';
import CarouselFourNumber from '../CarouselFourNumber';
import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const ImprovedNumber: React.FC = () => (
  <BaseNumber
    CarouselComponent={CarouselFourNumber}
    roomType="FourPlaceComfortNumber"
    description={
      <>
        Четырехместный номер «Комфорт» — идеальный выбор для тех, кто ценит <br />
        простор и уют. Здесь вас ждут удобные кровати, стильный интерьер<br />
         в горной тематике и всё необходимое для отдыха в сердце Кавказа.<br />
         После дня, проведенного на склонах Эльбруса, вас встретит атмосфера тепла <br />
         и расслабления. Большие окна открывают живописные виды, а продуманный <br />
         дизайн создает ощущение домашнего комфорта.
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

export default ImprovedNumber;