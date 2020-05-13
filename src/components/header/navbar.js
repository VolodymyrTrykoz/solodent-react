import React from 'react';
import {NavLink} from 'react-router-dom';
import Appointment from '../common/appointment';

const Navbar = () => {
    return (
        <nav className="navbar w-100 navbar-expand-lg navbar-light">
            <div className="container">
                <div className="navbar-nav">
                    <NavLink to="/" exact className="navbar-link">ГОЛОВНА</NavLink>
                    <NavLink to="/about" className="navbar-link">ПРО НАС</NavLink>
                    <NavLink to="/prices" className="navbar-link">ЦІНИ</NavLink>
                    <NavLink to="/actions" className="navbar-link">АКЦІЇ</NavLink>
                    <NavLink to="/contacts" className="navbar-link">КЛІНІКИ ТА КОНТАКТИ</NavLink>
                </div>
                <Appointment
                    shouldOpenModal={true}
                />
            </div>
        </nav>
    )
};

export default Navbar