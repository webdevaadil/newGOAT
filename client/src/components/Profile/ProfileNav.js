import React from "react";
// import scss from'scss'
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import { Header } from "../Header/Header";

export const ProfileNav = () => {
  const { user, isAuthenticated, loading,error } = useSelector((state) => state.user);

  console.log(user);

  return (
    <>
      <div className="flexbox">
        <div className="box_one">
          <h1>Profile Setting</h1>
          <div className="pic1">
            <Link to="/dashboard" className="col">
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
            <h2>About</h2>
            <img
              className="img2"
              src="img/info.jpg"
              alt="loading"
            />
          </div>
          <div className="pic5">
            <h2>Logout</h2>
            <img
              className="img2"
              src="img/log-out.png"
              alt="loading"
            />
          </div>
        </div>
      </div>
    </>
  );
};

