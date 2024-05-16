import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import Avatar from '../Avatar';
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
