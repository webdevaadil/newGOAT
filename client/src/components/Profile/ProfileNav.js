import React, { useEffect } from "react";
// import scss from'scss'
import "./profilenav.css";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { loaduser, logout } from "../../actions/userAction";
import store from "../../store";
import CreditCardInput from 'react-credit-card-input';
import {useAlert} from "react-alert"
import { confirmAlert } from 'react-confirm-alert'
import editimg from "./img/feather.png"

export const ProfileNav = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch();
  const alert  = useAlert()
  const { user, isAuthenticated, loading} = useSelector((state) => state.user);
  useEffect(()=>{
    store.dispatch(loaduser())
  },[])
  
  function logoutUser() {
    dispatch(logout());
    // const confirmdata =   window.confirm("are you sure,You Want to Logout")
    // if(confirmdata===true){
    // }
    // else{
    //   navigate("/dashboard")
    // }

      
      
  
  }

  return (
    <>
        <div className="profile_box_one">
          <h1>Profile Setting</h1>
          <div className="pic1">
            <Link to="/dashboard" className="">
              Edit Profile
            </Link>

            <Link to = "/dashboard">

            <img style={{ filter: "black"}}
              className="img2"
          src={editimg}

              alt="loading"
            />
            </Link>
          </div>
          <div className="pic2">
            <Link to="/dashboard/Package">Packages</Link>

            <Link to="/dashboard/Package">
            <img
              className="img2"
              src="/img/credit-carddfdf.png"
              alt="loading"
            />
            </Link>
          </div>
          <div className="pic3">
            <Link to="/dashboard/changepassword">Change Password</Link>

<Link to="/dashboard/changepassword">
            <img
              className="img2"
              src= "/img/settings.jpg"
              alt="loading"
            />
</Link>
          </div>
          <div className="pic4">
            <Link to="/dashboard/about">About</Link>
<Link to = "/dashboard/about">
            <img
              className="img2"
              src="/img/info.jpg"
              alt="loading"
            />
</Link>
          </div>
          {/* <div onClick={logoutUser} style={{cursor:"pointer"}} >
          <div className="pic5">
            <p >Logout</p>
            <img
              className="img2"
              src="/img/log-out.png"
              alt="loading"
            />
          </div>

          </div>
         */}
      </div>
    </>
  );
};

