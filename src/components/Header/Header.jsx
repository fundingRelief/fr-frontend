import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <h1>
          <Link to={'/'}>funding relief</Link>
        </h1>
        <h4>
          <Link to={'/about'}>about</Link>
        </h4>
      </header>
    </>
  );
};

export default Header;
