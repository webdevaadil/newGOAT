import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Signup.css";
import { clearErrors, register } from "../../actions/userAction";
import { Metadata } from "../layout/Metadata";
import { Loader } from "../layout/Loader";
import { useAlert } from "react-alert";

export const Signup = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");


  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    dob: ``,
    gender: "",
  });
  const { username, email, password,dob,gender } = data;

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
 
      setData({ ...data, [e.target.name]: e.target.value });
    }
    };
    console.log(data);
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("username", username);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("dob", dob);
    myForm.set("avatar", avatar);
    myForm.set("gender", gender);
    dispatch(register(myForm));
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
  }, [navigate, isAuthenticated, loading, error,alert,dispatch]);

  function showPassword() {
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
        <div className="wel-form">
          <div className="wel-p1 img-main">
            <div className="img-main"></div>
          </div>
          <div className="wel-p1 wel-bg">
            <div className="form-content">
              <h2>Hello!</h2>
              <div className="form-main">                
                <form onSubmit={handleSubmit} encType="multipart/form-data"className="form-floating mb-3">
                  <div className="form-floating"></div>
                  <div className="form-floating mb-3">
                    <input
                      name="username"
                      value={username}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="Your Full Name"
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      required
                      value={email}
                      className="form-control"
                      placeholder="yourmail@mail.com"
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      value={password}
                      required
                      onChange={handleChange}
                      name="password"
                      type="password"
                      className="form-control"
                      id="myInput"
                      placeholder="*******"
                    />
                    <i onClick={showPassword} className="fa fa-eye"></i>
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

             
                 
                  <div className="form-inner">
                    <div className="form-floating mb-3">
                      <input
                        onChange={handleChange}
                        name="dob"
                        value={dob}
                        required
                        type="date"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                      />
                      <label htmlFor="floatingInput">Date of Birth</label>
                    </div>
                    <div className="form-floating">
                      <select
                        name="gender"
                        onChange={handleChange}
                        className="form-select"
                        aria-label="Floating label select example"
                        value={gender}
                      >
                        <option disabled>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non-binary</option>
                        <option>Prefer not to say</option>
                      </select>
                      <label htmlFor="floatingSelect">Gender (Optional)</label>
                    </div>
                  </div>
                  <div className="fom-btn mb-3">
                    <button
                      style={{ backgroundColor: " #10867F", color: "black" }}
                      disabled={data.dob === ""}
                      type="submit"
                      className="btn btn-outline-secondary"
                     
                    >
                      Sign Up
                    </button>
                    <Link
                      to="/login"
                      type="login"
                      className="btn btn-outline-secondary"
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
              <p>
                By signing up, I agree to the{" "}
                <Link to ="/dashboard/about">
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
