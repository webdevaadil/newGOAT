import React, { useEffect, useState } from "react";
import { ProfileNav } from "./ProfileNav";
import "./paymentmethoad.css";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../layout/Loader";
import { Navigate } from "react-router-dom";
import { useAlert } from "react-alert";
import img1 from "../../edited-btn/level.png";
import img2 from "../../edited-btn/name1.png";
import img3 from "../../edited-btn/name2.png";
import img4 from "../../edited-btn/name3.png";
import img5 from "../../edited-btn/name4.png";
import { PayPalButton } from "react-paypal-button-v2";
import { useNavigate } from "react-router-dom";



import { clearErrors, loaduser, updateprofile } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import Select from "react-select";
import axios from "axios";
import HomeFooter from "../Footer/HomeFooter";


export const PaymentMethoad = () => {
  const [test, settest] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const alert = useAlert();
  const date = new Date();
  date.setDate(date.getDate() + 6);
  const { user, isAuthenticated, loading, isUpdated, error } = useSelector(
    (state) => state.user
  );
  const [packages, setpackages] = useState("");

  const updatepro = (e) => {
    dispatch(updateprofile({ paymentstatus: "true" ,packages,paymentDate: Date.now(),PaymentexpireDate: date,}));
  };
  
  useEffect(() => {
    if (user) {
     
      setpackages(user.packages);
     
    }
    
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    
    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loaduser());

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, user, alert,isUpdated]);
  const options = [
    {
      value: "$60 / week",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img1}
            alt="loading"
          />
          $60 per week
        </div>
      ),
    },
    {
      value: "$45 / week",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img2}
            alt="loading"
          />
          $45 per week
        </div>
      ),
    },
    {
      value: "$30 / week",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img3}
            alt="loading"
          />
          $30 per week
        </div>
      ),
    },
    {
      value: "$15 / week",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img4}
            alt="loading"
          />
          $15 per week
        </div>
      ),
    },
    {
      value: "Free",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img5}
            alt="loading"
          />
          Free
        </div>
      ),
    },
  ];
  const customStyles = {
    height: 45,
    zIndex: 999,
  };
  const updateP = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    
    myForm.set("packages", packages);

    // console.log(myForm);
    dispatch(updateprofile(myForm));
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }
  const handle=(e)=>{
    setpackages( e.value )
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated === true ? (
            <div className="payment_box_two">
              {packages==="$60 / week" ? <>
              <h2>Platinum Membership</h2>
              <h2>$60 per Week</h2>
              <ul>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
              </ul></>:"" }
              {packages==="$45 / week" ? <>
              <h2>Gold Membership</h2>
              <h2>$45 per Week</h2>
              <ul>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
              </ul></>:"" }
              {packages==="$30 / week" ? <>
              <h2>silver Membership</h2>
              <h2>$30 per week</h2>
              <ul>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
              </ul></>:"" }
              {packages==="$15 / week" ? <>
              <h2>Bronze Membership</h2>
              <h2>$15 per Week</h2>
              <ul>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
              </ul></>:"" }
              {packages==="Free" ? <>
              <h2>Pub Punster</h2>
              <h2>Free</h2>
              <ul>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
              </ul></>:"" }
              

              <div className="top">
                <form className="box_three form-floating mb-3"  onSubmit={updateP}>
                  <h2 className="per_text">Membership Details</h2>
                  <div className="form-floating" style={{ zIndex: 999,}}>
                  <Select
                   className="Select_pack"
                   options={options}
                   styles={customStyles}
                    value={options.filter(function(option) {
                      return option.value === packages;
                    })}
            
                    onChange={handle}
                  />
                  </div>
                  <h2 className="pay_detail">Payment Details</h2>
                  
                  <div className="fom-btn mb-3" style={{justifyContent:"center"}}>
                        <div>
                          <div style={{ maxWidth: "750px", minHeight: "200px" }}>
                          {packages==="Free"?( <button
              className="btn_two"
               onClick={updatepro}
            >
              Select
            </button>):(
                            <>
                             <PayPalButton createOrder={async (data, actions) => {
                                return await fetch("/api/auth/pay", {
                                  method: "post",
                                  headers:{
                                    "Content-Type":"application/json"
                                    },
                                  body: JSON.stringify({packages:packages})
                                  // use the "body" param to optionally pass additional order information
                                  // like product ids or amount
                                })
                                  .then((response) => response.json())
                                  .then((order) => order.id)
                                  // .then((response) =>console.log(response))

                                  .catch((err) => {
                                    console.log(err);
                                  });
                                // console.log(response)
                              }}
                              ///////////////////////
                              onApprove={async (data, actions) => {
                                console.log(data);

                                return await axios
                                  .post(
                                    `/api/auth/order/${data.orderID}/capture`,
                                    {}
                                  )
                                  .then((response) => response)
                                  .then((orderData) => {
                                    settest(orderData);
                                    // Successful capture! For dev/demo purposes:
                                    console.log("Capture result", );
                                  })
                                  .then((orderData) => console.log("orderData"))
                                  .then(updatepro())
                                  
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              }}
                              catchError={(err, data) => {
                                // alert("Transaction completed by " + details.payer.name.given_name);
                                console.log(err);

                                // OPTIONAL: Call your server to save the transaction
                              }}
                            /></>
                          )}
                           
                          </div>
                        </div>
                      </div>
                </form>
              </div>
            </div>
          ) : (
            <Navigate to={"/login"} />
          )}

        </>
      )}
    </>
  );
};
