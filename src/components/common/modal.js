import React from 'react';
import Modal from 'react-modal';
import AppointmentForm from './appointment-form';
Modal.setAppElement('#root');


const MyModal = ({title}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const toggleModal = () =>  {
        setIsOpen(!modalIsOpen);
    };
    const asyncModalClose = () => {
        setTimeout(toggleModal, 5)
    };
    return (
        <div>
            <button
                onClick={toggleModal}
                type="submit"
                className="btn">
                {title}
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
            >
                <button onClick={toggleModal}>close</button>
                <AppointmentForm
                    setIsOpen={asyncModalClose}
                />
            </Modal>
        </div>
    );
};

export default MyModal;