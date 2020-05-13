import React from 'react';
import ServicesList from './services-list';

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="services-wrapper">
                    <h2 className="title"><span className="before">Наші послуги</span></h2>
                    <p className="services-descr">
                        Стоматологічна клініка «Solodent» може впоратися з будь-якою стоматологічною
                        проблемою. Ми надаємо широкий спектр послуг терапевтичного, хірургічного,
                        ортопедичного, ортодонтичного та дитячого лікування.
                    </p>
                    <ServicesList/>
                </div>
            </div>
        </div>
    )
};

export default Services;
