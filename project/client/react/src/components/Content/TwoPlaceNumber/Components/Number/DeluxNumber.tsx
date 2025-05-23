import React from 'react';
import BaseNumber from './BaseNumber';
import CarouselDelux from '../CarouselDelux';
import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';


const DeluxeNumber: React.FC = () => (
  <BaseNumber
    CarouselComponent={CarouselDelux}
    description={
      <>
        Этот номер - гармония кавказского колорита и современного комфорта, где <br />
        каждый элемент интерьера, от резной мебели до тканей ручной работы,<br />
        создаёт атмосферу уюта. Гостей ждёт безупречный сервис, включающий<br />
        индивидуальное concierge-обслуживание и внимание к каждой детали.<br />
        После дня на склонах Эльбруса здесь особенно приятно расслабиться у камина<br />
        или в хаммаме, наслаждаясь безукоризненным качеством проживания.
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

export default DeluxeNumber;