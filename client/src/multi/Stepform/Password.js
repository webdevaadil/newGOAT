import React, { useEffect, useState } from "react";
import "./Package.css";
import Select from "react-select";
import img1 from "../../Images/level.png";
import img2 from "../../Images/name1.png";
import img3 from "../../Images/name2.png";
import img4 from "../../Images/name3.png";
import img5 from "../../Images/name4.png";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../actions/userAction";
import { Loader } from "../../components/layout/Loader";
import axios from "axios";

export const Password = ({ formData, setForm, navigation }) => {
  const { packages, Name_of_card, card_no, Expiry, cvc } = formData;
  const navigate = useNavigate();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  console.log(formData);
  const handle = async(e) => {
    await axios.post("http://localhost:5000/api/auth/register" ,{ formData})

    setpackages( e.value)
    setForm({
      [e.name] : e.value
    });
    // setpackages(packages)
    
  };
 
  const [packagess, setpackages] = useState(packages);
  const options = [
    {
      value: "$60 / week",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img1}
            alt="loading"
          />
          $60 / week
        </div>
      ),
    },
    {
      value: "$45 / week",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img2}
            alt="loading"
          />
          $45/ week
        </div>
      ),
    },
    {
      value: "$30 / week",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img3}
            alt="loading"
          />
          $30/ week
        </div>
      ),
    },
    {
      value: "$15 / week",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img4}
            alt="loading"
          />
          $15/ week
        </div>
      ),
    },
    {
      value: "Free",
      label: (
        <div style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}>
          <img
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img5}
            alt="loading"
          />
          Free
        </div>
      ),
    },
  ];
console.log(packagess);
  const customStyles = {
    height: 45,
  };
  console.log(formData.packages);
  const handleSub = async (e) => {
    e.preventDefault();
    dispatch(register(formData));
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
  console.log();
  return (
    <>
      {loading && <Loader />}

      <div className="container-fluid form-section wel-form">
        <div className="col-md-6">
          <div className="wel-p1 pack-main"></div>
        </div>
        <div className="col-md-6">
          <div className="wel-p1 wel-bg">
            <div className="row form-content">
              <h2>Packages</h2>
              <div className="form-main">
                <form onSubmit={handleSub} className="form-floating mb-3">
                  <div className="form-floating">
                    <Select
                    
                      options={options}
                      styles={customStyles}
                      value={options.filter(function (option) {
                        return option.value === packagess;
                      })}
                      onChange={handle}  
                      name="packages"
                    />
                  </div>
                  <h4 className="mt-4">Payment Details</h4>
                  <div className="form-floating mb-3">
                    <input
                      type="Name"
                      className="form-control"
                      placeholder="J Done"
                      name="Name_of_card"
                      value={Name_of_card}
                      onChange={setForm}
                      
                    />
                    <label htmlFor="floatingInput">Name on Card</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="Card"
                      className="form-control"
                      placeholder="123 456 791 23"
                      name="card_no"
                      value={card_no}

                      onChange={setForm}   
                      maxLength="16"
                      // pattern="[0-9]+"
                    />
                    <label htmlFor="floatingInput">Card Number</label>
                  </div>
                  <div className="form-inner">
                    <div className="form-floating mb-3">
                      <input
                        type="Month"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        name="Expiry"
                        value={Expiry}
                        onChange={setForm}
                      />
                      <label htmlFor="floatingInput">Expiry</label>
                    </div>
                    <div className="form-floating">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="myInput"
                          placeholder="*******"
                          name="cvc"
                          value={cvc}
                          onChange={setForm}
                        />
                        <i className="fa fa-eye"></i>
                        <label htmlFor="floatingPassword">CVV</label>
                      </div>
                    </div>
                  </div>
                  <div className="fom-btn mb-3">
                    <button type="submit" className="btn btn-outline-secondary">
                      Sign Up
                    </button>
                    <button onClick={()=>{navigation.previous(1)}} className="btn btn-outline-secondary">
                    back
                    </button>
                  </div>
                </form>
                  
              </div>
              <p>
                By signing up, I agree to the{" "}
                <span>Terms and conditions and Privacy policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
