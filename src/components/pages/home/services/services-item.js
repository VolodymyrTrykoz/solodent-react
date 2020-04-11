import React from 'react';

const ServicesItem = ({title, img}) => {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="services-item">
                <p className="sub-title">{title}</p>
                <img src={img} alt={title}/>
            </div>
        </div>
    )
};

export default ServicesItem;