import React from 'react';
import {Link} from 'react-router-dom';
import './style/Header.scss'

const Header = (props) => {
    return (
        <header className="header">
            <Link to="/"><h1><img src="./img/logo.svg" alt="logo" /></h1></Link >
            <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Propile</a></li>
                  <li><a href="#">Project</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
            </nav>
        </header>
    );
};

export default Header;