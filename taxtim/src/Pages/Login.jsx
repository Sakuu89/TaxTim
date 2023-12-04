import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import image from "../Images/c.png"
import image1 from "../Images/c2.png";
import "../Styles/Login.css";
import axios from "axios";
// import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from "../Firebase";
import { color } from 'framer-motion';
import { useToast, ChakraProvider, resolveStyleConfig } from '@chakra-ui/react';
export const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [error, setError] = useState("");
  const [disabledbutt, setDisabledButt] = useState(false);
  const [loginvalues, setLoginValues] = useState({
    email: "",
    pass: "",
  });
  const showToastLogin = (message, status = "error") => {
    toast({
      title: message,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };
  const handleLoginSubmission = () =>{
    if(!loginvalues.email || !loginvalues.pass){
      // showToastLogin("Fill all fields");
      // return;
    }
    // setError("");
    setDisabledButt(true);
    signInWithEmailAndPassword(auth,loginvalues.email, loginvalues.pass)
    .then(async(res) => {
      setDisabledButt(false);
      showToastLogin("Login successful", "success");
      setTimeout(() => {
        navigate('/');
      }, 1000); // Redirect to homepage after 3 seconds
    })
    .catch((err) => {
      setDisabledButt(false);
      showToastLogin(err.message);
  });
  }

  // signup --->

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const showToast = (message, status = "error") => {
    toast({
      title: message,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };
  const [errormsg, setErrorMsg] = useState("");
  const [submitdisabled, setSubmitDisabled] = useState(false);

  const handleSubmission = () =>{
    if(!values.name || !values.email || !values.pass){
      showToast("Fill all fields");
    }
    // showToast("");
    setSubmitDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
    .then(async(res) => {
      setSubmitDisabled(false);
      const user = res.user;
      await updateProfile(user,{
        displayName: values.name,
      });
      showToast("Signup successful", "success");
      setValues({ name: "", email: "", pass: "" }); 
      navigate('/login');
      return;
    })
    .catch((err) => {
      setSubmitDisabled(false);
      showToast(err.message);
  });
  }


  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleclickdisabled =() =>{
    setShow(!show);
    setDisabled(true);
  }
  
  
  return (
    <ChakraProvider>
    <div className='loginContainer1'>
      <div className='loginContainer'>
        <div className='login'>
          <h1 className='texth1'>I am a returning user.</h1>
          <h2 className='texth2'>Please enter your login details from before.</h2>
          {/* {isAuth? <h1 style={{color:"green", fontSize : "2.5rem" , fontWeight: "bold"}}>You are logged in</h1> : ""} */}

          <form className='loginform' >
            <label className='lablefrom'>Email address:
              {" "}
            </label>
            <input type="text" name='email1' className='inputform' onChange={(e) => setLoginValues((prev) => ({...prev, email: e.target.value}))}/>

            <label className='lablefrom'>
              Password:
            </label>
            <input type="password" name='password1'  className='inputform' onChange={(e) => setLoginValues((prev) => ({...prev, pass: e.target.value}))}/>

            <label className='lablefrom'>
              <input type="checkbox" />
              Remember me next time
            </label>
            <div className='link1'>
              <Link style={{color:"black"}} to={"/passwordReset"}>Forgot your password?</Link>
            </div>
            <p className='errormsg'>{error}</p>
           <button className='formbtn' type='submit' onClick={handleLoginSubmission} disabled={disabledbutt
          }>LOGIN TO MY ACCOUNT</button>

          </form>
          <button style={{marginLeft:"-22rem"}} onClick={handleclickdisabled} disabled={disabled} className='formbtn2'>I AM NEW HERE</button>
        </div>

        <div>
          <img className={show ? "image1" : "image2"} src={show ? image : image1} alt="error" />
        </div>

        {/* **************************** sign-up  ****************** */}
        {show ?
          <div className='sign'>

            <h1  className='texth1'>I am new here.</h1>
            <h2 className='texth2'>Enter your details below to start your Tax Return.</h2>

            <form className='loginform' >
              <label className='lablefrom'>First name:
                {" "}
              </label>
              <input type="text" name='name' className='inputform' value={values.name} onChange={(e) => setValues((prev) => ({...prev, name: e.target.value}))} />


              <label className='lablefrom'>Email address:
                {" "}
              </label >
              <input type="text" name='email' className='inputform' value={values.email} onChange={(e) => setValues((prev) => ({...prev, email: e.target.value}))} />

              <label className='lablefrom'>
                Password:
              </label>
              <input type="password" name='password' className='inputform' value={values.pass} onChange={(e) => setValues((prev) => ({...prev, pass: e.target.value}))} />
              <label className='lablefrom'>
                <input type="checkbox" />
                I accept the TaxTim terms
              </label>
              <p className='errormsg'>{errormsg}</p>
              <button  onClick={handleSubmission}
              disabled={submitdisabled}
              className='formbtn3' type='submit'>START YOUR TAX RETURN</button>

            </form>
            <div className='para'>
              <p><b style={{ color: "#4d4d4d", fontWeight: "bold" }}>TaxTim is for all individuals earning income in South Africa</b> including small business owners, freelancers and entrepreneurs. CFCs and local farming are excluded.</p>

              <p>TaxTim also caters for<b style={{ color: "#4d4d4d", fontWeight: "bold" }}>Micro Businesses</b> (under R14m Turnover) and Dormant Companies.</p>

              <p>TaxTim handles even the most complicated tax returns. Try us!</p>
            </div>
          </div> : ""}
      </div>
    </div>
    </ChakraProvider>
  )
}