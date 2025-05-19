import React from 'react';
import BaseNumber from './BaseNumber';
import CarouselImproved from '../CarouselImprove';
import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const ImprovedNumber: React.FC = () => (
  <BaseNumber
    CarouselComponent={CarouselImproved}
    description={
      <>
        Этот уютный двухместный номер, оформленный в лучших традициях <br />
        кавказского гостеприимства. Из окна открывается величественный вид <br />
        на заснеженные склоны Эльбруса...
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