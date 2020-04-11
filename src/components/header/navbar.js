import React from 'react';
import {Link} from "react-router-dom";
import Appointment from '../common/appointment'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="navbar-nav">
                    <Link to="/" className="navbar-link">ГОЛОВНА</Link>
                    <Link to="/about" className="navbar-link">ПРО НАС</Link>
                    <Link to="/prices" className="navbar-link">ЦІНИ</Link>
                    <Link to="/actions" className="navbar-link">АКЦІЇ</Link>
                    <Link to="/contacts" className="navbar-link">КЛІНІКИ ТА КОНТАКТИ </Link>
                </div>
                <Appointment
                    shouldOpenModal={true}
                />
            </div>
        </nav>
    )
};

export default Navbar