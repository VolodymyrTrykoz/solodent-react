import React from 'react';
import {Link} from "react-router-dom";
import WorkingHours from '../common/working-hours';

const HeaderContacts = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="row w-100 d-flex align-items-sm-center">
                        <div className="col-2">
                            <div className="navbar-nav">
                                <Link to="/" className="navbar-link">Logo</Link>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <div className="contacts-details">
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            </div>
                                            <div className="col-10">
                                                <p>м.Київ, вул.Макаренка 1а</p>
                                                <p>м.Бровари, вул.Гагаріна 22</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="contacts-details">
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                            </div>
                                            <div className="col-10">
                                                <WorkingHours />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="contacts-details">
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                            <div className="col-10">
                                                <a href="tel:+38098-507-19-88" className="phone">(098) 507 19 88</a>
                                                <p><Link to="/">Замовити дзвінок</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderContacts;