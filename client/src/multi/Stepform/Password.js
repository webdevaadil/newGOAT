import React, { useEffect, useRef, useState } from "react";
import "./Package.css";
import style from "./Package.css";
import Select from "react-select";
import img1 from "../../edited-btn/level.png";
import img2 from "../../edited-btn/name1.png";
import img3 from "../../edited-btn/name2.png";
import img4 from "../../edited-btn/name3.png";
import img5 from "../../edited-btn/name4.png";
import silver from "../../Images/silver.png";
import bronze from "../../Images/bronze.png";
import gold from "../../Images/gold.png";
import platinum from "../../Images/platinum.png";
import visa from "./assets/cards/visa.png";
import americanexpress from "./assets/cards/americanexpress.png";
import dinersclub from "./assets/cards/dinersclub.jpg";
import discover from "./assets/cards/discover.jpg";
import elo from "./assets/cards/elo.png";
import hiper from "./assets/cards/hiper.png";
import jcb from "./assets/cards/jcb.png";
import mastercard from "./assets/cards/mastercard.png";
import mir from "./assets/cards/mir.png";
import unionpay from "./assets/cards/unionpay.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { Country, State, City } from "country-state-city";
import {
  clearErrors,
  loaduser,
  register,
  updateprofile,
} from "../../actions/userAction";
import { Loader } from "../../components/layout/Loader";
import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
// import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import AddPayMethod from "./AddPayMethod";
import ListPaymentMethods from "./ListPaymentMethods";
export const Paypa = () => {
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
  // const { packages, Name_of_card, card_no, Expiry, cvc } = ;
  const { tips } = useParams();
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const alert = useAlert();

  const { error, loading, isAuthenticated, user, isUpdated } = useSelector(
    (state) => state.user
  );
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [cardoption, setCardoption] = useState([]);
  const [cardoptionselect, setCardoptionselect] = useState();
  const [email,setEmail] = useState("")

  const card = useRef();

  const [cardInfo, setCardInfo] = useState({
    name: "",
    expiry: "",
    number: "",
    address: {
      line: "",
      postalCode: "",
    },
  });

  function handleChangeName(e) {
    const { value } = e.target;
    setCardInfo((prev) => {
      return { ...prev, name: value };
    });
  }

  const cardElementOptions = {
    style: {
      base: {
        color: "#666",
        display: "flex",
        flexDirection: "column",
        fontSize: "18px",
        border: "1px solid",
      },
      invalid: {
        color: "#fa755a",
        fontSize: "18px",
      },
    },
  };

  const statecitystyle ={
    option: (provided, state) => ({
      ...provided,
      width: 230,
    }),
    container: (provided, state) => ({
      ...provided,
      width: 230,
    }),
  };
  console.log(cardoptionselect);
  const dispatch = useDispatch();

  const [packages, setpackages] = useState(`${tips} / week`);
  const handle = async (e) => {
    setpackages(e.value);
  };
  console.log(packages)
  const cardhandle = async (e) => {
    setCardoptionselect(e.value);
  };

  const [locations, setLocations] = useState({
    countries: "",
    states: "",
    cities: "",
  });
  const [selectedLocation, setSelectedLocation] = useState({
    country: {},
    city: {},
    state: {},
  });

  function handleSelectCountry(country) {
    const states = State.getStatesOfCountry(country.value);
    setSelectedLocation((prev) => {
      return { ...prev, country };
    });
    setLocations((prev) => ({ ...prev, states: parseForSelect(states) }));
  }

  function parseForSelect(arr) {
    return arr.map((item) => ({
      label: item.name,
      value: item.isoCode ? item.isoCode : item.name,
    }));
  }

  useEffect(() => {
    const allCountry = Country.getAllCountries();

    setLocations((prev) => {
      return { ...prev, countries: parseForSelect(allCountry) };
    });
  }, []);

  useEffect(() => {
    if (user) {
      if (user.paymentstatus === "true"){
        navigate("/The-Goat-Tips");
      }
    }
    if (user) {
      setpackages(user.packages);
    }

    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

    // if (!isAuthenticated) {
    //   dispatch(loaduser());
    //   navigate("/");

    // }
  }, [error, navigate, alert, isAuthenticated, user, dispatch, isUpdated]);
  useEffect(() => {
    showcard();
  }, [paymentMethods]);
  useEffect(() => {
    if (user) {
      getPaymentMethods();
    }
  }, [user]);

  // console.log(00);
  // if(test.data.status==="COMPLETED"){
  //   dispatch(register())
  // }
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
            style={{ height: "43px", width: "150px", marginRight: "30px" }}
            src={img5}
            alt="loading"
          />
          Free
        </div>
      ),
    },
  ];
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      height: 35,
      width:500
    }),
  };
  const customStylescard = {
    height: 100,
    zIndex: -999,
  };
  // 7*24 * 60 * 60 * 100
  const updatepro = async () => {
    dispatch(
      updateprofile({
        paymentstatus: "true",
        packages,
        paymentDate: Date.now(),
        PaymentexpireDate: date,
      })
    );
  };
  const date = new Date();
  date.setDate(date.getDate() + 6);

  async function handleSubmit(e) {
    e.preventDefault();
    const address = cardInfo.address;
    const billingDetails = {
      name: cardInfo.name,
      address: {
        country: address.country,
        state: address.state,
        city: address.city,
        line1: address.line,
      },
    };

    try {
      stripe
        .createPaymentMethod({
          type: "card",
          billing_details: billingDetails,
          card: elements.getElement(CardElement),
        })
        .then((resp) => {
          axios
            .post("/api/auth/paymentcreate",{
              paymentMethod:resp.paymentMethod,
              packages,
              cardId:cardoptionselect,
              email:email
            })
            .then((resp) => {
              /* Handle success */
              if (resp.data.status === "succeeded"){
                dispatch(
                  updateprofile({
                    paymentstatus:"true",
                    packages,
                    paymentDate:Date.now(),
                    PaymentexpireDate:date,
                  })
                ).then((res)=>{
                  const resp = axios.post("/api/auth/register",{email:email,packages:packages,paymentstatus:"true",paymentDate:Date.now(),
                  PaymentexpireDate:date
                })
                  navigate("/thankyou")
                }
                ).then((res)=>{
                  navigate("/thankyou")
                })
                console.log("asas");
              }
            })
            .catch((err) => {
              alert.error(err.response.data);
              console.log(err.response.data);
              /*Handle Error */
            });
          console.log(resp);
        });
    } catch (err) {
      /* Handle Error*/
    }
  }

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
              paymentstatus: "true",
              packages,
              paymentDate: Date.now(),
              PaymentexpireDate: date,
            })
          ).then(navigate("/The-Goat-Tips"));
          console.log("asas");
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
      })
      .catch((err) => {
        console.log(err);
      });
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
            **** {method.card.last4}
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
  return (
    <>
      {loading && <Loader />}

      <section id="form-section">
        <div className="row container-fluid p-0">
          <div className="login-form d-flex">
            <div className="col-md-6 p-0">
              <div className="img-main"></div>
            </div>
            <div style = {{margin:"0 auto"}} className="wel-bg">
              <div className="row form-content check-center">
                <div className="form-main">
                  <form className="form-floating mb-3">
                    <div style={{ zIndex: 1000, width: "85%", margin: "auto" }} className="form-floating mb-4">
                    <h2>Packages</h2>

                      <Select
                        className="Select_pack"
                        options={options}
                        styles={customStyles}
                        defaultValue={{value:"default",label:"default"}}
                        value={options.filter(function (option) {
                          return option.value === packages;
                        })}
                        onChange={handle}
                      // defaultValue={user.packages}
                      />
                    </div>

                    <div className=" mb-3">
                      <div>
                        <div
                          className="cardboxes"
                          style={{
                            maxWidth: "750px",
                            minHeight: "200px",
                            marginTop: "15px",
                          }}
                        >
                          {packages === "Free" ? (
                            <button style={{marginLeft:"2.5rem",marginTop:"1rem"}} className="btn_two" onClick={updatepro}>
                              Select
                            </button>
                          ) : (
                            <>
                              {/* <button
                                  type="button"
                                  class="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                >
                                  Add card
                                </button> */}
                              {/* <AddPayMethod
                                  packages={packages}
                                  user={user}
                                  getPaymentMethods={getPaymentMethods}
                                /> */}
                              <div
                                className="row d-flex"
                                style={{
                                  display: "flex !important",
                                  position:"relative",
                                  left:"6%"
                                }}
                              >

                                <div className="col-md-6">
                                  <div
                                    // onClick={() => navigate(`/checkout/${tips.bronze}`)}
                                    className="btn"
                                    style={{ width: "95%", lineHeight: "1" }}
                                  >
                                    {
                                      packages==="$15 / week"?<>
                                    <div className="row checkout-tip" style={{ width: "92%" }}>
                                
                                      <div className="col-md-5">
                                        <div className="tipp-img">
                                          <img className = "image-size" src={bronze} alt="" />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="tipping-check">
                                          <h5>Bronze</h5>
                                          <p style={{ marginBottom: "0" }}>$15 per Week</p>
                                          <div className="returns">
                                            <span>98% returns</span>
                                          </div>
                                          <ul className="tipping-list">
                                            <li>
                                              <i className="fa fa-check"></i> Top tip of the day
                                            </li>
                                            <li>
                                              <i className="fa fa-check"></i> Every Saturday
                                            </li>
                                            <li>
                                              <i className="fa fa-check"></i>Direct to your inbox
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                     
                                      </>:packages==="$30 / week"?<>
                                      <div className="row checkout-tip" style={{ width: "92%" }}>
                                      <div className="col-md-5">
                                        <div className="tipp-img">
                                          <img className = "image-size" style={{ width: "80%" }} src={silver} alt="" />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="tipping-check">
                                          <h5>Silver</h5>
                                          <p style={{ marginBottom: "0" }}>$15 per Week</p>
                                          <div className="returns">
                                            <span>120% returns</span>
                                          </div>
                                          <ul className="tipping-list">
                        <li>
                          {" "}
                          <i className="fa fa-check"></i> Our 10 best tips
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Every Saturday
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-check"></i>Direct to your inbox
                        </li>
                      </ul>
                                        </div>
                                      </div>
                                    </div>
                                  
                                      </>:packages==="$45 / week"?<>
                                      <div className="row checkout-tip" style={{ width: "89%" }}>
                  <div className="col-md-5">
                    <div className="tipp-img">
                      <img className = "image-size" src={gold} alt="" style= {{width:"80%"}} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tipping-check">
                      <h5>Gold</h5>
          <p>$45 per Week</p>
                      <div className="returns">
                        <span>165% returns</span>
                      </div>
                      <ul className="tipping-list">
                        <li>

                          <i className="fa fa-check"></i>Our top daily tips,
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Our top 15 Saturday
                        </li>
                        <li>

                          <i className="fa fa-check"></i>Direct to your inbox
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
       
                                      </>:packages==="$60 / week"?<>
                                      <div className="row checkout-tip" style={{width:"90%"}}>
                  <div className="col-md-5">
                    <div className="tipp-img">
                      <img className = "image-size" src={platinum} alt="" style = {{width:"80%"}} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tipping-check">
                      <h5>Platinum</h5>
                      <p>$60 per Week</p>
                      <div className="returns">
                        <span>165% returns</span>
                      </div>
                      <ul className="tipping-list">
                        <li>
                          <i className="fa fa-check"></i>Our top 5 daily tips
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Our top 20 Saturday
                        </li>
                        <li>

                          <i className="fa fa-check"></i>Direct to your inbox
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                </>:""
                                    }
                                    

                                  </div>
                                </div>

<div className = "col-md-6">

  {
    packages==="$15 / week"?               <div className="payment-box">
    <div >
      <h2>Bronze Membership</h2>
      <h2>$15 per Week</h2>
      <ul className="tip-center">
        <li>Top tip of the day</li>
        <li>Every Saturday</li>
        <li>Direct to your inbox</li>
      </ul>
    </div>

  </div>:packages==="$30 / week"?  <div className="payment-box">
                                      <div >
                                        <h2>Silver Membership</h2>
                                        <h2>$30 per Week</h2>
                                        <ul className="tip-center">
                                          <li>Our 10 best tips</li>
                                          <li>Every Saturday</li>
                                          <li>Direct to your inbox</li>
                                        </ul>
                                      </div>

                                    </div>:packages==="$45 / week"?
                                             <div className="payment-box">
                                             <div >
                                               <h2>Gold Membership</h2>
                                               <h2>$45 per Week</h2>
                                               <ul className="tip-center">
                                                 <li>Our top daily tips</li>
                                                 <li>Our top 15 Saturday</li>
                                                 <li>Our top 15 Saturday</li>
                                               </ul>
                                             </div>
       
                                           </div>:packages==="$60 / week"?
                                                           <div className="payment-box">
                                                           <div >
                                                             <h2>Our top 5 daily tips</h2>
                                                             <h2>$60 per Week</h2>
                                                             <ul className="tip-center">
                                                               <li>Our top daily tips</li>
                                                               <li>Our top 20 Saturday</li>
                                                               <li>Direct to your inbox</li>
                                                             </ul>
                                                           </div>
                     
                                                         </div>:""

}
</div>

                              </div>

<div className="d-flex justify-content-center">
<div className="row" style={{ marginTop: "2%"}}>

<div style = {{position:"relative",right:"5%"}}  className="d-flex justify-content-center">
  <div className="main-label">
    {/* <div className={style.title}>Add Payment Method</div> */}
    <div className="inputrow mb-2">
      <label>Cardholder Name</label>
      <input
        onChange={handleChangeName}
        type="text"
        name="name"
        placeholder="Enter card holder name"
        className="input-border"
      />
    </div>
    <div className="inputrow mb-2">
      <label>Email Address</label>
      <input
        onChange={(e)=>{setEmail(e.target.value)}}
        type="text"
        name="name"
        placeholder="Enter Your Email"
        className="input-border"
      />
    </div>
    <label>Enter Card Details</label>
    <div className="input-border">
      <CardElement
        options={cardElementOptions}
        ref={card}
      />
    </div>

    <div
      className={style.addressWrapper}
    >
      { }
      {/* <div className={style.rowSelect}>
      <div>
        <label>Country</label>
        <Select
          isClearable={true}
          isSearchable={true}
          name="country"
          value={selectedLocation.country}
          options={locations.countries}
          onChange={handleSelectCountry}
        />
      </div>
    </div> */}
    </div>
  </div>
</div>
{cardoption.length >= 1 ? (
  <div style={{ marginTop: "1.5rem" }}>
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
  </div>
) : (
  ""
)}
<div className="d-flex justify-content-center mt-3">
  <button
    className="btn homelogin"
    style={{ backgroundColor: "gr" }}
    onClick={handleSubmit}
  >
    Pay Now
  </button>
</div>
<Link  to="/terms-and-conditions">
<p className = "mt-3" style={{ textAlign: "center",fontSize:"14px",width:"40rem"}}>
By signing up, I agree to the{" "}
<span style = {{borderBottom:"1px solid black"}}>Terms and Conditions</span>

</p>
</Link>
</div>
</div>
                              <br />


                              <br />

                            </>
                          )}
                     
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 
<!-- Modal --> */}
      <div
        class="modal fade package"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog atmcard" role="document">
          <div class="modal-content boxcontant">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add card
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={showcard}
              >
                <span onClick={showcard} aria-hidden="true">
                  &times;
                </span>
              </button>
            </div>
            <div class="modal-body"></div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
