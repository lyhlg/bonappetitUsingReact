import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  render() {
    const responseGoogle = (res) => {
      // console.log(response);
      console.log(res)
      if ( res.El ) {
        console.log('login')
      }
    }
    return (
      <div>

        <GoogleLogin
          clientId="356033391619-mhiqtprivaujb32fie3o33t2np5plg4v.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        {/* <FontAwesome
          name='google'
        />
        <span> Login with Google</span> */}
      </div>
    )
  }
};
export default Login;
