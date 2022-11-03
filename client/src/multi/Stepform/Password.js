import React, { useEffect, useRef, useState } from "react";
import "./Package.css";
import style from "./Package.css";
import Select from "react-select";
import img1 from "../../Images/level.png";
import img2 from "../../Images/name1.png";
import img3 from "../../Images/name2.png";
import img4 from "../../Images/name3.png";
import img5 from "../../Images/name4.png";
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
import { Link, useNavigate } from "react-router-dom";
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
        fontSize: "18px",
        border: "1px solid",
      },
      invalid: {
        color: "#fa755a",
        fontSize: "18px",
      },
    },
  };

  const statecitystyle = {
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

  const [packages, setpackages] = useState("");
  const handle = async (e) => {
    setpackages(e.value);
  };
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
            .post("/api/auth/paymentcreate", {
              user: user._id,
              paymentMethod: resp.paymentMethod,
              packages,
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
                ).then(navigate("/The-Goat-Tips"));
                console.log("asas");
              }
            })
            .catch((err) => {
              alert.error("error");
              console.log(err);
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
        <div className="container-fluid">
          <div className="row login-form">
            <div className="col-md-6">
              <div className="img-main"></div>
            </div>
            <div
              className="col-md-6 d-flex"
              style={{
                display: "flow !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="wel-bg">
                <div className="row form-content check-center">
                  <h2>Packages</h2>
                  <div className="form-main">
                    <form className="form-floating mb-3">
                      <div style={{ zIndex: 1000 }} className="form-floating">
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
                              <button className="btn_two" onClick={updatepro}>
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

                                <div className={style.wrapper}>
                                  <div className="main-label">
                                    {/* <div className={style.title}>Add Payment Method</div> */}
                                    <div className="inputrow mb-3">
                                      <label>Cardholder Name</label>
                                      <input
                                        onChange={handleChangeName}
                                        type="text"
                                        name="name"
                                        placeholder="Enter card holder name"
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
                                      style={{ marginTop: "10px" }}
                                      className={style.addressWrapper}
                                    >
                                      {}
                                      <div className={style.rowSelect}>
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
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <br />
                                {/* <Select
                                  className="Select_pack"
                                  options={cardoption}
                                  styles={customStylescard}
                                  value={cardoption.filter(function (option) {
                                    return option.value === cardoptionselect;
                                  })}
                                  onChange={cardhandle}
                                  // defaultValue={user.packages}
                                /> */}
                                <br />
                                <button
                                  className="btn homelogin"
                                  style={{ backgroundColor: "gr" }}
                                  onClick={handleSubmit}
                                >
                                  pay Now
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <Link to="/terms-and-conditions">
                    <p style={{ textAlign: "center" }}>
                      By signing up, I agree to the{" "}
                      <span>Terms and conditions and Privacy policy</span>
                    </p>
                  </Link>
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
