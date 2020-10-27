import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>MERN deployment app</h1>
      <nav>
        <ul>
          <li>
            <Link to="/music">All</Link>
          </li>
          <li>
            <Link to="/music/new">New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
