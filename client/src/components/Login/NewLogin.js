import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../layout/Loader'
import img3 from "../../Images/GOAT_logo.png"
import { clearErrors, login } from '../../actions/userAction';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';


export const NewLogin = () => {
    const navigate = useNavigate()
    const alert =  useAlert()
    const {tips}  = useParams()
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

const dispatch = useDispatch()
    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
      );
    

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          dispatch(login(loginEmail, loginPassword));
        } catch (error) {
          if (error) {
            return error;
          }
        }
      };

      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
    
        if (isAuthenticated) {
            navigate(`/checkout/${tips}`);
        }
      }, [error, navigate, isAuthenticated, loading, alert, dispatch]);


      function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

  return (
    <>
    {loading && <Loader />}
    <section id="form-section">
      <div className="container">
        <div className="wel-form">
          <div className="wel-p1 img-main ">
            <div className="img-main"></div>
          </div>
          <div className="col-md-6 centerlogo">
            <img className="signimg large" src = {img3}/>
            <div className="wel-bg">
              <div className="form-content">
                <h2 style={{fontSize:"3rem"}}>Welcome!</h2>
                <div className="form-main">
                  <form
                    onSubmit={handleSubmit}
                    className="form-floating mb-3"
                  >
                    <input
                    required
                      onChange={(e) => setLoginEmail(e.target.value)}
                      name="email"
                      value={loginEmail}
                      type="email"
                      className="form-control mb-4"
                      id="floatingInputValue"
                      placeholder="yourmail@mail.com"
                    />
                    <label htmlFor="floatingInputValue">Email Address</label>
                    <div className="form-floating mb-3">
                      <input
                      required
                        name="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="myInput"
                        placeholder="*******"
                      />
                      <i className="fa fa-eye" onClick={myFunction}></i>
                      <label htmlFor="floatingPassword">Passwords</label>
                    </div>
                    <div className="fom-btn mb-3">
                      <button
                        style={{
                          backgroundColor: "#f0b91b",
                          color: "black",
                        }}
                        type="submit"
                        id = "loginhover"
                        className="btn btn-outline-secondary"
                      >
                        Login
                      </button>
                      <Link
                        to="/signup"
                        className="btn btn-outline-secondary"
                        id="loginhover"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </form>
                </div>
                <p>
                  By signing up, I agree to the
                  <Link to="/dashboard/about">
                    <span>Terms and conditions and Privacy policy</span>
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
