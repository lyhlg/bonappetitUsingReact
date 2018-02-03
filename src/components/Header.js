import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navBar">
        <Link to='/' className="gotohome"> bon Appetit</Link>
        <span className="separator"> | </span>
        <Link to="/allplaces" className="allList">ALL</Link>
        <Link to="/myplaces" className="myList">ME</Link>
        <div className="float-right">
          <Link to="/Login" className="allList">IN</Link>
          <Link to="/Logout" className="allList">OUT</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
