import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import emailjs from'emailjs-com';

@inject('store')
@observer
class FormComponent extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      if (this.props.setIsOpen) {
        this.props.setIsOpen();
      }
      this.props.store.setFormStatusToSuccess();
    }
  }

  render() {
    const { errors, touched, values } = this.props;
    const phoneNumberMask = [
      '(',
      /[0-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ];

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(
        'gmail',
        'solodent_template', e.target, 'user_hH1eEPn98s2KHF7vfzOEy')
        .then((result) => {
          this.props.store.setFormStatusToSuccess();
        }, (error) => {
          console.log(error.text);
        });
    }

    return (
      <>
        <form className="contact-form" onSubmit={sendEmail}>
          <select className="form-control ds-input" name="location" required>
            <option value="">Оберіть місто</option>
            <option value="kyiv">Київ</option>
            <option value="brovary">Бровари</option>
          </select>
            <input className="form-control ds-input"
              type="text"
              name="username"
              placeholder="Ваше ім'я"
              required
            />
            <input className="form-control ds-input"
               type="text"
               name="phone"
               placeholder="Номер телефону"
               required
            />
          <button
            type="submit"
            className="btn">
            Записатись на прийом
          </button>
        </form>
      </>
    );
  }
}

export default FormComponent;
