import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
// import Button from './Button.js'


function Navbar() {
    const [click, setClick] = useState(false);
    
    const [dropdown, setDropdown] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    // const [button, setButton] = useState(true);
    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // },[]);
    // window.addEventListener('resize',showButton);
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
        <nav className='navbar'>
            {/* <div className='navbar-container'> */}
            <Link to='/' className='navbar-logo'>
            HOME <i className='fab fa-firstdraft'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects <i className='fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        Contact Me
                    </Link>
                </li>
            </ul>
            {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            {/* </div> */}
        </nav>
        </>
    );
}

export default Navbar;
