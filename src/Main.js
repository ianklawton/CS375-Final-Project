import React, { Component,useState } from "react";
import {Route, Routes, NavLink, BrowserRouter} from "react-router-dom";
import Login from "./login";
import Home from "./Home";
import Woods from "./Woods";
import Mountain from "./Mountain";
import Cave from "./Cave";



class Main extends Component{
  constructor(){
    super();

    this.state = { username: '',token: false };
    this.setToken = this.setToken.bind(this)
 }

setToken(username,token){
  this.setState({username: username, token : token})
}

render(){
  const {token} = this.state.token

  if(!this.state.token) {
    return <Login setToken = {this.setToken}/>
  }
  else{

  return (

      <BrowserRouter>
      <div>
          <h1>Valley.txt</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/woods">Woods</NavLink></li>
            <li><NavLink to="/mountain">Mountain</NavLink></li>
	          <li><NavLink to="/cave">Cave</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path="/" element={<Home username={this.state.username}/>}/>
            <Route path="/woods" element={<Woods username={this.state.username}/>}/>
            <Route path="/mountain" element={<Mountain username={this.state.username}/>}/>
            <Route path="/cave" element={<Cave username={this.state.username}/>}/>
          </Routes>
          </div>
        </div>
        </BrowserRouter>

    );
  }
}
}

export default Main;
