import React from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import Login from "./component/Login";
import PrivateRoute from "./component/PrivateRoute";
import Friend from "./component/Friends";

function App() {
  return (
    <div className="App">
    Yeet
    <nav>
    <Link to= "/login">Login</Link>
    <Link to="/protected">Friends</Link>
    </nav>
    

    <Switch>
      <Route path = '/login' component={Login}/>
      <PrivateRoute path = "/protected">
        <Route path = "/protected" component={Friend}/>
      </PrivateRoute>
      <Route component={Login}/>
    </Switch>
    
    </div>
  );
}

export default App;
