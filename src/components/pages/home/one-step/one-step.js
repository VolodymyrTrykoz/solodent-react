import React from 'react';
import img from './one-step.png';
import AppointmentForm from '../../../common/appointment-form'

const OneStep = () => {
    return(
        <div className="one-step">
            <div className="container">
                <div className="one-step-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-12">
                            <img src={img} alt="last-step"/>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <h2 className="title">Один крок до здорової посмішки</h2>
                            <p className="sub-title">Не пропусти можливість красиво посміхатись</p>
                            <ul className="one-step-benefits">
                                <div className="row">
                                    <li className="col-lg-6 col-sm-12">Новітнє обладнання</li>
                                    <li className="col-lg-6 col-sm-12">Гнучка цінова політика</li>
                                    <li className="col-lg-6 col-sm-12">Індивідуальний підхід</li>
                                    <li className="col-lg-6 col-sm-12">Професійні лікарі</li>
                                </div>
                            </ul>
                            <div className="form-wrapper">
                                <AppointmentForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneStep;
