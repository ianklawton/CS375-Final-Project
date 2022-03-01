import React, { useState } from "react";
import {Route, Routes, NavLink, BrowserRouter} from "react-router-dom";
import Login from "./login";
import Home from "./Home";
import Woods from "./Woods";
import Mountain from "./Mountain";
import Cave from "./Cave";

function Main() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
      <BrowserRouter>
      <div>
          <h1>Valley.txt</h1>
          <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/woods">Woods</NavLink></li>
            <li><NavLink to="/mountain">Mountain</NavLink></li>
	          <li><NavLink to="/cave">Cave</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/woods" element={<Woods/>}/>
            <Route path="/mountain" element={<Mountain/>}/>
            <Route path="/cave" element={<Cave/>}/>
          </Routes>
          </div>
        </div>
        </BrowserRouter>

    );
  }

export default Main;
