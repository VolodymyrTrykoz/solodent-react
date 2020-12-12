import React, { useRef } from 'react';
import doctors from '../../../../assets/doctors-illustration.png';
import doctorsBg from '../../../../assets/doctors-illustration-bg.png';
import useMousePosition from '../../../common/mouse-position'

const Greeting = () => {
  const img = useRef(null);
  const { x, y } = useMousePosition();

  return (
    <div className="greeting">
      <div className="container">
        <div className="greeting-wrapper">
          <div className="greeting-content">
            <div className="row">
              <div className="col">
                <span>Ми завжди вам раді</span>
                <h1 className="strong">Стоматологічна клініка Solodent</h1>
              </div>
            </div>
            <div className="greeting-descr">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <p className="strong">
                    Один з найкращих способів привернути до себе увагу будь-якої
                    людини - мати красиву і сяючу посмішку
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={doctorsBg} ref={img} style={{transform: `translate(${x/30}px, ${y/50}px)`}} alt="doctors" className="doctorsBg" />
      <img src={doctors} ref={img} style={{transform: `translate(${-x/70}px, ${-y/50}px)`}} alt="doctors" className="doctors" />
    </div>
  );
};

export default Greeting;
