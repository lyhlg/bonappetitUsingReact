import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "./Header.css";

const Header = () => {
  const responseGoogle = res => {
    console.log (res);
  }
  const logout = res => {
    console.log(res);
  }
  return (
    <div className="header">
      <nav className="navBar">
        <Link to='/' className="gotohome"> bon Appetit</Link>
        <span className="separator"> | </span>
        <Link to="/allplaces" className="allList">ALL</Link>
        <Link to="/myplaces" className="myList">ME</Link>
        <div className="float-right">
          {/* <Link to="/Login" className="allList">IN</Link>
          <Link to="/Logout" className="allList">OUT</Link> */}

          <GoogleLogin
            clientId="356033391619-mhiqtprivaujb32fie3o33t2np5plg4v.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={logout}
          >
          </GoogleLogout>
        </div>
      </nav>
    </div>
  );
};

export default Header;
