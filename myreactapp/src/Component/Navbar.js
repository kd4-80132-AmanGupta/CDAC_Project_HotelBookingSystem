import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "../Styles/Navbar.css";
import { Dropdown } from 'react-bootstrap'
import { toast } from 'react-toastify';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const history = useHistory();
  const logout = () => {
    sessionStorage.clear();

    history.push("/login");
    toast.success('Logout successfully');
  };

  const isLoggedIn = sessionStorage.getItem('jwttoken');

  return (
    <>
      <div className="navbar">
        <div className="leftside" id={showLinks ? "open" : "close"}> 
           {/* <img src={logo} alt="restaurant logo" /> */}
        </div>

        <div className="rightside">
          <Link className="links" to="/hotel">Home</Link>
          <Link className="links" to="/about">About</Link>
          <Link className="links" to="/contact">Contact</Link>
          <div className='login-btn'>
              <Link className="links" to="/login">Login</Link>
            </div>
            {/* <div className='login-btn'>
              <Link onClick={logout} className="links" to="/logout" >Logout</Link>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;