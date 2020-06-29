import React, { useEffect } from 'react';
import PricesTable from './prices-table';
import services1 from '../../../assets/services1.svg';
import services2 from '../../../assets/services2.svg';
import services3 from '../../../assets/services3.svg';
import services4 from '../../../assets/services4.svg';
import services5 from '../../../assets/services5.svg';
import services6 from '../../../assets/services6.svg';
import services7 from '../../../assets/services7.svg';

const Prices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="prices">
      <div className="container">
        <div className="prices-wrapper">
          <h2 className="title">Ціни</h2>
          <p className="sub-title">Здоров’я зубів</p>
          <div className="prices-overview">
            <div className="row">
              <div className="col-lg-3">
                <img src={services1} alt="prices" />
                <p className="prices__problem">Якщо болить зуб</p>
                <ul>
                  <li>Діагностика від 234 ŧ</li>
                  <li>Лікування зубів від 234 ŧ</li>
                  <li>Лікування ясен від 234 ŧ</li>
                  <li>Видалення зуба від 234 ŧ </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <img src={services2} alt="prices" />
                <p className="prices__problem">
                  Якщо зуб пошкоджений чи відсутній
                </p>
                <ul>
                  <li>Імплантація зубів від 234 ŧ</li>
                  <li>Протезування зубів від 234 ŧ</li>
                  <li>Реставрація зубів від 234 ŧ</li>
                  <li>Базальна імплантація</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <img src={services3} alt="prices" />
                <p className="prices__problem">Щоб зуби не хворіли</p>
                <ul>
                  <li>Профілактичний огляд</li>
                  <li>Чистка нальоту і зубного каменю від 234 ŧ</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <img src={services4} alt="prices" />
                <p className="prices__problem">Особливий догляд</p>
                <ul>
                  <li>Дитяча стоматологія від 234 ŧ</li>
                  <li>Лікування зубів при вагітності від 234 ŧ</li>
                </ul>
              </div>
            </div>
            <p className="sub-title">Краса зубів</p>
            <div className="row">
              <div className="col-lg-3">
                <img src={services5} alt="prices" />
                <p className="prices__problem">
                  Зробити зуби рівними,
                  <br />
                  вирівняти прикус
                </p>
                <ul>
                  <li>Брекети від 234 ŧ</li>
                  <li>Капи від 234 ŧ</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <img src={services6} alt="prices" />
                <p className="prices__problem">Відновити форму зубів</p>
                <ul>
                  <li>Вініри на зуби від 3456 ŧ</li>
                  <li>Люмініри на зуби від 3495 ŧ</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <img src={services7} alt="prices" />
                <p className="prices__problem">Зробити зуби білими</p>
                <ul>
                  <li>Відбілювання від 3843 ŧ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricesTable />
    </div>
  );
};

export default Prices;
