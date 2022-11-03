import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/layout/Loader';
import style from "./Package.css";
import { format } from "date-fns";

import Select from "react-select";
import img1 from "../../Images/level.png";
import img2 from "../../Images/name1.png";
import img3 from "../../Images/name2.png";
import img4 from "../../Images/name3.png";
import img5 from "../../Images/name4.png";
import { PayPalButton } from 'react-paypal-button-v2';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { updateprofile } from '../../actions/userAction';
import visa from "../assets/cards/visa.png";
import americanexpress from "../assets/cards/americanexpress.png";
import dinersclub from "../assets/cards/dinersclub.jpg";
import discover from "../assets/cards/discover.jpg";
import elo from "../assets/cards/elo.png";
import hiper from "../assets/cards/hiper.png";
import jcb from "../assets/cards/jcb.png";
import mastercard from "../assets/cards/mastercard.png";
import mir from "../assets/cards/mir.png";
import unionpay from "../assets/cards/unionpay.png";
import AddPayMethod from './AddPayMethod';


export const Checkout = () => {
  const { tips } = useParams();
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const [packages, setpackages] = useState(`${tips} / week`);
  const [test, settest] = useState();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const handle = async (e) => {
    setpackages(e.value);
  };

  const date = new Date();
  date.setDate(date.getDate() + 6);

  const updatepro = (e) => {
    e.preventDefault()
    dispatch(
      updateprofile({
        paymentstatus: "true",
        packages,
        paymentDate: Date.now(),
        PaymentexpireDate: date,
      })
    );
    navigate("/The-Goat-Tips")
  };
  const options = [
    {
      value: "$60 / week",
      label: (
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
            style={{ height: "43px", width: "150px", marginRight: "30px" }}
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
            style={{ height: "43px", width: "150px", marginRight: "30px" }}
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
            style={{ height: "43px", width: "150px", marginRight: "30px" }}
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
            style={{ height: "43px", width: "150px", marginRight: "30px" }}
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
            style={{ height: "43px", width: "150px", marginRight: "30px" }}            src={img5}
            alt="loading"
          />
          Free
        </div>
      ),
    },
  ];
  const customStyles = {
    height: 30,
    zIndex: -999,
  };
   // ..................payment...................//
   const [paymentMethods, setPaymentMethods] = useState([]);
   const [cardoption, setCardoption] = useState([]);
   const [cardoptionselect, setCardoptionselect] = useState();
 
 
   const customStylescard = {
     height: 100,
     zIndex: -999,
   };
   const cardhandle = async (e) => {
     setCardoptionselect(e.value);
   };
   useEffect(() => {
     if (user) {
       getPaymentMethods();
     }
   }, [user]);
   useEffect(() => {
     showcard();
   }, [paymentMethods]);
   const pay = (e) => {
     e.preventDefault();
     axios
       .post("/api/auth/paymentcreate", {
         user,
         cardoptionselect,
         packages,
       })
       .then((resp) => {
         console.log(resp);
         if (resp.data.status === "succeeded") {
           dispatch(
             updateprofile({
               paymentstatus:  "true",
               packages,
               paymentDate: Date.now(),
               PaymentexpireDate: date,
             })
           );
           navigate("/The-Goat-Tips")
       
         }
       })
       .then()
       .catch((err) => {
         alert.error(err.response.data);
       });
   };
   async function getPaymentMethods() {
     await axios
       .post(`/api/auth/paymentMethodcardlist`, {
         user: user,
       })
       .then((resp) => {
         console.log(resp);
         setPaymentMethods(resp.data.data);
         console.log(paymentMethods);
       })
       .catch((err) => {
         console.log(err);
       });
   }
   console.log(paymentMethods);
   function getCardImage(type) {
     switch (type) {
       case "visa":
         return visa;
       case "mastercard":
         return mastercard;
       case "amex":
         return americanexpress;
       case "diners club":
         return dinersclub;
       case "discover":
         return discover;
       case "jcb":
         return jcb;
       case "unionpay":
         return unionpay;
       case "maestro":
         return mastercard;
       case "mir":
         return mir;
       case "elo":
         return elo;
       case "hiper":
         return hiper;
       case "hipercard":
         return hiper;
       default:
         return visa;
     }
   }
   const showcard = (e) => {
     console.log(paymentMethods);
 
     const cardoptions = paymentMethods.map((method) => ({
       value: method.id,
       label: (
         <div className={"cardcard card"}>
           <div className={style.cardLogo}>
             <img src={getCardImage(method.card.brand)} alt="" />
           </div>
 
           <div className={"details"}>
              {method.card.last4}
             {method.billing_details.name}
           </div>
 
           <div className={"expire"}>
             Expires{" "}
             {format(
               new Date(`${method.card.exp_year}/${method.card.exp_month}/01`),
               "MM/yyyy"
             )}
           </div>
         </div>
       ),
     }));
     setCardoption(cardoptions);
   };
   //  ..................payment...................//
  return (
    <>
      {loading && <Loader />}

      <section id="form-section">
        <div className="container-fluid">
          <div className="row login-form">
            <div className="col-md-6">
              <div className="img-main"></div>
            </div>
            <div className="col-md-6">
              <div className="wel-bg">
                <div className="row form-content check-center">
                  <h2>Packages</h2>
                  <div className="form-main">
                    <form className="form-floating mb-3">
                      <div
                        style={{ zIndex: 99999999999 }}
                        className="form-floating"
                      >
                        <Select
                          className="Select_pack"
                          options={options}
                          styles={customStyles}
                          value={options.filter(function (option) {
                            return option.value === packages;
                          })}
                          onChange={handle}
                        // defaultValue={user.packages}
                        />
                      </div>

                      <div className="fom-btn mb-3">
                        <div>
                          <div
                            style={{ maxWidth: "750px", minHeight: "200px" }}
                          >
                            {packages === "Free" ? (
                              <button className="btn_two" onClick={updatepro}>
                                Select
                              </button>
                            ) : (
                              <>

                                {
                                  isAuthenticated ?
                                    <>
                                    <AddPayMethod
                                  packages={packages}
                                  user={user}
                                  getPaymentMethods={getPaymentMethods}
                                />

                                <br />
                                <Select
                                  className="Select_pack"
                                  options={cardoption}
                                  styles={customStylescard}
                                  value={cardoption.filter(function (option) {
                                    return option.value === cardoptionselect;
                                  })}
                                  onChange={cardhandle}
                                  // defaultValue={user.packages}
                                />
                                <br />
                                <button
                                  className="btn homelogin"
                                  style={{ backgroundColor: "gr" }}
                                  onClick={pay}
                                >
                                  pay Now
                                </button></> :
                                    (
                                      <ul style={{ flexDirection: "row", justifyContent: "center", marginTop: "1rem" }} className="navbar-nav top-btn ml-auto">
                                        <button onClick={() => navigate(`/newlogin/${tips}`)} style={{ width: "90%", marginBottom: "7px" }} className='btn btn-1'>Login</button>
                                        <Link to="/signup"><button style={{ width: "160%" }} className='btn btn-2'>Signup</button></Link>
                                      </ul>
                                    )
                                }
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                    <p style={{ textAlign: "center" }}>
                      By purchasing, you confirm that you are over 18 years old and agree to our terms and conditions.{" "}
                  <Link to="/terms-and-conditions">
                      <span style={{textDecoration:"underline"}}>Terms and Conditions</span>
                  </Link>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
