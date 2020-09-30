import React from "react";
import "./Navbar.css";

function NavBar() {
    return (
        <nav className="navbar navcontainer">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <h1 id="navbarname">CovidMapper</h1>
                </a>
                <a
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    datatarget="navbarBasicExample"
                    href="/"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
             <ul className="navbar-end">

            <li className="navbar-item" key={1}>
            <a href="/">Home</a>
        </li>

            <li className="navbar-item" key={2}>
                <a href="/" >
                    Log Out
                </a>
            </li>
            
            <li className="navbar-item" key={3}>
                <a href="/portfolio">Portfolio</a>
            </li>

            </ul>
        </nav>
    );
}

export default NavBar;
