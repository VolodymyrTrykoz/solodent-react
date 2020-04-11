import React, { Component} from "react";
import { withFormik, Form, Field  } from "formik";
import schema  from './schemaStorage';
import Appointment from '../appointment';

class FormComponent extends Component {
    render() {
        const { errors, touched} = this.props;
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
                        className="form-control ds-input"
                        type="text"
                        name="phone"
                        placeholder="Номер телефону"/>
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
    handleSubmit(values){
        console.log(values)
    }
})(FormComponent);

export default AppointmentForm;
