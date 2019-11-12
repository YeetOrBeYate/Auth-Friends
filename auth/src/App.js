import React from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
    Yeet
    <nav>
    <Link to= "/login">Login</Link>
    </nav>
    

    <Switch>
      <Route path = '/login' component={Login}/>
      <Route component={Login}/>
    </Switch>
    
    </div>
  );
}

export default App;
