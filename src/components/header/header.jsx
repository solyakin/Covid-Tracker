import React from 'react';
import '../header/header.css';

const Header = () => (
    <div className = 'header'>
        <nav>
            <h1>
                CovidTracker
            </h1>
            <ul>
                <li>Home</li>
                <li>Symptoms</li>
                <li>Prevention</li>
            </ul>
        </nav>
    </div>
)

export default Header;