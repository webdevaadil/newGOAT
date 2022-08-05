import React from "react";
import { ProfileNav } from "./ProfileNav";
import"./paymentmethoad.css"
import { useSelector } from "react-redux";
import { Loader } from "../layout/Loader";
import { Navigate } from "react-router-dom";

export const PaymentMethoad = () => {
  const { user, isAuthenticated, loading, isUpdated, error } = useSelector(
    (state) => state.user
  );
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }
  return (
        <>
    {loading? <Loader/>:
    <>
      {isAuthenticated === true ? ( 
      <div className="payment_box_two">
        <h2>Bronze Membership</h2>
        <h2>$15 / Week</h2>
        <ul>
          <li>Recommended tips</li>
          <li>Recommended tips</li>
          <li>Recommended tips</li>
        </ul>

        <div>
          <form className="box_three">
            <h2 className="per_text">Membership Details</h2>
            <input
              className="Select_pack"
              type="text"
              placeholder="Select Package"
              value={user.packages}

            />
            <h2 className="pay_detail">Payment Details</h2>
            <input className="card_name" value={user.Name_of_card} type="text" placeholder="Name on Card" />
            <input
              className="card_number"
              type="number"
              placeholder="Card Number"
              value={user.card_no}
            />
            <div className="input_flex_box"></div>
            <div className="button_flex_box">
              <input className="exp" type="date" placeholder="Expairy" value={formatDate( user.Expiry)}/>
              <input className="cvc" type="number" placeholder="CVC" value={user.cvc}/>
            </div>
            <button className="btn-save">Save</button>
          </form>
        </div>
      </div>
       ) : (
        <Navigate to={"/login"} />
      )}
    </>
    }
    </>
  );
};
