import React, { useState } from 'react';
import Appointment from '../../../common/appointment';
import OurTeamModal from './our-team-modal';
import cx from 'classnames';

const OurTeamItem = ({img, name, location, qualification, description}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
    return(
        <div className="our-team-item">
          <img className={cx({
            'doctor-img': true,
            'position-top': name === 'Соловей Вадим Володимирович'
          })} src={img} alt={name} />
            <div className="our-team-item-info">
                <p>{name}</p>
                {
                    qualification.map(item => {
                        return(
                            <span key={item} className="qualification">{item}</span>
                        )
                    })
                }
                {
                    isOpen && (
                        <OurTeamModal
                            img={img}
                            name={name}
                            location={location}
                            qualification={qualification}
                            description={description}
                            isOpen={isOpen}
                            closeModal={closeModal}
                        />
                    )
                }
                <p className="location"> Філіал: {location}</p>
                <button className="btn" onClick={() => setIsOpen(true)}>Дізнатись більше про лікаря</button>
                <Appointment
                    shouldOpenModal={true}
                />
            </div>
        </div>
    )
};

export default OurTeamItem;
