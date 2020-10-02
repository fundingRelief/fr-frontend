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
      </header>
    </>
  );
};

export default Header;
