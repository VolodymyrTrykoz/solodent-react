import React from "react";
import close from "../../../../assets/icon-close.png";
import Modal from "react-modal";
import Appointment from "../../../common/appointment";
Modal.setAppElement('#root');

const OurTeamModal = ({img, name, location, qualification, description, isOpen, closeModal}) => {
  const customStyles = {
    overlay: {
      background: 'rgba(43,45,56,.7)',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal-custom doctor-info"
    >
      <button className="close-modal" onClick={closeModal}>
        <img src={close} alt="close" />
      </button>
      <div className="modal-content">
        <img className="doctor-img" src={img} alt={name} />
        <h3 className="title">{name}</h3>
        <p>{ `Філіали де працюєє лікар: ${location}` }</p>
        <div className="doctor-info__locations">
          {
            qualification.map(item => (
                <span key={item} className="qualification">{item}</span>
              )
            )
          }
        </div>
        <div dangerouslySetInnerHTML={{__html: description }} />
        <Appointment
          closeModal={closeModal}
          shouldOpenModal={true}
        />
      </div>
    </Modal>
  )
}
export default OurTeamModal;
