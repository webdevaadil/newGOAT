import React, { useEffect, useRef, useState } from "react";
import "./Package.css";
import style from "./Package.css";
import Select from "react-select";
import img1 from "../../Images/level.png";
import img2 from "../../Images/name1.png";
import img3 from "../../Images/name2.png";
import img4 from "../../Images/name3.png";
import img5 from "../../Images/name4.png";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import { Country, State, City } from "country-state-city";
import {
  clearErrors,
  loaduser,
  register,
  updateprofile,
} from "../../actions/userAction";
import { Loader } from "../../components/layout/Loader";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import AddPayMethod from "./AddPayMethod";
export const Paypa = () => {
  // const { packages, Name_of_card, card_no, Expiry, cvc } = ;
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const alert = useAlert();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const [packages, setpackages] = useState("");
  const handle = async (e) => {
    setpackages(e.value);
  };

  useEffect(() => {
    if (user) {
      if (user.paymentstatus === "true") {
        navigate("/The-Goat-Tips");
      }
    }
    if (user) {
      setpackages(user.packages);
    }
    if (!user) {
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // if (!isAuthenticated) {
    //   dispatch(loaduser());
    //   navigate("/");

    // }
  }, [error, navigate, alert, isAuthenticated, user, dispatch]);

  const [test, settest] = useState();

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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
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
    zIndex: -999,
  };
  // 7*24 * 60 * 60 * 100
  const updatepro = () => {
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
  // console.log(date.toS/tring());
  // function formatDate(date) {
  //   var d = new Date(date),
  //     month = "" + (d.getMonth() + 1),
  //     day = "" + d.getDate(),
  //     year = d.getFullYear();
  //   if (month.length < 2) month = "0" + month;
  //   if (day.length < 2) day = "0" + day;
  //   return [year, month, day].join("-");
  // }
  // console.log(formatDate(Date.now()));
  // console.log(formatDate(date));

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

  function handleChangeAddressLine(e) {
    const { value } = e.target;
    setCardInfo((prev) => {
      return { ...prev, address: { ...prev.address, line: value } };
    });
  }

  // function handleChangePostalCode(e) {
  //   const { value } = e.target;
  //   setCardInfo((prev) => {
  //     return { ...prev, address: { ...prev.address, postalCode: value } };
  //   });
  // }

  function handleChangeName(e) {
    const { value } = e.target;
    setCardInfo((prev) => {
      return { ...prev, name: value };
    });
  }

  function parseForSelect(arr) {
    return arr.map((item) => ({
      label: item.name,
      value: item.isoCode ? item.isoCode : item.name,
    }));
  }

  function handleSelectCountry(country) {
    const states = State.getStatesOfCountry(country.value);
    setSelectedLocation((prev) => {
      return { ...prev, country };
    });

    setLocations((prev) => ({ ...prev, states: parseForSelect(states) }));
  }

  function handleSelectState(state) {
    const cities = City.getCitiesOfState(
      selectedLocation.country.value,
      state.value
    );
    setSelectedLocation((prev) => {
      return { ...prev, state };
    });

    setLocations((prev) => ({ ...prev, cities: parseForSelect(cities) }));
  }

  function handleSelectCity(city) {
    setSelectedLocation((prev) => {
      return { ...prev, city };
    });
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

    try {
      stripe
        .createPaymentMethod({
          type: "card",
          billing_details: billingDetails,
          card: elements.getElement(CardElement),
        })
        .then((resp) => {
          console.log(resp);
          axios 
            .post(
              "http://localhost:5000/api/auth/buyStripePaymentSubscription",
              {
                paymentMethod: resp.paymentMethod,
                amount:packages,
                user: user._id,
              }
            )
            .then((resp) => {
              /* Handle success */
               (updatepro())
               (navigate("/The-Goat-Tips"))
            })
            .catch((err) => {
              /*Handle Error */
            });
          console.log(resp);
        });
    } catch (err) {
      /* Handle Error*/
    }
  }
console.log(packages);
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
                              <AddPayMethod packages={packages} user={user}/>
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
    </>
  );
};
