import React, { Component} from 'react';
import { withFormik, Form, Field  } from 'formik';
import MaskedInput from 'react-text-mask';
import {inject, observer} from 'mobx-react';
import schema  from './schemaStorage';
import Appointment from '../appointment';


@inject('store')

@observer
class FormComponent extends Component {

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.status !== this.props.status){
            if(this.props.setIsOpen) {
                this.props.setIsOpen();
            }
            this.props.store.setFormStatusToSuccess();
        }
    }

    render() {
        const { errors, touched, values } = this.props;
        const phoneNumberMask = [
            "(",
            /[0-9]/,
            /\d/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/
        ];
        return (
            <Form>
                <div>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field
                        className="form-control ds-input"
                        type="text"
                        name="username"
                        placeholder="Ваше ім'я"/>
                </div>
                <div>
                    {touched.phone && errors.phone && <p>{errors.phone}</p>}
                    <Field
                        name="phone"
                        value={values.phone}
                        render={({ field }) => (
                                <MaskedInput
                                    {...field}
                                    mask={phoneNumberMask}
                                    className="form-control ds-input"
                                    placeholder="Номер телефону"
                                    type="text"
                                />
                            )
                        }
                    />
                </div>
                <Appointment
                    shouldOpenModal={false}
                />
            </Form>

        )
    }
};

const AppointmentForm = withFormik({
    mapPropsToValues(){
        return {
            username: '',
            phone: ''
        }
    },
    validationSchema: schema.first,
    handleSubmit(values, {setStatus}){
        console.log(values);
        setStatus({ success: true });
    }
})(FormComponent);

export default AppointmentForm;
