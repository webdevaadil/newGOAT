import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/layout/Loader';
import Select from "react-select";
import img1 from "../../Images/level.png";
import img2 from "../../Images/name1.png";
import img3 from "../../Images/name2.png";
import img4 from "../../Images/name3.png";
import img5 from "../../Images/name4.png";
import { PayPalButton } from 'react-paypal-button-v2';
import axios from 'axios';
import { Link, useNavigate,useParams} from 'react-router-dom';
import { useAlert } from 'react-alert';
import { updateprofile } from '../../actions/userAction';


export const Checkout = () => {
  const {tips}  = useParams();
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const [packages, setpackages] = useState(`${tips} / week`);
  const [test, settest] = useState();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const handle = async (e) => {
    setpackages(e.value);
  };

  const date = new Date();
  date.setDate(date.getDate() + 6);

  const updatepro = () => {
    dispatch(
      updateprofile({
        paymentstatus: "true",
        packages,
        paymentDate: Date.now(),
        PaymentexpireDate: date,
      })
    );
  };

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
          $60 per week
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
          $45 per week
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
          $30 per week
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
          $15 per week
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
  return (
    <>
      {loading && <Loader/>}

      <section id="form-section">
        <div className="container-fluid">
          <div className="row login-form">
            <div className="col-md-6">
              <div className="img-main"></div>
            </div>
            <div className="col-md-6">
              <div className="wel-bg">
                <div className="row form-content check-center">
                  <h2>Packages</h2>
                  <div className="form-main">
                    <form className="form-floating mb-3">
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
                            {packages === "Free" ? (
                              <button className="btn_two" onClick={updatepro}>
                                Select
                              </button>
                            ) : (
                              <>

{
  isAuthenticated?
  <PayPalButton
  createOrder={async (data, actions) => {
    return await fetch("/api/auth/pay", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        packages: packages,
      }),
      // use the "body" param to optionally pass additional order information
      // like product ids or amount
    })
      .then((response) => response.json())
      .then((order) => order.id)

      .catch((err) => {
        console.log(err);
      });
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
        console.log(
          "Capture result",
          orderData
        );
      })
      .then((orderData) =>
        console.log(orderData)
      )
      .then(updatepro())
      .then(navigate("/The-Goat-Tips"))
      .catch((err) => {
        console.log(err);
      });
  }}
  catchError={(err, data) => {
    // alert("Transaction completed by " + details.payer.name.given_name);
    console.log(err);

    // OPTIONAL: Call your server to save the transaction
  }}
/>:
    (
           <ul style = {{flexDirection:"row",justifyContent:"center",marginTop:"1rem"}} className="navbar-nav top-btn ml-auto">
           <button onClick={()=>navigate(`/newlogin/${tips}`)} style={{width:"90%",marginBottom:"7px"}} className='btn btn-1'>Login</button>
            <Link to="/signup"><button style = {{width:"160%"}} className='btn btn-2'>Signup</button></Link>
         </ul>
          )
}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <Link to="/privacy-policy">

<p style = {{textAlign:"center"}}>
  By signing up, I agree to the{" "}
  <span>Terms and conditions and Privacy policy</span>
</p>
 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}
