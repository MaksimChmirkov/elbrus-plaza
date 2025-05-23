import React from 'react';
import BaseNumber from './BaseNumber';
import CarouselPrimeLux from '../CarouselPrimeLux';
import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const ImprovedNumber: React.FC = () => (
  <BaseNumber
    CarouselComponent={CarouselPrimeLux}
    description={
      <>
        Этот номер воплощение безупречного вкуса и статуса. Здесь <br />
        многовековые традиции кавказского гостеприимства гармонично <br />
        сочетаются с современной роскошью, а величественный Эльбрус <br />
        за стеклом создает впечатление, будто вся мощь Кавказа — часть <br />
        ваших апартаментов.
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