import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importing CSS for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/vite.svg" alt="Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
