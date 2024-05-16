import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Avatar from '../Avatar';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { logout } from '../../redux/actions/authAction';

const navLinks = [
  { label: 'Home', icon: 'home', path: '/' },
  { label: 'Message', icon: 'near_me', path: '/message' },
  { label: 'Discover', icon: 'explore', path: '/discover' },
  { label: 'Notify', icon: 'favorite', path: '/notify' },
];

const Menu = () => {
  const dispatch = useDispatch();

  const { auth, theme } = useSelector((state) => state);

  const { pathname } = useLocation();

  const isActive = (pn) => {
    if (pn === pathname) return 'active';
  };

  return (
    <div className="menu">
      <ul className="navbar-nav flex-row">
        {navLinks.map((link, index) => (
          <li key={index} className={`nav-item px-2 ${isActive(link.path)}`}>
            <NavLink className="nav-link" to={link.path}>
              <i className="material-icons">{link.icon}</i>
            </NavLink>
          </li>
        ))}
        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle profile-img"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Avatar src={auth.user.avatar} size={'medium-avatar'} />
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
              Profile
            </Link>
            <label
              htmlFor="theme"
              className="dropdown-item"
              onClick={() => dispatch({ type: GLOBALTYPES.THEME, payload: !theme })}
            >
              {theme ? 'Light mode' : 'Dark mode'}
            </label>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/" onClick={() => dispatch(logout())}>
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
