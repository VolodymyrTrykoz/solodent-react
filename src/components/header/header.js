import React from 'react';
import {Link} from 'react-router-dom';
import HeaderCallMeBack from './header-call-me-back';
import ClientLocation from './client-location';
import Navbar from './navbar';


const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="row d-flex align-items-sm-center">
                    <div className="col-2">
                        <Link to="/" className="navbar-link">Logo</Link>
                    </div>
                    <div className="col-10">
                        <div className="header-top">
                            <div className="row">
                                <div className="col-6">
                                    <HeaderCallMeBack/>
                                </div>
                                <div className="col-6">
                                    <ClientLocation/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Navbar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;