import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FontAwesome from 'react-fontawesome';
import 'whatwg-fetch';
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  authLoginGoogleSucc(res) {
    if (localStorage.token) {
      localStorage.removeItem('token');
    }
    localStorage.setItem('token', res.profileObj.googleId);

    // 부모 props의 state값 변경
    this.props._accountCng(res.profileObj.googleId, res.profileObj.name, res.profileObj.email, res.profileObj.imageUrl);

    fetch('/api/usercreate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: this.props.stat.userId,
        userName: this.props.stat.userName,
        gmailAccount: this.props.stat.gmailAccount,
        thumbnail: this.props.stat.thumbnail
      })
    });
    alert(`환영합니다. ${this.props.stat.userName} 님 :)`)
    this.props.history.push('/');

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
