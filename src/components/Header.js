import React from 'react';
import './Header.css';
import Logo from '../assets/images/logo.png';
import User from '../assets/images/user.png';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo}  alt="logo"/>
                </a>
            </div>   
            <div className="header-user">
                <a href="/">
                    <img src={User}  alt="user"/>
                </a>
            </div>     
        </header>
    );
}
