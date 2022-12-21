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
        className="thankyoucontent"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div className="thankyoucontent1">
        <div className="content " style={{
                
                color:"white",
                fontSize:"20px"
              }}>
          <div className="" style={{display:"flex",justifyContent:"center"}}>
            <div className="wrapper-2" >
            <img src={img1} alt="" />
              <h1 style={{color:"white"}}>Thankyou For Signing up !</h1>
              <p>Welcome to The GOAT's Tips – Winning!</p>
              <p>You will soon receive an email confirming your purchase and further details about your subscription. If not received within 10 minutes, please check your junk mail folder (please add us to your safe senders list to ensure you’re able to receive your tipping emails).</p>
              <p>
              Furthermore, we’d love to hear from you if you have any additional questions or feedback, you contact us at winner@thegoatstips.com.au.              </p>
              
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
