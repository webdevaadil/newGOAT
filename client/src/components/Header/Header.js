import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import img1 from "../../Images/left-Vector.png"
import img2 from "../../Images/Vector.png"
import { Loginbtn } from "./Loginbtn";
// import { home\  } from "../../actions/userAction";
export const Header = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <div className=" top-header" >
        <div className="container-fluid Mainheader" >
          <nav style={{
            display: "-wflex ebkit-box -moz-box  -ms-flexbox -webkit-flex"
          }} className="container navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              <img style={{ height: "60px" }} src="/logo1.png" alt="this" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="container">
                <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" />
                <label htmlFor="checkbox1"><div className="hamburger hamburger1"><span className="bar bar1"></span><span className="bar bar2"></span><span className="bar bar3"></span><span className="bar bar4"></span></div></label>
              </div>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <div

                    style={{ color: "white", cursor: "pointer", fontWeight: "900" }}
                    className="nav-link"
                  >
                    SUBSCRIPTIONS
                  </div>
                  <div className="aadil">
                    <div style={{
                      zIndex: "1",
                      display: "block",
                      position: "absolute",
                      left: "12%",
                      top: "75%",
                      borderRadius: "25px"
                    }}
                      className="card designcard"
                    >
                      <div className="card-body">
                        <div>
                          <img src={img2} alt="Thoroughbreds" style={{ marginRight: "10px" }} />
                          <Link
                            className="modaltext"
                            style={{ fontSize: "15px" }}
                            onClick={() => setShow(!show)}
                            to="/thoroughbreds"
                          >
                            Throughbreds
                          </Link>
                        </div>
                        <br />
                        <div>

                          <img src={img1} alt="?" style={{ marginRight: "10px" }} />
                          {/* <img src="./left-Vector.png" alt="" /> */}
                          <Link
                            className="modaltext"
                            style={{ fontSize: "15px" }}
                            onClick={() => setShow(!show)}
                            to="/greyhounds"
                          >
                            Greyhounds
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </li>
              </ul>
              <Loginbtn />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
