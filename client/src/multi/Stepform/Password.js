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
import {
  clearErrors,
  loaduser,
  register,
  updateprofile,
} from "../../actions/userAction";
import { Loader } from "../../components/layout/Loader";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
export const Paypa = () => {
  // const { packages, Name_of_card, card_no, Expiry, cvc } = ;
  const navigate = useNavigate();
  const alert = useAlert();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const local = JSON.parse(localStorage.getItem("comuser"));
  const dispatch = useDispatch();

  const [packages, setpackages] = useState("");
  const handle = async (e) => {
    setpackages(e.value);
  };
 
  if (user) {
    if (user.paymentstatus === "true") {
      navigate("/main");
    }
  }
  useEffect(() => {
    if(
      user
      ){
      setpackages(user.packages);

    }
    if (!user) {
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // if (!isAuthenticated) {
    //   dispatch(loaduser());
    //   navigate("/");
   
    // }
  }, [error, navigate, alert, isAuthenticated, user, dispatch]);

  const [test, settest] = useState();
  // console.log(00);
  // if(test.data.status==="COMPLETED"){
  //   dispatch(register())
  // }
  const options = [
    {
      value: "$60 / week",
      label: (
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
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
        <div
          className="sele-text"
          style={{ fontWeight: 600, fontSize: "20px", color: "#282828" }}
        >
          <img
            className="select-img"
            style={{ height: "60px", width: "205px", marginRight: "30px" }}
            src={img5}
            alt="loading"
          />
          Free
        </div>
      ),
    },
  ];
  const customStyles = {
    height: 45,
    zIndex: -999,
  };
  const handleSub = async (e) => {
    e.preventDefault();
    dispatch(register());
  };
  // const [paymentstatus, setpaymentstatus] = useState("true");

  const myForm = new FormData();
  const updatepro = (e) => {
    dispatch(updateprofile({ paymentstatus: "true" }));
    console.log("hi");
  };

  return (
    <>
      {loading && <Loader />}

      <section id="form-section">
        <div className="container-fluid">
          <div className="row login-form">
            <div className="col-md-6">
              <div className="img-main"></div>
            </div>
            <div className="col-md-6">
              <div className="wel-bg">
                <div className="row form-content">
                  <h2>Packages</h2>
                  <div className="form-main">
                    <form onSubmit={handleSub} className="form-floating mb-3">
                      <div
                        style={{ zIndex: 99999999999 }}
                        className="form-floating"
                      >
                        <Select
                          className="Select_pack"
                          options={options}
                          styles={customStyles}
                          value={options.filter(function (option) {
                            return option.value === packages;
                          })}
                          onChange={handle}
                          // defaultValue={user.packages}
                        />
                      </div>

                      <div className="fom-btn mb-3">
                        <div>
                          <div
                            style={{ maxWidth: "750px", minHeight: "200px" }}
                          >
                            <PayPalButton                              createOrder={async (data, actions) => {
                                return await fetch("/api/auth/pay", {
                                  method: "post",
                                  // body: JSON.stringify({
                                  //   ,
                                  // }),
                                  // use the "body" param to optionally pass additional order information
                                  // like product ids or amount
                                })
                                  .then((response) => response.json())
                                  .then((order) => order.id)
                                  // .then((response) =>console.log(response))

                                  .catch((err) => {
                                    console.log(err);
                                  });
                                // console.log(response)
                              }}
                              ///////////////////////
                              onApprove={async (data, actions) => {
                                console.log(data);

                                return await axios
                                  .post(
                                    `/api/auth/order/${data.orderID}/capture`,
                                    {}
                                  )
                                  .then((response) => response)
                                  .then((orderData) => {
                                    settest(orderData);
                                    // Successful capture! For dev/demo purposes:
                                    console.log("Capture result", orderData);
                                  })
                                  .then((orderData) => console.log(orderData))
                                  .then(updatepro())
                                  .then((orderData)=>{
                                    navigate("/main")
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              }}
                              catchError={(err, data) => {
                                // alert("Transaction completed by " + details.payer.name.given_name);
                                console.log(err);

                                // OPTIONAL: Call your server to save the transaction
                              }}
                            />
                          </div>
                        </div>
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
        </div>
      </section>
    </>
  );
};
