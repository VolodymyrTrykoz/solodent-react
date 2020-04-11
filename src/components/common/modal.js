import React from 'react';
import Modal from 'react-modal';
import AppointmentForm from './appointment-form';
Modal.setAppElement('#root');


const MyModal = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const openModal = () =>  {
        setIsOpen(true);
    };
    const closeModal = () =>{
        setIsOpen(false);
    };
    return (
        <div>
            <button
                onClick={openModal}
                type="submit"
                className="btn btn-secondary">
                Записатись на прийом
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <AppointmentForm />
            </Modal>
        </div>
    );
};

export default MyModal;