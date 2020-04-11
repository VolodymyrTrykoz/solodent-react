import React from 'react';
import MyModal from './modal';

const Appointment = ({shouldOpenModal}) => {
    if(shouldOpenModal){
        return <MyModal/>
    }
    return (
        <button
            type="submit"
            className="btn btn-secondary">
            Записатись на прийом
        </button>
    )
};

export default Appointment;
