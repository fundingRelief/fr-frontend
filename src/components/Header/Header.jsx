import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <h1 className={styles.logo}>
          <Link to={'/'}>funding relief</Link>
        </h1>
        <nav className={styles.navbar}>
          <h4>
            <Link className={styles.navLink} to={'/about'}>
              about
            </Link>
          </h4>
        </nav>
      </header>
    </>
  );
};

export default Header;
