import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
  return (
    <div className="header bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
        <Link className="logo" to="/">
          <strong className="navbar-brand p-0 m-0">KasiChat</strong>
        </Link>
        <Search />
        <Menu />
      </nav>
    </div>
  );
};

export default Header;
