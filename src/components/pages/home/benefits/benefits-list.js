import React from 'react';
import BenefitsItem from './benefits-item';
import benefitsInfo from './benefits-info';

const BenefitsList = () => {
    return (
        <div className="benefits-list">
            <div className="row">
                {
                    benefitsInfo.map(({id, img, title, description}) => {
                        return (
                            <BenefitsItem
                                key={id}
                                title={title}
                                img={img}
                                description={description}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default BenefitsList;