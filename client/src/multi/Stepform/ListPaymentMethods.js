import React, { useEffect, useState } from "react";
import style from "./ListPaymentMethods.css";

import { format } from "date-fns";
import axios from "axios";
import { useSelector } from "react-redux";



export default function ListPaymentMethods({ handleSelectCard }) {
  const [paymentMethods, setPaymentMethods] = useState(null);
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  console.log(user);
  async function getPaymentMethods() {
    await axios
      .post(`/api/auth/paymentMethodcardlist`, {
        user: user,
      })
      .then((resp) => {
        console.log(resp);
        setPaymentMethods(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (user) {
      getPaymentMethods();
    }
  }, [user]);

  return (
    <div className="wrapper">
      <h3>Select your preferred payment method</h3>
      {/* {paymentMethods &&
    } */}
    </div>
  );
}
