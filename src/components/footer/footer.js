import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-lg-4">
              <p>ПОСЛУГИ</p>
              <ul>
                <li className="row">
                  <Link to="/services" className="col-6 text-sm">
                    Терапія
                  </Link>
                  <Link to="/services" className="col-6 text-sm">
                    Дитяча стоматологія
                  </Link>
                </li>
                <li className="row">
                  <Link to="/services" className="col-6 text-sm">
                    Терапевтичне лікування
                  </Link>
                  <Link to="/services" className="col-6 text-sm">
                    Протезування
                  </Link>
                </li>
                <li className="row">
                  <Link to="/services" className="col-6 text-sm">
                    Відбілювання
                  </Link>
                  <Link to="/services" className="col-6 text-sm">
                    Ортодонтичний прийом
                  </Link>
                </li>
                <li className="row">
                  <Link to="/services" className="col-6 text-sm">
                    Хірургія
                  </Link>
                  <Link to="/services" className="col-6 text-sm">
                    Реставрація
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <div className="footer-about">
                <p>ПРО КЛІНІКУ</p>
                <ul>
                  <li>
                    <Link to="/about" className="navbar-link text-sm">
                      Про нас
                    </Link>
                  </li>
                  <li>
                    <Link to="/prices" className="navbar-link text-sm">
                      Ціни
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <p>КОНТАКТИ</p>
              <ul>
                <li className="text-sm">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  м.Київ, вул.Макаренка 1а
                </li>
                <li className="text-sm">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:+38098-507-19-88" className="phone text-sm">
                    +38 (098) 507 19 88
                  </a>
                </li>
              </ul>
              <ul>
                <li className="text-sm">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  м.Бровари, вул.Гагаріна 22
                </li>
                <li className="text-sm">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:+38098-507-19-88" className="phone text-sm">
                    +38 (098) 507 19 88
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="footer-logo">
                <img src={logo} alt="logo" />
                <p>SOLODENT</p>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright text-sm">
          © 2020 | Всі права захищені Солодент
        </p>
      </div>
    </div>
  );
};

export default Footer;
