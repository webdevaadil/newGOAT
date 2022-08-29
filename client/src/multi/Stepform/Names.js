import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import "./Signup.css";
import { clearErrors, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { Metadata } from "../../components/layout/Metadata";
import { Loader } from "../../components/layout/Loader";
import axios from "axios";

export const Names = ({ formData, setForm, navigation }) => {
  const navigate = useNavigate();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const { username, email, password, dob, gender } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigation.next();
    await axios.get("http://localhost:5000/api/auth/register");

    const myForm = new FormData();

    //  dispatch(register(myForm));
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
  const payment=async()=>{
    await axios.post("http://localhost:5000/pay" ,)

  }
  return (
    <>
      {loading && <Loader />}
      <button onClick={payment}>payment</button>

      <section id="form-section">
        <div className="wel-form">
          <div className="wel-p1 img-main">
            <div className="img-main"></div>
          </div>
          <div className="col-md-6">
            <div className="form-content wel-bg ">
              <h2>Hello!</h2>
              <div className="form-main">
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  autoComplete="new-password"
                  className="form-floating mb-3"
                >
                  <div className="form-floating"></div>
                  <div className="form-floating mb-3">
                    <input
                      name="username"
                      value={username}
                      onChange={setForm}
                      type="text"
                      required
                      className="form-control"
                      placeholder="Your Full Name"
                      autoComplete="off"
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={setForm}
                      type="email"
                      name="email"
                      required
                      value={email}
                      className="form-control"
                      placeholder="yourmail@mail.com"
                      autoComplete="new-password"
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      value={password}
                      required
                      onChange={handle}
                      name="password"
                      type="password"
                      className="form-control"
                      id="myInput"
                      placeholder="*******"
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
                    <label htmlFor="floatingPassword">Passwords</label>
                  </div>

                  <div className="form-inner fom-btn">
                    <div className="form-floating mb-3">
                      <input
                        onChange={setForm}
                        name="dob"
                        value={dob}
                        required
                        type="date"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        autoComplete="new-password"
                      />
                      <label htmlFor="floatingInput">Date of Birth</label>
                    </div>
                    <div className="form-floating">
                      <select
                        name="gender"
                        onChange={setForm}
                        className="form-select"
                        aria-label="Floating label select example"
                        value={gender}
                        autoComplete="new-password"
                      >
                        <option>select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non-binary</option>
                        <option>Prefer not to say</option>
                      </select>
                      <label htmlFor="floatingSelect">Gender (Optional)</label>
                    </div>
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
                      style={{ backgroundColor: " #10867F", color: "black" }}
                      disabled={errorMessage === "Password is less 8 than"}
                      type="submit"
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
    </>
  );
};
