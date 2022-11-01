import React, { useEffect, useState } from "react";
import style from "./ListPaymentMethods.css";

import { format } from "date-fns";
import axios from "axios";
import visa from "../assets/cards/visa.png";
import americanexpress from "../assets/cards/americanexpress.png";
import dinersclub from "../assets/cards/dinersclub.jpg";
import discover from "../assets/cards/discover.jpg";
import elo from "../assets/cards/elo.png";
import hiper from "../assets/cards/hiper.png";
import jcb from "../assets/cards/jcb.png";
import mastercard from "../assets/cards/mastercard.png";
import mir from "../assets/cards/mir.png";
import unionpay from "../assets/cards/unionpay.png";

function getCardImage(type) {
  switch (type) {
    case "visa":
      return visa;
    case "mastercard":
      return mastercard;
    case "amex":
      return americanexpress;
    case "diners club":
      return dinersclub;
    case "discover":
      return discover;
    case "jcb":
      return jcb;
    case "unionpay":
      return unionpay;
    case "maestro":
      return mastercard;
    case "mir":
      return mir;
    case "elo":
      return elo;
    case "hiper":
      return hiper;
    case "hipercard":
      return hiper;
    default:
      return visa;
  }
}
export default function ListPaymentMethods({ handleSelectCard }) {
  const [paymentMethods, setPaymentMethods] = useState(null);

  function getPaymentMethods() {
    axios
      .get(`http://localhost:5000/api/auth/paymentMethodcardlist`)
      .then((resp) => {
        console.log(resp);
        setPaymentMethods(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(getPaymentMethods, []);

  return (
    <div className="wrapper">
      <h3>Select your preferred payment method</h3>
      {paymentMethods &&
        paymentMethods.map((method) => {
          console.log(method.card.brand);
          return (
            <div className={"card"}>
              <div className={style.cardLogo}>
                <img src={getCardImage(method.card.brand)} alt="" />
              </div>

              <div className={"details"}>
                <p>
                  {method.card.brand} **** {method.card.last4}
                </p>
                <p>{method.billing_details.name}</p>
              </div>

              <div className={"expire"}>
                Expires{" "}
                {format(
                  new Date(
                    `${method.card.exp_year}/${method.card.exp_month}/01`
                  ),
                  "MM/yyyy"
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
