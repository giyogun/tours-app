import React from "react";
import { NavLink, Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Travel Advisory</div>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/tours" activeClassName={classes.active}>Tours</NavLink>
          </li>
          <li>
            <NavLink to="/reviews" activeClassName={classes.active}>Reviews</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
