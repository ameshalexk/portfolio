import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import Button from '../Button/Button.js';
// import Dropdown from '../DropDown/Dropdown.js'
import './Navbar.css';

function NavBar() {
    return (
        <nav className='navbar'>
            <Link tp='/' className='navbar-logo'>
            HOME
            </Link>

           
        </nav>
    );
}

export default NavBar;
