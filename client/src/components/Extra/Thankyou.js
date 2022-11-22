import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userAction";
import Footer from "../Footer/Footer";
import HomeFooter from "../Footer/HomeFooter";
import { Header } from "../Header/Header";

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
          height: "100vh",
        }}
      >
        <div className="thankyoubg"></div>
        <div className="content ">
          <div className="" style={{display:"flex",justifyContent:"center",height:"100vh"}}>
            <div className="wrapper-2">
              <h1>Thank you For Signing up !</h1>
              <p>Welcome to The GOAT's Tips – Winning!</p>
              <p>You will soon receive an email confirming your purchase and further details about your subscription. If not received within 10 minutes, please check your junk mail folder (please add us to your safe senders list to ensure you’re able to receive your tipping emails), and then contact us at winner@thegoatstips.com.au.</p>
              <p>
              Furthermore, we’d love to hear from you if you have any additional questions or feedback.              </p>
              
              {/* <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/signup">
                  <button className="go-home">SignUp</button>
                </Link>
                <Link to="/login">
                  <button className="go-home ml-4">Login</button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
