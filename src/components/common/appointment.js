import React from 'react';
import MyModal from './modal';

const Appointment = ({shouldOpenModal, title = 'Записатись на прийом'}) => {
    if(shouldOpenModal){
        return <MyModal 
            title={title}
        />
    }
    return (
        <button
            type="submit"
            className="btn">
            Записатись на прийом
        </button>
    )
};

export default Appointment;
