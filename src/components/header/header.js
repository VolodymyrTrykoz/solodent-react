import React from 'react';
import Navbar from './navbar';
import HeaderContacts from './header-contacts'
const Header = () => {
    return(
        <div className="header">
            <HeaderContacts />
            <Navbar/>
        </div>
    )
};

export default Header;