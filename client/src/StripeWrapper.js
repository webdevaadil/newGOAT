import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51LsM9wFk38wzPf6KOfmi6mnRsOoTiLX601KOycnKqNve3gcBgrZ7uj2elgislqFvLbWDGOJHfXrxbWXRblezgbxM00PMdbj4T5");

export default function Stripe(props) {
  const options = {
    clientSecret: props.client_secret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {props.children}
    </Elements>
  );
}
