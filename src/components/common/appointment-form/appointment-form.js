import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import MaskedInput from 'react-text-mask';
import { inject, observer } from 'mobx-react';
import schema from './schemaStorage';
import Appointment from '../appointment';

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

    return (
        <Form>
          <div className="form-field">
            {touched.location && errors.location && (
              <p className="warning">{errors.location}</p>
            )}
            <Field
              component="select"
              name="location"
              className="form-control ds-input"
            >
              <option value="">Оберіть місто</option>
              <option value="kyiv">Київ</option>
              <option value="brovary">Бровари</option>
            </Field>
          </div>
          <div className="form-field">
            {touched.username && errors.username && (
              <p className="warning">{errors.username}</p>
            )}
            <Field
              className="form-control ds-input"
              type="text"
              name="username"
              placeholder="Ваше ім'я"
            />
          </div>
          <div className="form-field">
            {touched.phone && errors.phone && (
              <p className="warning">{errors.phone}</p>
            )}
            <Field name="phone" value={values.phone}>
              {({ field }) => (
                <MaskedInput
                  {...field}
                  mask={phoneNumberMask}
                  className="form-control ds-input"
                  placeholder="Номер телефону"
                  type="text"
                />
              )}
            </Field>
          </div>
          <Appointment shouldOpenModal={false} />
        </Form>
    );
  }
}

const AppointmentForm = withFormik({
  mapPropsToValues() {
    return {
      location: '',
      username: '',
      phone: '',
    };
  },
  validationSchema: schema.first,
  handleSubmit(values, { setStatus }) {
    console.log(values);
    setStatus({ success: true });
  },
})(FormComponent);

export default AppointmentForm;
