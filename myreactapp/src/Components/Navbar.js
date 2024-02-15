import React from 'react'
import { useState } from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import "../Styles/Navbar.css"
import Login from '../Auth/Login'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  function Click(){
    setShowLinks(!showLinks);
   }
  return (
    <>
      <div className="navbar">
        <div className="leftside" id={showLinks ? "open" : "close"}> 
           {/* <img src={logo} alt="restaurant logo" /> */}
        </div>

        <div className="rightside">
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/about">About</Link>
          <Link className="links" to="/contact">Contact</Link>
          <div className='login-btn'><Link className="links" to="/login">
          Login
          </Link>
          </div>
        </div>
    </div>
      <Route path="/login" component={Login}/>
      </>
  )
}

export default Navbar;
