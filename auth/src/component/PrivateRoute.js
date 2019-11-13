import React from 'react';
import {Route, Redirect} from "react-router-dom";

function isAuth(){
    console.log("runs")
    return sessionStorage.getItem("token") ? true : false;
    
}

const PrivateRoute = ({children, ...rest})=>{

  return(
      <Route {...rest} render={({location}) => isAuth() ? (children) : 
        (<Redirect to={{ pathname: '/login', state:{from: location}}}/>)}/>
  );

    

}


export default PrivateRoute;