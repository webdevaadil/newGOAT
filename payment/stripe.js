let stripe;

stripe = require("stripe")(
  "sk_test_51LsM9wFk38wzPf6Ke5xzF6i8KkA9bZXP1jOJ4ThILkatBTQsQAPtZ5PYOoii3CjnLkr2NVYshsv6LZ9vIhpizD6500mMlxIs8M"
);

const CreateCustomer = async (email, name, address) => {
  const customer = await stripe.customers
    .create({
      name: name,
      email: email,
      address: {
        line1: address,
        postal_code: "",
        city: "",
        state: "",
        country: "",
      },
    })
    .catch((err) => {
      return { statusCode: err.statusCode, message: err.message };
    });
  console.log(customer,'hfs');
  return customer.id;
};

const CreatePayment = async (
  chargeAmt,
  currency,
  email,
  stripe_customer_id
) => {
  const paymentIntent = await stripe.paymentIntents
    .create({
      amount: chargeAmt * 100,
      currency: currency,
      payment_method_types: ["card"],
      // receipt_email: "testagency@yopmail.com",
      receipt_email: email,
      description: "Software development services",
      customer: stripe_customer_id,
      //automatic_payment_methods: {enabled: true},
    })
    .catch((err) => {
      return { statusCode: err.statusCode, message: err.message };
    });
  console.log(paymentIntent, "hfs");
  if (!paymentIntent.id) {
    return paymentIntent;
  } else {
    return paymentIntent.id;
  }
};

// creating customer id for insert in database
const GetCustomerID = async (body) => {
  const customer = await stripe.customers.create(body);
  return customer.id;
};

const PaymentConfirm = async (paymentId, payment_method) => {
  console.log("Stripe -- PaymentConfirm", paymentId);
  const paymentConfirm = await stripe.paymentIntents.confirm(paymentId, {
    payment_method: "pm_card_visa",
  });
  return paymentConfirm;
};

const retrievePaymentIntent = async (paymentid) => {
  console.log("Stripe -- RetrivePayment", paymentid);
  const retrivepayment = stripe.paymentIntents.retrieve(paymentid);
  return retrivepayment;
};

module.exports = {
  CreatePayment,
  PaymentConfirm,
  GetCustomerID,
  CreateCustomer,
  retrievePaymentIntent,
};
