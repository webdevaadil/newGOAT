import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

const Footer=()=>
{
    return (
        <>
        <div className='container-fluid footer-sec'>
          <div className='container'>
            <div className='footer-ct'>
              <div className='foot_1'>
                <h4>Group 1</h4>
                <ul>
                  <Link to = '/'>
                  <li >Home</li>
                  </Link>
                  <Link to = "/packages">
                  <li>Features</li>
                  </Link>
                </ul>
              </div>
              <div className='foot_1'>
                <h4>Group 2</h4>
                <ul>
                   <Link to = '/about'>
                  <li>Privacy Policy</li>
                   </Link>
                   <Link to = "/about">
                  <li >Terms & Conditions</li>
                   </Link>
                </ul>
              </div>
              <div className='foot_1'>
                <h4>The Goat Tips</h4>
                <p>The Goat Tips Betting made easy! Your guide for sports betting, The Goat’s Tips caters to your needs with different packages, provides tips and guidance for 
                  betting on Thoroughbreds, Greyhounds and much more with real-time data on upcoming races and a great ROI. Sign up now!</p>
              </div>
            </div>
            <div className='foot-link d-flex justify-content-center'>
              <p>© The Goat Tips</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Footer;