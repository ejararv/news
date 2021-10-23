import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_links}>
        <Link to="/news">News</Link>
        <Link to="/albums">Albums</Link>
      </div>
    </div>
  );
};

export default Navbar;
