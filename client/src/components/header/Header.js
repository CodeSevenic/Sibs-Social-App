import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
      <Link className="navbar-brand" to="/">
        <strong className="navbar-brand p-0 m-0">KasiChat</strong>
      </Link>
      <Menu />
    </nav>
  );
};

export default Header;
