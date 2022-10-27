import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    CardElement, useStripe, useElements, CardNumberElement,
    CardExpiryElement,
    CardCvcElement, ElementsConsumer
} from "@stripe/react-stripe-js"
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js"
const Checkoutform = (amount) => {
    const [succeeded, setSucceeded] = useState(false);
    const [errorpay, setErrorpay] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements()
    const dispatch = useDispatch();
    const { loading, isAuthenticated, user } = useSelector(
        (state) => state.user
    );
    useEffect(() => {

        axios.post('/api/auth/buyStripePaymentSubscription', [user, amount]).then((res) => {
            return res.json();
        }).then((data) => {
            setClientSecret(data.clientSecret);
        });
    }, []);

    const handleChange = async (event) => {
        // 4️⃣ Listen for changes in the CardElement and display any errors as the customer types their card details
        setDisabled(event.empty);
        setErrorpay(event.error ? event.error.message : "");
    };

    // ////////////////////////////////////////////////////////////////////////
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);
        // 5️⃣ Confirm Card Payment.
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
        if (payload.error) {
            setErrorpay(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setErrorpay(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };
    const promise = loadStripe("sk_test_51LsM9wFk38wzPf6Ke5xzF6i8KkA9bZXP1jOJ4ThILkatBTQsQAPtZ5PYOoii3CjnLkr2NVYshsv6LZ9vIhpizD6500mMlxIs8M")





    return (
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
                <CardElement
                    id="card-element"

                    options={{}}
                    onChange={handleChange}
                />
                <CardNumberElement

                    options={{}}
                    onChange={handleChange}
                />
                <CardCvcElement

                    options={{}}
                    onChange={handleChange}
                />
                <CardExpiryElement

                    options={{}}
                    onChange={handleChange}
                />
                <button disabled={processing || disabled || succeeded} id="submit">
                    <span id="button-text">
                        {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
                    </span>
                </button>
                {/* Show any error that happens when processing the payment */}
                {errorpay && (
                    <div className="card-error" role="alert">{errorpay}</div>
                )}
                {/* Show a success message upon completion */}
                <p className={succeeded ? "result-message" : "result-message hidden"}>Payment succeeded!</p>
            </form>
        </>
    )
}

export default function InjectedCheckoutForm() {
    return (
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <Checkoutform stripe={stripe} elements={elements} />
        )}
      </ElementsConsumer>
    );
  }
