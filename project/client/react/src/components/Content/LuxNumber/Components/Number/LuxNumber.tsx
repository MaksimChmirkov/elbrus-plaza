import React from 'react';
import BaseNumber from './BaseNumber';
import CarouselLux from '../CarouselLux';
import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const StandardNumber: React.FC = () => (
  <BaseNumber
    CarouselComponent={CarouselLux}
    description={
      <>
        Люкс с панорамными окнами и теплым камином — идеальное <br />
        место после горных прогулок. Здесь кавказское гостеприимство <br />
        встречается с современным комфортом, а заснеженный Эльбрус <br />
        за окном становится частью интерьера.
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