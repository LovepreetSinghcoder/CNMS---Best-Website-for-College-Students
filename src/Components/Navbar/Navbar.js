import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
// import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <div className="navbar">
                <div className="main-div-nav">
                    <div className="l-nav">
                        <div className="nav-main-title"><span>CNMS</span></div>
                    </div>
                    <div className="r-nav">
                        <ul>
                            <li>
                                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                                    User
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-bottom"></div>
            </div>
        </>
    );
};

export default Navbar;
