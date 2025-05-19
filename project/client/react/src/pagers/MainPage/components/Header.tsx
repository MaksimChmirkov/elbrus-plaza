import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'antd';


const Header: React.FC = () => {
  return (
    <header>
      <div className='menu'>
        <Link to="/numbers">
          <Button color="default" variant="link" className="head-btn">
            Просмотр номеров
          </Button>
        </Link>
        <Link to='loyalty'>
          <Button color='default' variant="link" className="head-btn">
            Программа лояльности
          </Button>
        </Link>
        <Link to='service'>
          <Button color="default" variant="link" className="head-btn">
            Услуги
          </Button>
        </Link>
        <Link to='account'>
          <Button color="default" variant="link" className="head-btn">
            Личный кабинет
          </Button>
        </Link>

      </div>
    </header>
  );
};

export default Header;