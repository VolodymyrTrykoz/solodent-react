import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AppointmentForm from '../../../common/appointment-form';

const SubmissionSuccessful = () => {
  return (
    <>
      <p className="title">Ваш запит на прийом до лікаря створено!</p>
      <p>Наші співробітники в найближчий час вам зателефонують.</p>
    </>
  );
};

@inject('store')
@observer
class OneStep extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="one-step-wrapper">
        <div className="one-step">
          <div className="container">
            <div className="row align-items-center one-step__form">
              <div className="col-lg-6 col-sm-12">
                <h2 className="title">
                  Один крок <br /> до здорової посмішки
                </h2>
                <p className="sub-title">
                  Не пропусти можливість красиво посміхатись
                </p>
                <ul className="one-step-benefits">
                  <div className="row">
                    <li className="col-lg-6 col-sm-12">Новітнє обладнання</li>
                    <li className="col-lg-6 col-sm-12">
                      Гнучка цінова політика
                    </li>
                    <li className="col-lg-6 col-sm-12">
                      Індивідуальний підхід
                    </li>
                    <li className="col-lg-6 col-sm-12">Професійні лікарі</li>
                  </div>
                </ul>
                <div className="form-wrapper">
                  {store.getFormStatus ? (
                    <SubmissionSuccessful />
                  ) : (
                    <AppointmentForm />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default OneStep;
