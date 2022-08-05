/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Playdio_Logo.png';
import { ReactComponent as LibraryIcon } from '../assets/Library.svg';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="" />
        <span>Playdio</span>
      </div>

      <nav className="sidebar__nav">
        <ul>
          <li>
            <Link to="#">
              <LibraryIcon /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <LibraryIcon /> <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <LibraryIcon /> <span>Playlist</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <LibraryIcon /> <span>Library</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
