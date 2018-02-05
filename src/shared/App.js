import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Allplaces, Myplaces, Redirect } from '../pages';
import Header from '../components/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      userName: null,
      gmailAccount: null,
      thumbnail: null,
      placeList: [],
      likeFlagChanged: false,
      ModalTitle: null
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

  openTitle() {
    this.setState({
      titleIsOpen: true
    });
  };

  cancelTitle() {
    this.setState({
      titleIsOpen: false
    });
  };

  likeToUnlike(e) {
    const title = e.target.textContent.slice(0,e.target.textContent.indexOf(' '));
    var parseData = JSON.parse(localStorage.data);
    for (var item of parseData) {
      for (var val in item) {
        if (title.includes(item[val])) {
            fetch(`/api/likes?token=${title}`)
              .then(res => {
                return res.json();
              }).then(json => {
                item.likes =json.likes;
                this.setState({
                  likeFlagChanged: !this.state.likeFlagChanged
                })
              }).catch(err => console.error('parsing failed', err))
        }
      }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route render={routerprops => <Header {...routerprops} stat={this.state} _accountCng={this.accountCng.bind(this)}/>}/>
          <Route exact path='/'  component={Home} />
          <Route path='/allplaces' render={routerprops => <Allplaces {...routerprops} stat={this.state} _openTitle={this.openTitle.bind(this)} _cancelTitle={this.cancelTitle.bind(this)} _likeToUnlike={this.likeToUnlike.bind(this)} _calledPlaceList={this.calledPlaceList.bind(this)} />} />
          <Route path='/myplaces' render={routerprops => <Myplaces {...routerprops} stat={this.state} _openTitle={this.openTitle.bind(this)} _cancelTitle={this.cancelTitle.bind(this)} _likeToUnlike={this.likeToUnlike.bind(this)} _calledPlaceList={this.calledPlaceList.bind(this)} />} />
          <Route path='/redirect' component={Redirect} />
        </div>
      </Router>
    );
  }
}

export default App;
