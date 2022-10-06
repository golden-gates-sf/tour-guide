import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="main-header">Wonderful Journey</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </header>
    );
  }
}

export default Header;
