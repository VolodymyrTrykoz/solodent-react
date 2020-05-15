import React from 'react';

const BenefitsItem = ({img, title, description}) => {
    return (
        <div className="col-lg-4 col-sm-12 ">
            <div className="benefits-item">
                <div className="benefits-img"></div>
                <p className="sub-title sub-title--sm">{title}</p>
                <p className="benefits-description text-sm">{description}</p>
            </div>
        </div>
    )
};

export default BenefitsItem;
