import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderCallMeBack from './header-call-me-back';
import ClientLocation from './client-location';
import Navbar from './navbar';
import logo from './../../assets/logo.svg';
import menu from './../../assets/menu.png';
import close from './../../assets/close.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="row d-flex align-items-sm-center">
          <div className="col-lg-2 col-10">
            <Link to="/">
              <div className="header-logo">
                <img src={logo} alt="logo" />
              </div>
            </Link>
          </div>
          <div className="col-10 desktop-navigation">
            <div className="header-top">
              <div className="row">
                <div className="col-6">
                  <HeaderCallMeBack />
                </div>
                <div className="col-6">
                  <ClientLocation />
                </div>
              </div>
            </div>
            <div className="row">
              <Navbar />
            </div>
          </div>
          <div className="col-2 mobile-menu-btn">
            <img src={menu} alt="menu" onClick={() => setIsOpen(true)}></img>
            {isOpen && (
              <div className="mobile-menu">
                <img
                  src={close}
                  alt="close"
                  className="mobile-close"
                  onClick={() => setIsOpen(false)}
                />
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <div className="header-logo">
                    <img src={logo} alt="logo" />
                  </div>
                </Link>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Головна
                </Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  Про нас
                </Link>
                <Link to="/examples" onClick={() => setIsOpen(false)}>
                  Наші роботи
                </Link>
                <Link to="/prices" onClick={() => setIsOpen(false)}>
                  Ціни
                </Link>
                <Link to="/contacts" onClick={() => setIsOpen(false)}>
                  Кініки та контакти
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
