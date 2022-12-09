import React, { useEffect, useRef, useState } from "react";
import { ProfileNav } from "./ProfileNav";
import "./paymentmethoad.css";
import style from "../../multi/Stepform/Package.css";
import { format } from "date-fns";

import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../layout/Loader";
import { Navigate } from "react-router-dom";
import { useAlert } from "react-alert";
import img1 from "../../edited-btn/level.png";
import img2 from "../../edited-btn/name1.png";
import img3 from "../../edited-btn/name2.png";
import img4 from "../../edited-btn/name3.png";
import img5 from "../../edited-btn/name4.png";
import AddPayMethod from "../../multi/Stepform/AddPayMethod";
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

import { useNavigate } from "react-router-dom";

import { clearErrors, loaduser, updateprofile } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import Select from "react-select";
import axios from "axios";
import HomeFooter from "../Footer/HomeFooter";

import { Country, State, City } from "country-state-city";

export const PaymentMethoad = () => {
  const [test, settest] = useState();
  const card = useRef();
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState({
    name: "",
    expiry: "",
    number: "",
    address: {
      line: "",
      postalCode: "",
    },
  });
  const [selectedLocation, setSelectedLocation] = useState({
    country: {},
    city: {},
    state: {},
  });
  const [locations, setLocations] = useState({
    countries: "",
    states: "",
    cities: "",
  });
  const dispatch = useDispatch();
  const alert = useAlert();
  const date = new Date();
  date.setDate(date.getDate() + 6);
  const { user, isAuthenticated, loading, isUpdated, error } = useSelector(
    (state) => state.user
  );
  const [packages, setpackages] = useState("");

  const updatepro = (e) => {
    dispatch(
      updateprofile({
        paymentstatus: "true",
        packages,
        paymentDate: Date.now(),
        PaymentexpireDate: date,
      })
    );
  };

  useEffect(() => {
    if (user) {
      setpackages(user.packages);
    }

    if (error) {
      console.log(error);
      alert.error(error.message);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loaduser());

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, user, alert, isUpdated]);
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
      value: "Free",
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
  const handle = (e) => {
    setpackages(e.value);
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
  // const pay = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/api/auth/paymentcreate", {
  //       user,
  //       cardoptionselect,
  //       packages,
  //     })
  //     .then((resp) => {
  //       console.log(resp);
  //       if (resp.data.status === "succeeded") {
  //         dispatch(
  //           updateprofile({
  //             paymentstatus:  "true",
  //             packages,
  //             paymentDate: Date.now(),
  //             PaymentexpireDate: date,
  //           })
  //         );

  //       }
  //     })
  //     .then()
  //     .catch((err) => {
  //       alert.error(err.response.data);
  //     });
  // };
  async function pay(e) {
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

 
  }
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

  }
  useEffect(() => {
    const allCountry = Country.getAllCountries();

    setLocations((prev) => {
      return { ...prev, countries: parseForSelect(allCountry) };
    });
  }, []);
  //  ..................payment...................//
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated === true ? (
            <div className="payment_box_two">
              {packages === "$49.95 / week" ? (
                <>
                  <h2>Platinum Membership</h2>
                  <h2>$60 per Week</h2>
                  <ul className="tipping-list">
                    <li>
                      {" "}
                      21 of the best bets across Australia every Saturday with
                      staking plan & analysis of each race.
                    </li>
                    <li>3 x Best Multis</li>
                    <li> Value pick of the day</li>
                    <li>DQuaddie for Brisbane, Sydney & Melbourne.</li>
                    <li> Best bet of the day, everyday!</li>
                  </ul>
                </>
              ) : (
                ""
              )}
              {packages === "$34.95 / week" ? (
                <>
                  <h2>Gold Membership</h2>
                  <h2>$45 per Week</h2>
                  <ul className="tipping-list">
                    <li>
                      21 of the best bets across Australia every Saturday with
                      staking plan & analysis of each race.
                    </li>
                    <li>3 x Best Multis</li>
                    <li> Value pick of the day</li>
                    <li>
                      Quaddie selections for Brisbane, Sydney & Melbourne.
                    </li>
                  </ul>
                </>
              ) : (
                ""
              )}
              {packages === "$19.95 / week" ? (
                <>
                  <h2>silver Membership</h2>
                  <h2>$30 per week</h2>
                  <ul className="tipping-list">
                    <li>
                      {" "}
                      5 best bets of the day every Saturday with staking plan &
                      analysis of each race
                    </li>
                    <li>Multi of the day</li>
                    <li> Value pick of the day</li>
                  </ul>
                </>
              ) : (
                ""
              )}
              {packages === "Free" ? (
                <>
                  <h2>Bronze Membership</h2>
                  <h2>Free</h2>
                  <ul className="tip-center">
                    <li>
                      Best bet of the day every Saturday, completely free!
                    </li>
                  </ul>
                </>
              ) : (
                ""
              )}

              <div className="top">
                <form
                  className="box_three form-floating mb-3"
                  onSubmit={updateP}
                >
                  <h2 className="per_text">Membership Details</h2>
                  <div className="form-floating" style={{ zIndex: 999 }}>
                    <Select
                      className="Select_pack"
                      options={options}
                      styles={customStyles}
                      value={options.filter(function (option) {
                        return option.value === packages;
                      })}
                      onChange={handle}
                    />
                  </div>
                  <h2 className="pay_detail">Payment Details</h2>

                  <div
                    className="fom-btn mb-3 d-block"
                    style={{ justifyContent: "center" }}
                  >
                    <div>
                      <div style={{ maxWidth: "750px", minHeight: "200px" }}>
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
                            {cardoption.length >= 1 ? (
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
                            ) : (
                              ""
                            )}
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
            </div>
          ) : (
            <Navigate to={"/login"} />
          )}
        </>
      )}
    </>
  );
};
