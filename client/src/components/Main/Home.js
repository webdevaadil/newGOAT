import React, { useEffect, useState } from "react";
import "./Home.css";
// import"../font/Sportypo-Reguler-Demo.ttf"

import img1 from "../../Images/GOAT_logo.png";
import man from "../../Images/winninghorse.jpg";
import Count from "react-countup";
import img2 from "../../Images/gold.png";
import img3 from "../../Images/platinum.png";
import img4 from "../../Images/silver.png";
import img5 from "../../Images/bronze.png";
import races1 from "../../Images/races.png";
import icon2 from "../../Images/icon2.png";
import horseRacing from "../../Images/Horse-Racing.jpg";
import horseIcon from "../../Images/horse-icon.png";
import greyRacing from "../../Images/Greyhound-Racing.jpg";
import houndIcon from "../../Images/hound-icon.png";
import serviceBackground from "../../Images/serviceback.jpg"
import reliable from "../../Images/races22";
import HomeFooter from "../Footer/HomeFooter";
import vv from "../../Images/Randwick_V1-0030.mp4";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loaduser } from "../../actions/userAction";
import { positions, useAlert } from "react-alert";
import Marquee from "react-fast-marquee";
import vvimg from "../../Images/vid-back.png";
const Home = () => {
  const [tips, setTips] = useState({
    bronze: "$15",
    silver: "$30",
    gold: "$45",
    platinum: "$60"
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, isAuthenticated } = useSelector((state) => state.user);
  const [showVidDIV, setShowVidDIV] = React.useState(false)
  const onVidLoaded = () => setShowVidDIV(true)
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/The-Goat-Tips");
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  // const redy = () => {
  //   navigate("/signup");
  // };

  return (
    <div>
      <div className="video-container">
        <div className="caption">
          <div className="container her0">
            <div style={{ height: "150vh" }} className="row banner-main">
              <img style={showVidDIV ? { display: 'none' } : { }} src={vvimg} id="background-video"></img>
              <video style={showVidDIV ? {} : { visibility: 'hidden' }} autoPlay loop muted id="background-video"
                onLoadedData={() => {
                  onVidLoaded();
                }}>
                <source src={vv} type="video/mp4" />
              </video>
              <div className="banner-sec banne-bg">
                <span style={{ float: "right" }} className="home_btn"></span>
                <div
                  className="col-lg-12 col-md-12 vp"
                  style={{ padding: "0", margin: "-11px", position: "absolute", top: "0" }}
                >
                  <div className="baner-ct">
                    <ul className="navbar-nav top-btn ml-auto">
                      <Link style={{ textAlign: "end" }} to="/login">
                        <button
                          className="homelogin btn btn-1"
                        >
                          Login
                        </button>{" "}
                      </Link>
                    </ul>
                    <img src={img1} alt="" />
                    <div className="bnner-btn">
                      <Link to="/signup">
                        <button className="signbtn">Signup</button>
                      </Link>
                    </div>
                    <h2>
                      <span>Win Better</span> with <br></br> The GOAT's Tips
                    </h2>
                    <p style={{ margin: "0" }}>
                      A sports tipping service that consistently delivers a positive
                      return on investment for its clients. The GOAT's Tips utilises
                      the latest technology and artificial intelligence to improve
                      returns, frequency, and betting experience. We create smarter
                      betters who treat gambling as an investment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="baner-img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/*       
      <div className="container" style={{ textAlign: "center" }}>
        <div className="resut-content">
          <h3>
            Quality Sporting Tips <span>From Expert Tipsters</span>{" "}
          </h3>
          <p>
            Whether you're a professional investor or a casual pub punter, we've
            got you covered. The GOAT's Tips provides consistent returns to
            enhance your sporting experience.
          </p>
          <ul>
            <li>
              {" "}
              <i className="fa fa-check"></i> Thoroughbred horse racing
            </li>
            <li>
              {" "}
              <i className="fa fa-check"></i> Greyhound racing
            </li>
            <li>
              {" "}
              <i className="fa fa-check"></i> Additional sports coming soon!
            </li>
          </ul>
        </div>
      </div>
      <div className="tips-sec">
        <div className="container tips-main">
          <div className="row " style={{ justifyContent: "center" }}>
            <div className="col-md-3 card card1">
              <div className="tips-ct">
                <h2>
                  {" "}
                  &#62;
                  <Count start={0} end={37} duration={4} delay={0} />%
                </h2>
                <p>Strike Rate</p>
              </div>
            </div>
            <div className="col-md-3 card card1">
              <div className="tips-ct ">
                <h2>
                  {" "}
                  &#62;
                  <Count start={0} end={6000} duration={10} delay={0} />{" "}
                </h2>
                <p>Tips Sent</p>
              </div>
            </div>
            <div className="col-md-3  card card1">
              <div className="tips-ct">
                <h2>
                  {" "}
                  <Count start={0} end={400} duration={6} delay={0} />+
                </h2>
                <p>Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="result">
        <div className="container result-mian">
          <div className="section-title">
            {/* <h3 style = {{borderBottom:"2px solid black"}}>Reliable Results</h3> */}

          </div>
          {/* 
          <div className="tab-section">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  aria-controls="home"
                  aria-selected="true"
                >
                  {" "}
                  Horse Racing
                </button>
              </li>
             
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="" id="home">
                <div className="row rate-mian">
                  <div className="col-md-4 col-sm-4">
                    <h3>
                      <Count start={0} end={37} duration={4} delay={0} />%
                    </h3>
                    <p>Win strike rate</p>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <h3>
                      $<Count start={0} end={2.9} duration={2} delay={0} />
                    </h3>
                    <p>Average winning odds</p>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <h3>
                      <Count start={0} end={56} duration={5} delay={0} />%
                    </h3>
                    <p>Top 2 place rate</p>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  aria-controls="home"
                  aria-selected="true"
                >
                  {" "}
                  Greyhound Racing
                </button>
              </li>
                  
            </ul>
              <div className="" id="profile" aria-labelledby="profile-tab">
                <div className="row rate-mian ">
                  <div className="col-md-4 col-sm-4">
                    <h3>
                      <Count start={0} end={57} duration={7} delay={0} />%
                    </h3>
                    <p>Win strike rate</p>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <h3>
                      $<Count start={0} end={2.3} duration={2} delay={0} />
                    </h3>
                    <p>Average winning odds</p>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <h3>
                      <Count start={0} end={68} duration={7} delay={0} />%
                    </h3>
                    <p>Top 2 place rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}


          <div className="rate">

            <div className="container-fluid">
              <div className="row tips-mian f-card">
                <div style={{ position: "relative", right: "5%", top: "25%" }} className="col-lg-6 col-md-12">
                  <div className="resut-content">
                    <div className="card">

                      <div className="resut-content">
                        <h3>
                          Quality Sporting Tips <span>From Expert Tipsters</span>{" "}
                        </h3>
                        <p>
                          Whether you're a professional investor or a casual pub punter, we've
                          got you covered. The GOAT's Tips provides consistent returns to
                          enhance your sporting experience.
                        </p>
                        <ul>
                          <li>
                            {" "}
                            <i className="fa fa-check"></i> Thoroughbred horse racing
                          </li>
                          <li>
                            {" "}
                            <i className="fa fa-check"></i> Greyhound racing
                          </li>
                          <li>
                            {" "}
                            <i className="fa fa-check"></i> Additional sports coming soon!
                          </li>
                        </ul>
                      </div>

                      {/* <div className="clearfix">
                        <button type="button" className="btn  float-start">
                          <img src={icon2} alt="" /> The Goats tips
                        </button>
                        <button type="button" className="btn  float-end">
                          {" "}
                          <img src="./icon2.png" alt="" /> No. 4
                        </button>
                      </div> */}
                      {/* <p>
                        Whether you're a professional investor or a casual pub
                        punter, we've got you covered. The GOAT's Tips provides
                        consistent returns to enhance your sporting experience.
                      </p>
                      <p>
                        Whether you're a professional investor or a casual pub
                        punter, we've got you covered. The GOAT's Tips provides
                        consistent returns to enhance your sporting experience.
                      </p> */}

                    </div>


                    {/* <div style={{ justifyContent: "center" }} className="card ">
                      <div className="clearfix">
                        <button type="button" className="btn  float-start">
                          <img src={icon2} alt="" /> The Goats tips
                        </button>
                        <button type="button" className="btn  float-end">
                          {" "}
                          <img src="./icon2.png" alt="" /> No. 4
                        </button>
                      </div>
                      <p>
                        Whether you're a professional investor or a casual pub
                        punter, we've got you covered. The GOAT's Tips provides
                        consistent returns to enhance your sporting experience.
                      </p>
                    </div>
                    <div className="card ">
                      <div className="clearfix">
                        <button type="button" className="btn  float-start">
                          <img src={icon2} alt="" /> The Goats tips
                        </button>
                        <button type="button" className="btn  float-end">
                          {" "}
                          <img src="./icon2.png" alt="" /> No. 4
                        </button>
                      </div>
                      <p>
                        Whether you're a professional investor or a casual pub
                        punter, we've got you covered. The GOAT's Tips provides
                        consistent returns to enhance your sporting experience.
                      </p>
                      <p>
                        Whether you're a professional investor or a casual pub
                        punter, we've got you covered. The GOAT's Tips provides
                        consistent returns to enhance your sporting experience.
                      </p>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  {/* <div className="resut-content">
                    <h3>
                      Quality Sporting Tips <span>From Expert Tipsters</span>{" "}
                    </h3>
                    <p>
                      Whether you're a professional investor or a casual pub
                      punter, we've got you covered. The GOAT's Tips provides
                      consistent returns to enhance your sporting experience.
                    </p>
                    <ul>
                      <li>
                        {" "}
                        <i className="fa fa-check"></i> Thoroughbred horse racing
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-check"></i> Greyhound racing
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-check"></i> Additional sports coming
                        soon!
                      </li>
                    </ul>
                  </div> */}
                </div>

              </div>

              <div style={{ position: "relative", right: "5%" }} className="row tips-mian">

                <div className="tips-sec">
                  <div className="container tips-main">
                    <div className="row "
                    // style={{ justifyContent: "center" }}
                    >
                      <div className="col-md-2 card card1">
                        <div className="tips-ct">
                          <h2>
                            {" "}
                            &#62;
                            <Count start={0} end={37} duration={4} delay={0} />%
                          </h2>
                          <p>Strike Rate</p>
                        </div>
                      </div>
                      <div className="col-md-2 card card1">
                        <div style={{ marginBottom: "4px" }} className="tips-ct ">
                          <h2>
                            {" "}
                            &#62;$
                            <Count start={0} end={3} duration={10} delay={0} />{" "}
                          </h2>
                          <p>Average odds</p>
                        </div>
                      </div>
                      <div className="col-md-2 card card1">
                        <div style={{ marginTop: "11px" }} className="tips-ct">
                          <h2>
                            {" "}
                            <Count start={0} end={56} duration={10} delay={0} />%
                          </h2>
                          <p>Top 2 place rate</p>
                        </div>
                      </div>
                      <div className="col-md-2 card card1">
                        <div style={{ marginTop: "11px" }} className="tips-ct">
                          <h2>
                            {" "}
                            <Count start={0} end={400} duration={6} delay={0} />+
                          </h2>
                          <p>Satisfied Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section style={{ height: "100%" }}>
        <div
          className=" media-banner"
          style={{
            display: "none",
            width: "100%",
            maxWidth: "992px",
            height: "auto",
          }}
        >
          <div className="box" style={{ height: "100%  " }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={man}
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </section>
      <div className="Reliable-sec">
        <div className="container">
          <div className="row reliav-main">
            <div className="col-md-6">
              <div className="reliable-img">
                <img src={reliable} alt="" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="reliable-cont">
                <h3>
                  Reliable Tips at <br></br> Your Fingertips
                </h3>
                <p>
                  All tips are sent directly to your inbox the morning of the
                  sporting event, along with rationale for the selections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Reliable-sec relai2">
        <div className="container">
          <div className="row reliav-main">
            <div className="col-md-6">
              <div className="reliable-cont">
                <h3>Artificial Intelligence Used to Improve Your Returns!</h3>
                <p>
                  The GOAT's Tips uses artificial intelligence to plough through
                  millions of datapoints to ensure only the most reliable tips
                  arrive in your inbox.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="reliable-img">
                <div className="mob-img">
                  <img src={races1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tipping-sec">
        <div className="tipping_opacity">
          <div className="tippimg-main" id="tiping">
            <div className="section-title">
              <h3>Tipping Packages for Everyone</h3>
              <p>
                Choose the package that suits your favourite sport, confidence
                level, and budget - we've got the right one for you!
              </p>
              <h4>
                {" "}
                <span>Thoroughbred Horse Racing</span>
              </h4>
            </div>
            <div className="tipp">
              <div
                onClick={() => navigate(`/checkout/${tips.bronze}`)}
                className="btn"
                style={{ width: "50%" }}
              >
                <div className="row tipping1 " style={{ width: "100%" }}>
                  <div className="col-md-6">
                    <div className="tipp-img">
                      <img src={img5} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tipping-ct">
                      <h3>Bronze</h3>
                      <p>$15 / Week</p>
                      <div className="return">
                        <span>98% returns</span>
                      </div>
                      <ul className="tiip-list">
                        <li>
                          {" "}
                          <i className="fa fa-check"></i> Top tip of the day
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Every Saturday
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-check"></i>Direct to your inbox
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate(`/checkout/${tips.silver}`)}
                className="btn"
                style={{ width: "50%" }}
              >
                <div className="row tipping1" style={{ width: "100%" }}>
                  <div className="col-md-6">
                    <div className="tipp-img">
                      <img src={img4} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tipping-ct">
                      <h3>Silver</h3>
                      <p>$30 / Week</p>
                      <div className="return">
                        <span>120% returns</span>
                      </div>
                      <ul className="tiip-list">
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
              </div>
              <div
                onClick={() => navigate(`/checkout/${tips.gold}`)}
                className="btn"
                style={{ width: "50%", marginTop: "8px" }}
              >
                <div className="row tipping1" style={{ width: "100%" }}>
                  <div className="col-md-6">
                    <div className="tipp-img">
                      <img src={img2} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tipping-ct">
                      <h3>Gold</h3>
                      <p>$45 / Week</p>
                      <div className="return">
                        <span>165% returns</span>
                      </div>
                      <ul className="tiip-list">
                        <li>

                          <i className="fa fa-check"></i>Our top daily tips,
                          plus
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Our top 15 Saturday
                          tips
                        </li>
                        <li>

                          <i className="fa fa-check"></i>Direct to your inbox
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate(`/checkout/${tips.platinum}`)}
                className="btn"
                style={{ width: "50%", marginTop: "8px" }}
              >
                <div className="row tipping1" style={{ width: "100%" }}>
                  <div className="col-md-6">
                    <div className="tipp-img">
                      <img src={img3} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tipping-ct">
                      <h3>Platinum</h3>
                      <p>$60 / Week</p>
                      <div className="return">
                        <span>265% returns</span>
                      </div>
                      <ul className="tiip-list">
                        <li>
                          {" "}
                          <i className="fa fa-check"></i> Our top 5 daily tips,
                          plus
                        </li>
                        <li>
                          <i className="fa fa-check"></i> Our top 20 Saturday
                          tips
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-check"></i>Direct to your inbox
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bnner-btn">
              <Link to="/signup">
                <button className="signbtn">Sign Me Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="Services-sec">
        <div style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.688)" }}>
          <div className="container">
            <div className="section-title">
              <h3>Services Provided</h3>
            </div>
            <div className="row service-main">
              <div className="col-md-6">
                <div className="service-img2">
                  <img src={horseRacing} alt="img" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-ct">
                  <div className="ser-img">
                    <img style={{ color: "black" }} src={horseIcon} alt="img" />
                    <h3 >Horse Racing Tips</h3>
                  </div>
                  <p >
                    Our eyes are always on the track to ensure we get the inside
                    rail on the winning tips sent out.
                  </p>
                </div>
                <div className="bnner-btn">
                  <Link to="/signup">
                    {" "}
                    <button className="signbtn" href="/signup">
                      Sign Me Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row service-main">
              <div className="col-md-6">
                <div className="service-img2">
                  <img src={greyRacing} alt="img" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-ct">
                  <div className="ser-img">
                    <img style={{ height: "10%" }} src={houndIcon} alt="img" />
                    <h3>Greyhound Racing Tips</h3>
                  </div>
                  <p>
                    Our eyes are always on the track to ensure we get the inside
                    rail on the winning tips sent out.
                  </p>
                </div>
                <div className="bnner-btn">
                  <Link to="/signup">
                    <button className="signbtn">Sign Me Up</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "45px" }} className="follw-sec">
        <div className="container">
          <div className="foll-ct">
            <h3>Follow Us on our Socials</h3>
          </div>
          <ul className="socil-link">
            <li>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.facebook.com/The-GOATs-Tips-102013742449574"
              >
                <i style={{ color: "#3f3fc1" }} className="fa fa-facebook-f"> </i>
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://twitter.com/thegoatstips"
              >
                <i style={{ color: "#3676e1" }} className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.instagram.com/goats.tips/"
              >
                <i style={{ color: "#C13584" }} className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="nesletter-sec">
        <div className="centernews">
          <div className="row news-main">
            <div className="col-md-8">
              <div className="mes-cont">
                <h4>Latest News From A Winning Team</h4>
                <p>
                  Sign up to our newsletter to keep your ear to the wall with
                  our latest offers, products, and industry news.
                </p>
              </div>
            </div>

            <div style={{ margin: "auto", marginTop: "15px" }} className="col-md-4">
              <div className="mesbtn">
                <form>
                  <div className="mb-2">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email Address"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <button style={{ marginTop: "3rem" }} type="submit" className="btn form-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="testimpnal-sec">
        <div className="">
          <div
            className="section-title"
            style={{
              textAlign: "center",
              marginBottom: "50px",
              marginTop: "25px",
              
            }}
          >
            <h3 style= {{
              borderBottom:"2px solid black",
              paddingBottom:"4px"
            }}>Testimonials</h3>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="cureseldesignparent">
                  <div className="curoseldesign">
                    <h4>
                      I started on Bronze, moved up to Silver, then Gold and now
                      Platinum – winning all the way!
                    </h4>
                    <div className="cont">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </div>
                      <h3>Trent Davies</h3>
                      <p>
                        {" "}
                        <span>Thoroughbred Horses - Platinum Subscription</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="cureseldesignparent">
                  <div className="curoseldesign">
                    <h4>
                      I started on Bronze, moved up to Silver, then Gold and now
                      Platinum winning all the way!
                    </h4>
                    <div className="cont">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </div>
                      <h3>Trent Davies</h3>
                      <p>
                        <span>Thoroughbred Horses - Platinum Subscription</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="cureseldesignparent">
                  <div className="curoseldesign">
                    <h4>
                      I started on Bronze, moved up to Silver, then Gold and now
                      Platinum – winning all the way!
                    </h4>
                    <div className="cont">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                      </div>
                      <h3>Trent Davies</h3>
                      <p>
                        {" "}
                        <span>Thoroughbred Horses - Platinum Subscription</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div> */}

      <div className="wiinner-sec">
        <div className="container">
          <div className="winner-main">
            <h3>Become a Winner Now!</h3>
            <p>
              Join us in backing daily winners with a subscription tailored to
              your preferences.
            </p>
            <div className="bnner-btn">
              <Link to="/signup">
                <button className="signbtn">Sign Me Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Home;
