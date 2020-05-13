import React from 'react';
import BenefitsList from './benefits-list';

const Benefits = () => {
    return (
        <div className="benefits">
            <div className="container">
                <div className="benefits-wrapper">
                    <h2 className="title"><span className="before">Переваги нашої клініки</span></h2>
                    <p className="benefits-descr">
                        Стоматологія «Solodent» має в професійне обладнання, сервіс європейського рівня, а зустрінуть вас досвідчені
                        фахівці. Вам залишається тільки зателефонувати та записатись на прийом до лікаря. В нашій клініці подбають
                        про те, щоб зубний біль залишився тільки в ваших спогадах, а посмішка приносила лише впевненість в собі.
                    </p>
                    <BenefitsList/>
                </div>
            </div>
        </div>
    )
};

export default Benefits;