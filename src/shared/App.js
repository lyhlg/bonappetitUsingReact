import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Allplaces, Myplaces, Login, Logout } from '../pages';

import Header from '../components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path='/' component={Home} />
        <Route path='/allplaces' component={Allplaces} />
        <Route path='/myplaces' component={Myplaces} />
        <Route path='/Login' component={Login} />
        <Route path='/Logout' component={Logout} />
      </div>
     </Router>
  )
};

export default App;
