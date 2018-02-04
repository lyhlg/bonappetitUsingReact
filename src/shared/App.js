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
      gmailAccount: null,
      thumbnail: null,
      placeList: []
    };
  }

  accountCng(id,name,acc,thmNail){
    this.setState({
      userId: id,
      userName: name,
      gmailAccount: acc,
      thumbnail: thmNail
    });
  }

  calledPlaceList(list){
    this.setState({
      placeList: JSON.parse(list)
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route render={routerprops => <Header {...routerprops} stat={this.state} _accountCng={this.accountCng.bind(this)}/>}/>
          <Route exact path='/'  component={Home} />
          <Route path='/allplaces' render={routerprops => <Allplaces {...routerprops} stat={this.state} _calledPlaceList={this.calledPlaceList.bind(this)} />} />
          <Route path='/myplaces' render={routerprops => <Myplaces {...routerprops} stat={this.state} _calledPlaceList={this.calledPlaceList.bind(this)} />} />
        </div>
      </Router>
    );
  }
}

export default App;
