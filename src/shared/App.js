import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Allplaces, Myplaces } from '../pages';
import Header from '../components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      userName: null,
      gmailAccount: null
    }
  }

  render() {
    console.log("this.state: ", this.state);
    return (
      <Router>
        <div>
          <Route render={routerprops => <Header {...routerprops} stat={this.state} />}/>
          <Route exact path='/'  component={Home} />
          <Route path='/allplaces' component={Allplaces} />
          <Route path='/myplaces' component={Myplaces} />
        </div>
      </Router>
    );
  }
}

export default App;
