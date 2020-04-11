import React from 'react';
import ServicesItem from './services-item';
import servicesInfo from './services-info';

const ServicesList = () => {
    return (
        <div className="services-list">
            <div className="row">
                {
                    servicesInfo.map(({id, title, img}) => {
                        return (
                            <ServicesItem
                                key={id}
                                title={title}
                                img={img}
                            />
                        )
                    }) }
            </div>
        </div>
    )
};

export default ServicesList;