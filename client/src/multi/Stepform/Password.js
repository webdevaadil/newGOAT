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
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
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
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
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

  
  console.log(cardoptionselect);
  const dispatch = useDispatch();

  const [packages, setpackages] = useState(`${tips} / week`);
  console.log(packages);
  const handle = async (e) => {
    setpackages(e.value);
  };
  console.log(packages);


  function parseForSelect(arr) {
    return arr.map((item) => ({
      label: item.name,
      value: item.isoCode ? item.isoCode : item.name,
    }));
  }

  useEffect(() => {
    const allCountry = Country.getAllCountries();

   
  }, []);

  useEffect(() => {
    if (user) {
      if (user.paymentstatus === "true") {
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

 
  const options = [
    {
      value: "$49.95 / week",
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
          $49.95 per week
        </div>
      ),
    },
    {
      value: "$34.95 / week",
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
          $34.95 per week
        </div>
      ),
    },
    {
      value: "$19.95 / week",
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
          $19.95 per week
        </div>
      ),
    },
    {
      value: "Free / week",
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
          Free
        </div>
      ),
    },
   
  ];
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      height: 35,
      width: 508,
    }),
  };

  // 7*24 * 60 * 60 * 100
  const updatepro = async (e) => {
    e.preventDefault()
    // dispatch(
    //   updateprofile({
    //     paymentstatus: "true",
    //     packages,
    //     paymentDate: Date.now(),
    //     PaymentexpireDate: date,
    //   })
    // );
    axios.post("/api/auth/register", {
      email: email,
      packages: packages,
      paymentstatus: "true",
      paymentDate: Date.now(),
      PaymentexpireDate: date,
    }).then((res)=>{ 
      navigate("/thankyou");
    })
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
          setLoader(true);

          axios
            .post("/api/auth/paymentcreate", {
              paymentMethod: resp.paymentMethod,
              packages,
              cardId: cardoptionselect,
              email: email,
            })
            .then((resp) => {
              /* Handle success */
              if (resp.data.status === "succeeded") {
                dispatch(
                  updateprofile({
                    paymentstatus: "true",
                    packages,
                    paymentDate: Date.now(),
                    PaymentexpireDate: date,
                  })
                )
                  .then((res) => {
                    const resp = axios.post("/api/auth/register", {
                      email: email,
                      packages: packages,
                      paymentstatus: "true",
                      paymentDate: Date.now(),
                      PaymentexpireDate: date,
                    });
                    setLoader(false);
                  })
                  .then((res) => {
                    navigate("/thankyou");
                  });
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
    <div style={{ overflow: "hidden" }}>
      {loading && <Loader />}

      {loader ? (
        <Loader />
      ) : (
        <section id="form-section" className="container-pw">
          <div className="row container-fluid p-0">
            <div className="login-form d-flex">
              <div className="col-md-6 p-0">
                <div className="img-main img-width"></div>
              </div>
              <div
                style={{ margin: "0 auto", maxHeight: "103vh" }}
                className="wel-bg"
              >
                <div className="row form-content check-center container">
                  <div style={{ paddingTop: "0.5rem" }} className="form-main">
                    <form className="form-floating mb-3">
                      <div
                        style={{ zIndex: 1000, width: "85%", margin: "auto" }}
                        className="form-floating mb-4"
                      >
                        <h2 className="pack-heading">Packages</h2>
                        <Select
                          className="Select_pack"
                          options={options}
                          styles={customStyles}
                          defaultValue={{ value: "default", label: "default" }}
                          value={options.filter(function (option) {
                            return option.value === packages;
                          })}
                          onChange={handle}
                          // defaultValue={user.packages}
                        />
                      </div>

                      <div className=" mb-3">
                        <div>
                          <div className="cardboxes box-container">
                            <>
                              <div
                                className="row"
                                style={{
                                  display: "flex !important",
                                  position: "relative",
                                  left: "6%",
                                }}
                              >
                                <div className="col-lg-6 col-md-5">
                                  <div
                                    // onClick={() => navigate(`/checkout/${tips.bronze}`)}
                                    className="btn tile-main"
                                  >
                                    {packages === "Free / week" ? (
                                      <>
                                        <div
                                          className="row checkout-tip"
                                          style={{ width: "92%" }}
                                        >
                                          <div className="col-md-4">
                                            <div className="tipp-img">
                                              <img
                                                className="image-size"
                                                src={bronze}
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="tipping-check">
                                              <h5>Bronze</h5>
                                              <p>Free</p>
                                              <div className="returns">
                                                <span>98% returns</span>
                                              </div>
                                              <ul className="tipping-list">
                                                <li>
                                                  <i className="fa fa-check"></i>
                                                  Best bet of the day every
                                                  Saturday, completely free!
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    ) : packages === "$19.95 / week" ? (
                                      <>
                                        <div
                                          className="row checkout-tip"
                                          style={{ width: "92%" }}
                                        >
                                          <div className="col-md-5">
                                            <div className="tipp-img">
                                              <img
                                                className="image-size"
                                                style={{ width: "80%" }}
                                                src={silver}
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="tipping-check">
                                              <h5>Silver</h5>
                                              <p>$30 per Week</p>
                                              <div className="returns">
                                                <span>120% returns</span>
                                              </div>
                                              <ul className="tipping-list">
                                                <li>
                                                  {" "}
                                                  <i className="fa fa-check"></i>{" "}
                                                  5 best bets of the day every
                                                  Saturday with staking plan &
                                                  analysis of each race
                                                </li>
                                                <li>
                                                  <i className="fa fa-check"></i>
                                                  Multi of the day
                                                </li>
                                                <li>
                                                  {" "}
                                                  <i className="fa fa-check"></i>{" "}
                                                  Value pick of the day
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    ) : packages === "$34.95 / week" ? (
                                      <>
                                        <div
                                          className="row checkout-tip"
                                          style={{ width: "89%" }}
                                        >
                                          <div className="col-md-5">
                                            <div className="tipp-img">
                                              <img
                                                className="image-size"
                                                src={gold}
                                                alt=""
                                                style={{ width: "80%" }}
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="tipping-check">
                                              <h5>Gold</h5>
                                              <p>$34.95 per Week</p>
                                              <div className="returns">
                                                <span>165% returns</span>
                                              </div>
                                              <ul className="tipping-list">
                                                <li>
                                                  <i className="fa fa-check"></i>
                                                  21 of the best bets across
                                                  Australia every Saturday with
                                                  staking plan & analysis of
                                                  each race.
                                                </li>
                                                <li>
                                                  <i className="fa fa-check"></i>
                                                  3 x Best Multis
                                                </li>
                                                <li>
                                                  <i className="fa fa-check"></i>{" "}
                                                  Value pick of the day
                                                </li>
                                                <li>
                                                  <i className="fa fa-check"></i>
                                                  Quaddie selections for
                                                  Brisbane, Sydney & Melbourne.
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    ) : packages === "$49.95 / week" ? (
                                      <>
                                        <div
                                          className="row checkout-tip"
                                          style={{ width: "90%" }}
                                        >
                                          <div className="col-md-5">
                                            <div className="tipp-img">
                                              <img
                                                className="image-size"
                                                src={platinum}
                                                alt=""
                                                style={{ width: "80%" }}
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="tipping-check">
                                              <h5>Platinum</h5>
                                              <p>$49.95 per Week</p>
                                              <div className="returns">
                                                <span>265% returns</span>
                                              </div>
                                              <ul className="tipping-list">
                                                <li>
                                                  <i className="fa fa-check"></i>{" "}
                                                  21 of the best bets across
                                                  Australia every Saturday with
                                                  staking plan & analysis of
                                                  each race.
                                                </li>
                                                <li>
                                                  <i className="fa fa-check"></i>
                                                  3 x Best Multis
                                                </li>
                                                <li>
                                                  <i className="fa fa-check"></i>{" "}
                                                  Value pick of the day
                                                </li>
                                                <li>
                                                  <i className="fa fa-check"></i>
                                                  DQuaddie for Brisbane, Sydney
                                                  & Melbourne.
                                                </li>
                                                <li>
                                                  <i className="fa fa-check"></i>{" "}
                                                  Best bet of the day, everyday!
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>

                                <div className="col-6 col-md-4 col-sm-3">
                                  {packages === "Free / week" ? (
                                    <div className="payment-box">
                                      <div>
                                        <h2>Bronze Membership</h2>
                                        <h2>Free</h2>
                                        <ul className="tip-center">
                                          <li>
                                            -Best bet of the day every Saturday,
                                            completely free!
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  ) : packages === "$19.95 / week" ? (
                                    <div className="payment-box">
                                      <div>
                                        <h2>Silver Membership</h2>
                                        <h2>$30 per Week</h2>
                                        <ul className="tip-center">
                                          <li>
                                            5 best bets of the day every
                                            Saturday with staking plan &
                                            analysis of each race
                                          </li>
                                          <li>Multi of the day</li>
                                          <li>Value pick of the day</li>
                                        </ul>
                                      </div>
                                    </div>
                                  ) : packages === "$34.95 / week" ? (
                                    <div className="payment-box">
                                      <div>
                                        <h2>Gold Membership</h2>
                                        <h2>$34.95 per Week</h2>
                                        <ul className="tip-center">
                                          <li>
                                            {" "}
                                            21 of the best bets across Australia
                                            every Saturday with staking plan &
                                            analysis of each race.
                                          </li>
                                          <li>3 x Best Multis</li>
                                          <li>Value pick of the day</li>
                                          <li>
                                            {" "}
                                            Quaddie selections for Brisbane,
                                            Sydney & Melbourne.
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  ) : packages === "$49.95 / week" ? (
                                    <div className="payment-box">
                                      <div>
                                        <h2>Platinum membership</h2>
                                        <h2>$49.95 per Week</h2>
                                        <ul className="tip-center">
                                          <li>
                                            {" "}
                                            21 of the best bets across Australia
                                            every Saturday with staking plan &
                                            analysis of each race.
                                          </li>
                                          <li> 3 x Best Multis</li>
                                          <li>Value pick of the day</li>
                                          <li>
                                            Quaddie for Brisbane, Sydney &
                                            Melbourne.
                                          </li>
                                          <li>
                                            {" "}
                                            Best bet of the day, everyday!
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>

                              {/* <div className="row" style={{ marginTop: "1.3%"}}> */}

                              <div className="main-label">
                                <div className="inputrow mb-2">
                                  <label>Email Address</label>
                                  <input
                                    onChange={(e) => {
                                      setEmail(e.target.value);
                                    }}
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input-border"
                                  />
                                </div>

                           
                                {packages === "Free / week" ? (
                                  <button
                                    style={{
                                      marginLeft: "2.5rem",
                                      marginTop: "1rem",
                                    }}
                                    className="btn_two"
                                    onClick={updatepro}
                                  >
                                    Select
                                  </button>
                                ) : (
                                  <>
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
                                   <div>
                                     <label>Enter Card Details</label>
                                    <div className=" inputrow input-border">
                                      <CardElement
                                        options={cardElementOptions}
                                        ref={card}
                                      />
                                   </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-2" style={{width:"80%"}}>
                                      <button
                                        className="btn homelogin"
                                        style={{
                                          backgroundColor: "gr",
                                          height: "36px",
                                        }}
                                        onClick={handleSubmit}
                                      >
                                        Pay Now
                                      </button>
                                    </div>

                                    
                                  </>
                                )}

                                <p
                                  className="mt-2"
                                  style={{
                                    textAlign: "center",
                                    fontSize: "12px",
                                    width: "40rem",
                                  }}
                                >
                                  By signing up, I agree to the{" "}
                                  <Link to="/terms-and-conditions">
                                    <span>Terms and Conditions</span>
                                  </Link>
                                </p>
                              </div>
                            </>
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
      )}
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
    </div>
  );
};
