import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import LoginPage from './Components/LoginPage'
import Friends from './Components/friends'
import PrivateRoute from './Components/PrivateRoute'


function App() {
  return (
    <Router>
    <div className="App">
  
        <Link to ="/login">Login</Link>

        <Link to = "/friends"> friends </Link>



      <Switch>
        <PrivateRoute exact path ="/friends" component ={Friends}/>
        <Route path="/login" component ={LoginPage} />
          
      </Switch>



 
    </div>
    </Router>
  );
}

export default App;
