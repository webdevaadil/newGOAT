import React, { useEffect, useState } from "react";

import "./Main.css";

import { Link, Navigate, useNavigate } from "react-router-dom";

import Footer from "../Footer/Footer";

import { Header } from "../Header/Header";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import { Records } from "./Records";

import { Pagination } from "./Pagination";

import { apidata } from "../../actions/apiAction";

import img1 from "../../Images/Vector.png";
import { Loader } from "../layout/Loader";
import { clearErrors, loaduser, updateprofile } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { Login } from "../Login/Login";
import HomeFooter from "../Footer/HomeFooter";

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { isAuthenticated, user, error, loading } = useSelector(
    (state) => state.user
  );

  if (user) {
    let nowdate =  Date();
    let expiredate = user.PaymentexpireDate;
    console.log(Date.parse(nowdate) , Date.parse(expiredate));
    console.log();
    if (Date.parse(nowdate) > Date.parse(expiredate)) {
      console.log(nowdate);
      console.log(new Date(user.PaymentexpireDate));
      dispatch(updateprofile({ paymentstatus: "false" }));
      navigate("/subscriptionexpire")
    }
  }
  useEffect(() => {
    if (isAuthenticated === false) {
      <Navigate to={<Login />} />;
    }

    if (user) {
      if (user.paymentstatus === "false") {
        navigate("/password");
        //  console.log(user.paymentstatus);
      }
    }
    dispatch(loaduser());
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      navigate("/login");
    }

    if (isAuthenticated === false) {
      <Navigate to={<Login />} />;
    }
  }, [error, navigate, dispatch]);
  const [detail, setDetail] = useState([]);

  const [todayrace, setTodayRace] = useState([]);

  // const [placename, setPlaceName] = useState("");

  const [dogdetail, setDogdetail] = useState([]);

  // const [finaldetail, setFinaldetail] = useState([]);

  const [aloading, setaLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [recordsPerPage] = useState(10);

  const getdata = async () => {
    const res = await axios.get(
      "https://script.google.com/macros/s/AKfycbwYRAwed4AU7R2q62na51ele3njePVqe_IGYf6JTDEtP1PKhhZPrJfExVea_Ulo98Iw/exec"
    );

    let finaldata = await res.data.data;

    setaLoading(!aloading);

    finaldata.map(
      (items, index) =>
        (items.RaceDate = new Date(items.RaceDate).toLocaleDateString())
    );

    setDetail(finaldata);

    finaldata.filter((items, index) => {
      items.RaceDate = new Date(items.RaceDate).toLocaleDateString();
      items.id = index;
      items.minutes = new Date(items.RaceTime).getUTCMinutes();
      items.hour = new Date(items.RaceTime).getUTCHours();
    });

    const filterdate = finaldata.filter((items, index) => {
      const currentday = new Date();
      const currenthour = new Date().getHours();

      const currentdaystring = new Date(currentday).toLocaleDateString();

      return (
        items.RaceDate === currentdaystring &&
        items.hour == currenthour &&
        items.minutes > new Date().getMinutes()
      );
    });

    console.log(filterdate);

    setTodayRace(filterdate);
  };

  const getDogdata = async () => {
    const res = await axios.get(
      "https://script.googleusercontent.com/macros/echo?user_content_key=jDoChie6LqLG6ElHDz5XnSp5xbRzBGY7boopl67X51Y-MgBXn3qY9IykJM3v2v8gEiKx0RCnFEBRpeCaaI4b-91ukFetCelMm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF9OXc95fD23eDvAhF7wtmVRghiF34032X6xCyWzrqMkLu9JIXnQGOCkJaLaMp569JzQoN6xAOTwYcScU6dDSajx9N_XZM_k49z9Jw9Md8uu&lib=MBii240CyOZU5TRkVZr_iMkwZJcFcrlZl"
    );

    let finaldata = await res.data.data;

    setDogdetail(finaldata);
  };

  useEffect(() => {
    apidata(dispatch);

    getdata();

    getDogdata();
  }, []);
  const [newfetchdate, setnewfetchdate] = useState("");

  const indexOfLastRecord = currentPage * recordsPerPage;

  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  let currentRecords = detail.slice(indexOfFirstRecord, indexOfLastRecord);
  // const [filterdetail, setFilterdetail] = useState(second)

  const nPages = Math.ceil(detail.length / recordsPerPage);
  // const nPages = Math.ceil(currentRecords.length);

  const [datenew, setdatenew] = useState("");

  const handlechange = (e) => {
    e.preventDefault();
    setnewfetchdate(datenew);
  };
  if (newfetchdate !== "") {
    const datefilter = currentRecords.filter((item, index) => {
      return item.RaceDate === newfetchdate;
    });
    currentRecords = datefilter;
  }
  const handle = (e) => {
    let keyword = new Date(e.target.value);
    const mon = keyword.getMonth();
    const dat = keyword.getDate();
    const yearr = keyword.getFullYear();
    setdatenew(`${mon + 1}/${dat}/${yearr}`);
  };
  const resetcalender = (e) => {
    e.preventDefault();
    // e.target.reset();
    setnewfetchdate("");
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="slid">
            <section className="container-fluid">
              <div className="container">
                <div className="row">
                  <div className="main-sec">
                    <div className="main-content">
                      <h2> The Goat Tips</h2>

                      <p>
                        The Goat Tips - Betting made easy! Your guide for sports
                        betting, The Goat’s Tips caters to your needs with
                        different packages, provides tips and guidance for
                        betting on Thoroughbreds, Greyhounds and much more with
                        real-time data on upcoming races and a great ROI. Sign
                        up now!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* free tips section */}

          <div>
            <div className="container-fluid" id="freetip-sec">
              <div className="container section">
                <h3 style={{ fontSize: "3rem" }} className="free-head">
                  Today’s Free Tips
                </h3>
              </div>

              <div className="container main-freetips">
                <div className="main_1">
                  <div className="main-grid 1">
                    {todayrace.length !== 0 ? (
                      todayrace.map((items, index) => {
                        const minutesnow = new Date().getMinutes();
                        const minutesprev = new Date(
                          items.RaceTime
                        ).getUTCMinutes();
                        const inminutes = minutesprev - minutesnow;

                        // console.log(inminutes);
                        const trimlocation = items.RaceLocation.replace(
                          / +/g,
                          "-"
                        ).toLowerCase();

                        return (
                          <>
                            <div className="tip-grid">
                              <div className="tips-colum1">
                                <img src={img1} alt="horseimg" />
                              </div>

                              <div className="tips-colum1">
                                <h3>{items.RaceLocation}</h3>

                                <div className="space">
                                  <Link
                                    to={`horseDetails/${items.id}/${trimlocation}`}
                                  >
                                    <button className="btn">
                                      Race {items.RaceNumber}
                                    </button>
                                  </Link>

                                  <p>in {inminutes} Minute</p>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })
                    ) : (
                      <div className="content">
                        <div
                          className="wrapper-1"
                          style={{ height: "auto !important" }}
                        >
                          <div className="wrapper-2">
                            <p>
                              "No tips for the day stay tuned for daily tips"
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {isAuthenticated ? (
                  <div className="main_1 main-img">
                    <div className="main_cont">
                      <h3>Welcome ! {user.username}</h3>

                      <p>And get the hottest tips that can earn you up to </p>

                      <h4>
                        <span>678% in returns</span> on your initial investment.
                      </h4>
                    </div>
                  </div>
                ) : (
                  <div className="main_1 main-img">
                    <div className="main_cont">
                      <h3>Sign up to The Goat Tips Today!</h3>

                      <p>And get the hottest tips that can earn you up to </p>

                      <h4>
                        <span>678% in returns</span> on your initial investment.
                      </h4>

                      <Link to="/signup">
                        <button className="btn freetips-btn">
                          SIGN ME UP!
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-9"></div>
              <div className="col-md-3">
                <div className="caender">
                  <form
                    className="form"
                    onSubmit={handlechange}
                    onReset={resetcalender}
                  >
                    <input
                      className="datepicker form-control "
                      style={{
                        alignItems: "center",
                        textAlign: "center",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                      onChange={handle}
                      name="min"
                      id="min"
                      type="date"
                    />

                    <div className="cal-btn">
                      <input
                        className="btn btn-primary"
                        style={{ margin: "10px", backgroundColor: "#10867f" }}
                        type="Submit"
                        value={"Submit"}
                      />
                      <input
                        className="btn btn-danger "
                        type="reset"
                        value={"Reset"}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Records horseimg={img1} loading={loading} detail={currentRecords} />

          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            disabledClass
          />
          <HomeFooter/>
        </>
      )}
    </>
  );
};
