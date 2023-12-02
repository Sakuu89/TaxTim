import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
class Navbar extends Component  {

    state={clicked: false};
    
    handleclick = () => {
        this.setState({clicked: !this.state.clicked});
    }
    // const handleLoginClick = () => {
    //     // Redirect to the login page when the button is clicked
    //     // You can also use a Link component directly here
    //     // <Link to="/login"></Link>
    //     window.location.href = '/login';
    //   };
    render(){
  return (
    
    <>
      <div className="top-nav">
        <div className="reg-nav">
          <div>
            <p>Registered for SARS eFiling? Click here to get started.</p>
          </div>
        </div>
        <div id="link-div" className={this.state.clicked ? "#link-div active" : "#link-div"}
        >
          <div id="some">
            <Link className="link" to="/">
              Company
            </Link>
          </div>
          <div id="some">
            <Link className="link" to="/contact">
              Logbook
            </Link>
          </div>
          <div id="some">
            <Link className="link" to="/faq">
              FAQ
            </Link>
          </div>
          <div id="some">
            <Link className="link" to="/calculators">
              Calculators
            </Link>
          </div>
          <div id="some">
            <Link className="link" to="/login">
              Paynow
            </Link>
          </div>
        </div>
        <div id= "mobile" onClick={this.handleclick}>
            <i id="bar"
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            >
            </i>
        </div>
        
      </div>
      <div className="top-nav-II">
        <div className="logo-img">
          <Link to="/">
            <img src="https://www.taxtim.com/za/images/taxtim-logo.svg" alt="" />
          </Link>
        </div>
        <div className="top-nav-III">
          <div>
            <a href="/howitworks" className="anch">How it works</a>
          </div>
          <div>
            <a href="/" className="anch">Blog</a>
          </div>
          <div>
            <a href="/" className="anch">About</a>
          </div>
          <div>
            <button  className="getstart">LOGIN</button>
          </div>
        </div>
      </div>
    </>
  );
};
};

export default Navbar;