import React from 'react';

const Greeting = () => {
    return (
        <div className="greeting">
            <div className="container">
                <div className="greeting-wrapper">
                    <div className="greeting-content">
                        <div className="row">
                            <div className="col">
                                <h1 className="strong">Стоматологічна клініка Solodent</h1>
                            </div>
                        </div>
                        <div className="greeting-descr">
                            <div className="row">
                                <div className="col-4">
                                    <p className="strong">Ми завжди вам раді</p>
                                </div>
                                <div className="col-8">
                                    Один з найкращих способів привернути до себе увагу
                                    будь-якої людини - мати красиву і сяючу посмішку
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Greeting;
