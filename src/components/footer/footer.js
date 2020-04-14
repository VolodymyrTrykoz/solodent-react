import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="row">
                        <div className="col-lg-2">Logo</div>
                        <div className="col-lg-4">
                            <p>ПОСЛУГИ</p>
                            <ul>
                                <li className="row">
                                    <span className="col-6">Терапія</span>
                                    <span className="col-6">Дитяча стоматологія</span>
                                </li>
                                <li className="row">
                                    <span className="col-6">Терапевтичне лікування</span>
                                    <span className="col-6">Протезування</span>
                                </li>
                                <li className="row">
                                    <span className="col-6">Відбілювання</span>
                                    <span className="col-6">Ортодонтичний прийом</span>
                                </li>
                                <li className="row">
                                    <span className="col-6">Хірургія</span>
                                    <span className="col-6">Реставрація</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-about">
                                <p>ПРО КЛІНІКУ</p>
                                <ul>
                                    <li><Link to="/about" className="navbar-link">Про нас</Link></li>
                                    <li><Link to="/prices" className="navbar-link">Ціни</Link></li>
                                    <li><Link to="/actions" className="navbar-link">Акції</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <p>КОНТАКТИ</p>
                            <ul>
                                <li>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    м.Київ, вул.Макаренка 1а
                                </li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <a href="tel:+38098-507-19-88" className="phone">+38 (098) 507 19 88</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    м.Бровари, вул.Гагаріна 22
                                </li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <a href="tel:+38098-507-19-88" className="phone">+38 (098) 507 19 88</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="copyright">© 2020 | Всі права захищені Солодент</p>
            </div>
        </div>
    )
};

export default Footer;