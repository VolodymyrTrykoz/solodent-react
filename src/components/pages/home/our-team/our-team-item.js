import React from 'react';
import Appointment from '../../../common/appointment';

const OurTeamItem = ({img, name, location, qualification}) => {
    return(
        <div className="our-team-item">
            <img src={img} alt={name}/>
            <div className="our-team-item-info">
                <p>{name}</p>
                {
                    qualification.map(item => {
                        return(
                            <span key={item} className="qualification">{item}</span>
                        )
                    })
                }
                <p className="location"> Філіал: {location}</p>
                <Appointment
                    shouldOpenModal={true}
                />
            </div>
        </div>
    )
};

export default OurTeamItem;
