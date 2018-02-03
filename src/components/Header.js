import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FontAwesome from 'react-fontawesome';
// import axios from 'axios';
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  authLoginGoogleSucc(res) {
    console.log(res);
    if (localStorage.token) {
      localStorage.removeItem('token');
    }
    console.log( 'aldkfjalskfjasldkj', this.props.stat);
    localStorage.setItem('token', res.profileObj.googleId);
    this.props.stat.userId = res.profileObj.googleId;
    this.props.stat.userName = res.profileObj.name;
    this.props.stat.gmailAccount = res.profileObj.email;

  }

  authLoginGoogleFail(res) {
    this.props.history.push('/');
  }

  logout() {
    alert('Logout. :( ');
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    console.log( 'header' , this.props);
    return (
      <div className="header">
        <nav className="navBar">
          <Link to='/' className="gotohome"> bon Appetit</Link>
          <span className="separator"> | </span>
          <Link to="/allplaces" className="allList">ALL</Link>
          <Link to="/myplaces" className="myList">ME</Link>
          <div className="float-right">
          <span className="googleBtn">
              <GoogleLogin
                clientId="356033391619-mhiqtprivaujb32fie3o33t2np5plg4v.apps.googleusercontent.com"
                onSuccess={this.authLoginGoogleSucc.bind(this)}
                onFailure={this.authLoginGoogleFail.bind(this)}
              >
                <FontAwesome
                  name='googlelogin'
                />
                <span>Login</span>
              </GoogleLogin>
          </span>
            <span className="googleBtn">
            <GoogleLogout
              onLogoutSuccess={this.logout.bind(this)}
            >
              <FontAwesome
                name='googlelogout'
              />
              <span>Logout</span>
            </GoogleLogout>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}


export default Header;
