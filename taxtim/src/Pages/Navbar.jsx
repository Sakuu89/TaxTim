import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import {auth} from "../Firebase";

const Navbar = ({logout,userName}) => {
 const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  

  const handleclick = () => {
    setClicked(!clicked);
  };

  const handleLoginClick = () => {
    // Redirect to the login page when the button is clicked
    // You can also use a Link component directly here
    // <Link to="/login"></Link>
    navigate('/login');
    
  };

  return (
    <>
      <div className="top-nav">
        <div className="reg-nav">
          <div>
            <p>Registered for SARS eFiling? Click here to get started.</p>
          </div>
        </div>
        <div
          id="link-div"
          className={clicked ? "link-div active" : "link-div"}
        >
          <div className="some">
            <Link className="link" to="/comapany">
              Company
            </Link>
          </div>
          <div className="some">
            <Link className="link" to="/logbook">
              Logbook
            </Link>
          </div>
          <div className="some">
            <Link className="link" to="/faq">
              FAQ
            </Link>
          </div>
          <div className="some">
            <Link className="link" to="/calculator">
              Calculators
            </Link>
          </div>
          <div className="some">
            <Link className="link" to="/paynow">
              Paynow
            </Link>
          </div>
        </div>
        <div id="mobile" onClick={handleclick}>
          <i
            id="bar"
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </div>
      <div className="top-nav-II">
        <div className="logo-img">
          <Link to="/">
            <img
              src="https://www.taxtim.com/za/images/taxtim-logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="top-nav-III">
          <div>
          <Link to="/howitworks" className="anch">
              How it works
            </Link>
          </div>
          <div>
          <Link to="/blog" className="anch">
              Blog
            </Link>
          </div>
          <div>
          <Link to="/about" className="anch">
              About
            </Link>
          </div>
          <h2 className="loginname" style={{fontFamily:"",fontSize:"14px",fontWeight:"900", marginLeft:"4.5rem"}}>{userName ? `Hello,${userName}` : ""}  </h2>
          <div>
            <button  onClick={handleLoginClick} className="getstart">
            {logout?"LOGIN":"LOGOUT"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
