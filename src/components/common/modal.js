import React from 'react';
import Modal from 'react-modal';
import AppointmentForm from './appointment-form';
import close from '../../assets/icon-close.png';


const MyModal = ({ title }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };
  const asyncModalClose = () => {
    setTimeout(toggleModal, 5);
  };
  const customStyles = {
    overlay: {
      background: 'rgba(43,45,56,.7)',
    },
  };
  return (
    <div>
      <button onClick={toggleModal} type="submit" className="btn">
        {title}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        className="modal-custom"
      >
        <button className="close-modal" onClick={toggleModal}>
          <img src={close} alt="close" />
        </button>
        <div className="modal-content">
          <h3>
            Записатись <br /> на прийом
          </h3>
          <p>
            Після запису вам зателефонує наш менеджер і допоможе обрати зручний
            для вас час та відповість на всі питання
          </p>
          <AppointmentForm setIsOpen={asyncModalClose} />
        </div>
      </Modal>
    </div>
  );
};

export default MyModal;
