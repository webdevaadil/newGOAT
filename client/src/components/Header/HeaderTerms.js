import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderTerms.css";
import img1 from "../../Images/left-Vector.png"
import img2 from "../../Images/Vector.png"
import { Loginbtn } from "./Loginbtn";
// import { home\  } from "../../actions/userAction";
export const HeaderTerms = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <div className=" top-header" >
        <div className="container-fluid Mainheader" >
          <nav style={{
            display: "-wflex ebkit-box -moz-box  -ms-flexbox -webkit-flex"
          }} className="container navbar navbar-expand-lg navbar-light wd-70">
            <Link className="navbar-brand" to="/">
              <img style={{ height: "60px" }} src="/logo1.png" alt="this" />
            </Link>
            {/* <button
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
            </button> */}
          </nav>
        </div>
      </div>
    </>
  );
};
