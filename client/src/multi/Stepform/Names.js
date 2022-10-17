import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import "./Signup.css";
import { clearErrors, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import img3 from "../../Images/GOAT_logo.png"


export const Names = ({ formData, setForm, navigation }) => {
  const navigate = useNavigate();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const{
    username,
    email,
    password,
    dob,
    phoneno,
  }=formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigation.next();
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handle = (e) => {
    setForm(e);
    setInterval(() => {
      const valued = e.target.value.trim();
      if (valued.length < 8) {
        setErrorMessage("Password is less 8 than");
      } else {
        setErrorMessage("");
      }
    }, 2000);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      alert.success("Signup Successfull");
      navigate("/");
    }
  }, [navigate, isAuthenticated, loading, error, alert, dispatch]);
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
     <div className  = {loading?"aad":"overflow"}>
      <section id="form-section">
        <div className="wel-form">
          <div className="wel-p1 img-main">
            <div className="img-main"></div>
          </div>
          <div className="col-md-6 centerlogo">
            <img className="signimg" style ={{position: "relative",
    top:"4rem"}} src= {img3}/>
            <div className="form-content wel-bg sign-logo">
              <h2>Hello!</h2>
              <div className="form-main">
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  autoComplete="new-password"
                  className="form-floating mb-3"
                >
                  <div className="form-floating"></div>
                  <div className="form-floating mb-2">
                    <input
                      name="username"
                      value={username}
                      onChange={setForm}
                      type="text"
                      required
                      className="form-control"
                      autoComplete="off"
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      onChange={setForm}
                      type="email"
                      name="email"
                      required
                      value={email}
                      className="form-control"
                      autoComplete="new-password"
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                  </div>

                  <div className="form-floating mb-2">
                    <input
                      value={password}
                      required
                      onChange={handle}
                      name="password"
                      type="password"
                      className="form-control"
                      id="myInput"
                      autoComplete="new-password"
                    />
                    {errorMessage === "" ? null : (
                      <span
                        style={{
                          fontWeight: "lighter",
                          color: "red",
                        }}
                      >
                        {errorMessage}
                      </span>
                    )}
                    <i className="fa fa-eye" onClick={myFunction}></i>
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-inner fom-btn">
                    <div className="form-floating mb-2">
                      <input
                        onChange={setForm}
                        name="dob"
                        value={dob}
                        required
                        type="date"
                        className="form-control"
                        autoComplete="new-password"
                      />
                      <label htmlFor="floatingInput">Date of Birth</label>
                    </div>
{/* 
                    <div className="form-floating">
                      <select
                        name="gender"
                        onChange={setForm}
                        className="form-select"
                        aria-label="Floating label select example"
                        value={gender}
                        autoComplete="new-password"
                        style={{ border: "1px solid" }}
                      >
                        <option>select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                
                      </select>
                      <label htmlFor="floatingSelect">Gender (Optional)</label>
                    </div> */}
                  </div>
                  <div className="form-inner fom-btn">
                    <div className="form-floating mb-2">
                      <input
                        name="phoneno"
                        onChange={setForm}
                        value={phoneno} 
                        required
                        type="text"
                        className="form-control"
                        autoComplete="new-password"
                        pattern="[0-9]{10}"
                        aria-describedby="emailHelp"
                      />
                      <small id="emailHelp" className="form-text text-muted"></small>
                      <label htmlFor="floatingInput">Phone number</label>
                    </div>

                    {/* <div className="form-floating mb-2">
                      <input
                        onChange={setForm}
                        name="residientialaddress"
                        value={residientialaddress}
                        required
                        type="text "
                        className="form-control"
                        autoComplete="new-password"
                     
                      />
                      <label htmlFor="floatingInput">Residiential address</label>
                    </div> */}
                    
                  </div>
                  
                  <div className="fom-btn mb-3 mt-3">
                    <Link
                      to="/login"
                      type="login"
                      className="btn btn-outline-secondary"
                    >
                      Login
                    </Link>
                    <button
                      style={{ backgroundColor: " #f0b91b", color: "black" }}
                      disabled={errorMessage === "Password is less 8 than"}
                      type="submit"
                      id = "loginhover"
                      className="btn btn-outline-secondary"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
              <p>
                By signing up, I agree to the{" "}
                <Link to="/privacy-policy">
                  <span>Terms and conditions and Privacy policy</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};
