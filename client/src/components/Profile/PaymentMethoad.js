import React, { useEffect, useState } from "react";
import { ProfileNav } from "./ProfileNav";
import "./paymentmethoad.css";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../layout/Loader";
import { Navigate } from "react-router-dom";
import { useAlert } from "react-alert";
import img1 from "../../Images/level.png";
import img2 from "../../Images/name1.png";
import img3 from "../../Images/name2.png";
import img4 from "../../Images/name3.png";
import img5 from "../../Images/name4.png";

import { clearErrors, loaduser, updateprofile } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import Select from "react-select";


export const PaymentMethoad = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user, isAuthenticated, loading, isUpdated, error } = useSelector(
    (state) => state.user
  );
  const [packages, setpackages] = useState("");
  const [card_no, setcard_no] = useState("");
  const [Expiry, setExpiry] = useState("");
  const [Name_of_card, setName_of_card] = useState("");
  const [cvc, setcvc] = useState("");
  const [dpackge, setdpackge] = useState("");
  
  useEffect(() => {
    if (user) {
      setcard_no(user.card_no);
      setpackages(user.packages);
      setExpiry(user.Expiry);
      setName_of_card(user.Name_of_card);
      setcvc(user.cvc);
    }
    
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    
    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loaduser());

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, user, alert,isUpdated]);
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
  const customStyles = {
    height: 45,
  };
  const updateP = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    
    myForm.set("packages", packages);
    myForm.set("card_no", card_no);
    myForm.set("Name_of_card", Name_of_card);
    myForm.set("cvc", cvc);
    myForm.set("Expiry", Expiry);
    
    console.log(myForm);
    dispatch(updateprofile(myForm));
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }
  const handle=(e)=>{
    setpackages( e.value )
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated === true ? (
            <div className="payment_box_two">
              {user.packages===""}
              <h2>Bronze Membership</h2>
              <h2>$15 / Week</h2>
              <ul>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
                <li>Recommended tips</li>
              </ul>

              <div>
                <form className="box_three form-floating mb-3" onSubmit={updateP}>
                  <h2 className="per_text">Membership Details</h2>
                  <div className="form-floating">
                  <Select
                   className="Select_pack"
                   options={options}
                   styles={customStyles}
                    value={options.filter(function(option) {
                      return option.value === packages;
                    })}
            
                    onChange={handle}
                  />
                  </div>
                  <h2 className="pay_detail">Payment Details</h2>
                  <input
                    className="card_name"
                    value={Name_of_card}
                    type="text"
                    placeholder="Name on Card"
                    onChange={(e) => setName_of_card(e.target.value)}
                  />
                  <input
                    className="card_number"
                    type="number"
                    placeholder="Card Number"
                    value={card_no}
                    onChange={(e) => setcard_no(e.target.value)}
                  />
                  <div className="input_flex_box"></div>
                  <div className="button_flex_box">
                    <input
                      className="exp"
                      type="date"
                      placeholder="Expairy"
                      value={formatDate(Expiry)}
                      onChange={(e) => setExpiry(e.target.value)}
                    />
                    <input
                      className="cvc"
                      type="number"
                      placeholder="CVC"
                      onChange={(e) => setcvc(e.target.value)}
                      value={cvc}
                    />
                  </div>
                  <button type="submit" className="btn-save">
                    Save
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <Navigate to={"/login"} />
          )}
        </>
      )}
    </>
  );
};
