import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userAction";
import Footer from "../Footer/Footer";
import HomeFooter from "../Footer/HomeFooter";
import { Header } from "../Header/Header";
import img1 from "../../Images/GOAT_logo.png";


export const Thankyou = () => {
  let { isAuthenticated, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/");
  }
  return (
    <>
      <div
        className="result"
        style={{
          display: "block",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div className="thankyoucontent1">
          <div className="content " style={{

            color: "white",
            fontSize: "20px"
          }}>
            <div className="" style={{ display: "flex", justifyContent: "center" }}>
              <div className="baner-ct" >
                <img src={img1} alt="" />
                <h1 style={{ color: "white" }}>Thankyou For Signing up !</h1>
                <p>Welcome to The GOAT's Tips.</p>
                <p>We know why you're here and we're so excited to have you in our winning community.
                  Look out for our emails in your inbox (please check your spam/junk) with everything you need to know from event times , odds and most importantly, STAKING.</p>
                <p>It's easy to get over confident when you win but please remember to always follow the correct staking guide. This will help you win in the longterm.</p>
                <p>
                If you have any questions, feedback or you think your good enough to be apart of the elite GOAT tipsters, please email us at winner@thegoatstips.com.au.              </p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
