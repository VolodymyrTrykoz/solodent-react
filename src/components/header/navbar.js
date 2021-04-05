import React from 'react';
import { NavLink } from 'react-router-dom';
import Appointment from '../common/appointment';

const Navbar = () => {
  return (
    <nav className="navbar w-100 navbar-expand-lg navbar-light">
      <div className="container">
        <div className="navbar-nav">
          <NavLink to="/about" className="navbar-link">
            ПРО НАС
          </NavLink>
          <NavLink to="/services" className="navbar-link">
            ПОСЛУГИ
          </NavLink>
          <NavLink to="/examples" className="navbar-link">
            НАШІ РОБОТИ
          </NavLink>
          <NavLink to="/prices" className="navbar-link">
            ЦІНИ
          </NavLink>
          <NavLink to="/contacts" className="navbar-link">
            КОНТАКТИ
          </NavLink>
        </div>
        <Appointment shouldOpenModal={true} />
      </div>
    </nav>
  );
};

export default Navbar;
