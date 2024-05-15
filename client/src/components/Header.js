import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Message', icon: 'near_me', path: '/message' },
    { label: 'Discover', icon: 'explore', path: '/discover' },
    { label: 'Notify', icon: 'favorite', path: '/notify' },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
      <a className="navbar-brand" href="#">
        KasiChat
      </a>

      <div className="menu">
        <ul className="navbar-nav flex-row">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <NavLink className="nav-link" to={link.path} activeClassName="active" exact>
                <i className="material-icons">{link.icon}</i>
              </NavLink>
            </li>
          ))}

          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              User
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <Link className="dropdown-item" to="/">
                Dark Mode
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/">
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
