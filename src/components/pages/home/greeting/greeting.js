import React, { useRef } from 'react';
import doctors from '../../../../assets/doctors-illustration.png';

const Greeting = () => {
  const img = useRef(null);
  console.log(img);

  return (
    <div className="greeting">
      <div className="container">
        <div className="greeting-wrapper">
          <div className="greeting-content">
            <div className="row">
              <div className="col">
                <p>Ми завжди вам раді</p>
                <h1 className="strong">Стоматологічна клініка Solodent</h1>
              </div>
            </div>
            <div className="greeting-descr">
              <div className="row">
                <div className="col-6 strong">
                  Один з найкращих способів привернути до себе увагу будь-якої
                  людини - мати красиву і сяючу посмішку
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={doctors} ref={img} alt="doctors" />
    </div>
  );
};

export default Greeting;
