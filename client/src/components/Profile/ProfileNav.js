import React, { useEffect } from "react";
// import scss from'scss'
import "./profilenav.css";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { loaduser, logout } from "../../actions/userAction";
import store from "../../store";

export const ProfileNav = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading} = useSelector((state) => state.user);
  useEffect(()=>{

    if(isAuthenticated){
      
    }
    store.dispatch(loaduser())

  },[])
  
  function logoutUser() {
    dispatch(logout());
    alert("Logout Successfully");

      navigate("/login")
      
  
  }
  console.log(user);

  return (
    <>
        <div className="profile_box_one">
          <h1>Profile Setting</h1>
          <div className="pic1">
            <Link to="/dashboard" className="">
              Edit Profile
            </Link>
            <img
              className="img2"
          src="img/edit.jpg"

              alt="loading"
            />
          </div>
          <div className="pic2">
            <Link to="/dashboard/payment">Payment Methods</Link>
            <img
              className="img2"
              src="img/credit-carddfdf.png"
              alt="loading"
            />
          </div>
          <div className="pic3">
            <Link to="/dashboard/accountsetting">Account Settings</Link>

            <img
              className="img2"
              src= "img/settings.jpg"
              alt="loading"
            />
          </div>
          <div className="pic4">
            <Link to="/dashboard/about">About</Link>

            <img
              className="img2"
              src="img/info.jpg"
              alt="loading"
            />
          </div>
          <div className="pic5">
            <p style={{cursor:"pointer"}}onClick={logoutUser}>Logout</p>
            <img
              className="img2"
              src="img/log-out.png"
              alt="loading"
            />
          </div>
        
      </div>
    </>
  );
};

