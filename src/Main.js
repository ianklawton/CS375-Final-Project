import React, { Component } from "react";
import {Route, Routes, NavLink, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Woods from "./Woods";
import Mountain from "./Mountain";
import Cave from "./Cave";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <h1>Valley.txt</h1>
          <ul className="header">
            <li><NavLink to ="/">Home</NavLink></li>
            <li><NavLink to="/woods">Woods</NavLink></li>
            <li><NavLink to="/mountain">Mountain</NavLink></li>
	          <li><NavLink to="/cave">Cave</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
	          <Route path="/" element={<Home/>}/>
            <Route path="/woods" element={<Woods/>}/>
            <Route path="/mountain" element={<Mountain/>}/>
            <Route path="/cave" element={<Cave/>}/>
          </Routes>
          </div>
        </div>
        </BrowserRouter>

    );
  }
}

export default Main;
