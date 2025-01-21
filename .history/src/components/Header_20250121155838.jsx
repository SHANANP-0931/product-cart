import React from 'react';
import './Header.css'; // Importing CSS for the header

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/vite.svg" alt="Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
