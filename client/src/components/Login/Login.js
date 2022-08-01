import { useEffect, useState } from "react";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import "./Login.css";
import axios from "axios";
import {clearErrors,login } from "../../actions/userAction";
import image1 from "../../Images/Rectangle1.jpg"
import { Metadata } from "../layout/Metadata";
import { Loader } from "../layout/Loader";
import {useAlert, userAlert} from "react-alert"
import store from "../../store";

export const Login = () => {
  const {user,error,loading,isAuthenticated}  = useSelector((state)=>state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert()

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    try {
      dispatch(login(loginEmail,loginPassword))
    } 
    catch (error) {
      if(error){
        return error
      }
      
    }}
    useEffect(()=>{
      
      if(error){
        alert.error(error)
        dispatch(clearErrors());
      }

      if(isAuthenticated){

        navigate("/") 

      }
     
    },[error,navigate,isAuthenticated,loading])

    function myFunction() {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
  return (
    <>
    {loading&&<Loader/>}
    <Metadata title = "loginUser"/>

    <section id="form-section">
    <div className="wel-form">
      <div className="wel-p1 img-main">
        <div className="img-main">
        </div>
      </div>
      <div className="wel-p1 wel-bg">
        <div className="form-content">
          <h2>Welcome!</h2>
          <div className="form-main">
            <form onSubmit={handleSubmit} className="form-floating mb-3">
              <input onChange={(e)=>(setLoginEmail(e.target.value))} name = "email" value = {loginEmail} type="email"
              className="form-control mb-4" id="floatingInputValue" placeholder="yourmail@mail.com"/>
              <label htmlFor="floatingInputValue">Email Address</label>
              <div className="form-floating mb-3">
                <input 
                name="password"
                value={loginPassword}
                onChange={(e)=>setLoginPassword(e.target.value)}
                type="password" className="form-control" id="myInput" placeholder="*******" />
                <i className="fa fa-eye" onClick={myFunction}></i>
                <label htmlFor="floatingPassword">Passwords</label>
              </div>
              <div className="fom-btn mb-3">
                <button style={{backgroundColor:" #10867F",color:'black'}} disabled = {loginPassword==""} type="submit" className="btn btn-outline-secondary">Login</button>
                <Link to ="/signup"  className="btn btn-outline-secondary">Sign Up</Link>

              </div>
            </form>
           
          </div>
          <p>By signing up, I agree to the <span>Terms and conditions and Privacy policy</span></p>

        </div>
      </div>
    </div>

  </section>

    </>
  );
}
