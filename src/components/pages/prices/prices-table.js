import React, { useState } from 'react';
import pricesTableInfo from './prices-table-info';

const PricesTable = () => {
  const [title, seTitle] = useState('Терапія');
  const filteredList = pricesTableInfo.filter((item) => item.title === title);
  return (
    <div className="prices-table">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ul className="titles">
              {pricesTableInfo.map((item) => (
                <li
                  className={title === item.title ? 'active' : ''}
                  key={item.title}
                  onClick={() => seTitle(item.title)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-8">
            <ul className="subtitles">
              {filteredList[0].subtitle.map(({ title, price }) => (
                <div key={title} className="row">
                  <div className="col-10">
                    <li>{title}</li>
                  </div>
                  <div className="col-2">
                    <li>{price}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesTable;
