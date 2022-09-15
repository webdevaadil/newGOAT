import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateprofile } from "../../actions/userAction";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Paymentexpirepage = () => {
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(updateprofile({ paymentstatus: "false" }));
  })
  return <div>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:'100vh'}}>
   <Header/>
<div className="content">
  <div className="wrapper-1">
    <div className="wrapper-2">
      <h1>Hello!</h1>
      <p>Your Subscription to this service has expired.</p>
      <p>Please renew your subscription to continue with the services
Thank you </p>
      <Link to ="/password">
      <button className="go-home">
    Renew
      </button>
      </Link>
    </div>
</div>
</div>
<Footer/>
  </div> 
  </div>;
};
