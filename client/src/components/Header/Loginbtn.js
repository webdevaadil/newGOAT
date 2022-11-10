import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { loaduser, logout } from "../../actions/userAction";
import { Loader } from "../layout/Loader";

export const Loginbtn = () => {
  const dispatch =useDispatch()
  const navigate = useNavigate();
  const { user, isAuthenticated, loading} = useSelector((state) =>state.user);
  useEffect(()=>{
      dispatch(loaduser())
  },[])
  const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
  const logoutUser=()=>{
    dispatch(logout());
    navigate("/");
  }
console.log(loading,"loading");
console.log(user,"user");
console.log(isAuthenticated,"is");
  return (
    <>
        <span className="home_btn">
          {loading === false?(

           user &&  user.username? (<><div>
          <ul className="navbar-nav top-btn ml-auto">

          {user.packages ==="$45 / week"?<button style = {{backgroundColor:"#DBAF1F"}} onClick={()=>navigate("/dashboard")} className="user_btn">{uppercaseWords(user.username)}</button>:""}
          {user.packages ==="$60 / week"?<button style = {{backgroundColor:"#F0F0EF",color:" #767A81"}} onClick={()=>navigate("/dashboard")} className="user_btn">{uppercaseWords(user.username)}</button>:""}
          {user.packages ==="$30 / week"?<button style = {{backgroundColor:"#B6B1B1"}} onClick={()=>navigate("/dashboard")} className="user_btn">{uppercaseWords(user.username)}</button>:""}
          {user.packages ==="$15 / week"?<button style = {{backgroundColor:" #A55947"}} onClick={()=>navigate("/dashboard")} className="user_btn">{uppercaseWords(user.username)}</button>:""}
          {user.packages ==="Free"?<button style = {{backgroundColor:" #433F3F"}} onClick={()=>navigate("/dashboard")} className="user_btn">{uppercaseWords(user.username)}</button>:""}
         <a ><button onClick={logoutUser} className='btn btn-2'>Logout</button>  </a>
         </ul></div>
          </>):""
      ):("")}
      
        
      </span>

    </>
  );
};