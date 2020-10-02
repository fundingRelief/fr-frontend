import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <section>
        <h1>
          <Link to={'/'}>funding relief for wildfire victims</Link>
        </h1>
      </section>
    </>
  );
};

export default Header;
