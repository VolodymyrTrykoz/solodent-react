import React from 'react';

const BenefitsItem = ({img, title, description}) => {
    return (
        <div className="col-lg-4 col-sm-12 ">
            <div className="benefits-item">
                <img src={img} alt={title}/>
                <p className="sub-title sub-title--sm">{title}</p>
                <p className="benefits-description">{description}</p>
            </div>
        </div>
    )
};

export default BenefitsItem;
