import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/Search.svg';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-search">
        <input type="search" className="navbar-search__input" placeholder="Search for music, artist, genre" />
        <span className="navbar-search__btn">
          <SearchIcon />
        </span>
      </div>
      <div className="navbar-auth__btns">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
