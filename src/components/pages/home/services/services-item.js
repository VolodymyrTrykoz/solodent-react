import React from 'react';

const ServicesItem = ({title, img}) => {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="services-item">
                <div className="img-box"></div>    
                <p className="sub-title">{title}</p>
            </div>
        </div>
    )
};

export default ServicesItem;