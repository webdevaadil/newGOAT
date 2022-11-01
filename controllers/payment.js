const User = require("../models/User");
const Stripe = require("../payment/stripe");
let stripe;

stripe = require("stripe")(
  "sk_test_51LsM9wFk38wzPf6Ke5xzF6i8KkA9bZXP1jOJ4ThILkatBTQsQAPtZ5PYOoii3CjnLkr2NVYshsv6LZ9vIhpizD6500mMlxIs8M"
);

exports.paymentmethodattached = async (req, res) => {
    
  const { paymentMethod } = req.body;
  console.log(req.user);
  const user = await User.findById(req.body.user);
  let customer;
  try {
    if (user.customer_id) {
      customer = user.customer_id;
      console.log(customer);
    } else {
      customer = await Stripe.CreateCustomer(
        user.email,
        user.name,
        user.address
      );
      console.log(customer, "customerrer");
      //   console.log(objid);
      await User.findByIdAndUpdate(req.body.user._id, {
        customer_id: customer,
      });
      //  console.log(up);
    }
    try {
      const method = await addCard({ paymentMethod, customer });
      console.log(method);
      res.status(200).json({ message: "Payment method attached succesully" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Could not attach method" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }

  async function addCard({ customer, paymentMethod }) {
    console.log(customer);
    const paymentMethodAttach = await stripe.paymentMethods.attach(
      paymentMethod.id,
      {
        customer: customer,
      }
    );

    console.log(paymentMethodAttach);
    return paymentMethodAttach;
  }
};

exports.paymentMethodcardlist = async (req, res) => {
  // console.log(req.user.id);
  const user = await User.findById("6360a29d6f2e1557ca15eddd");
  customer = user.customer_id;
  console.log(user);
  try {
    const paymentMethods = await listCustomerPayMethods(customer);
    res.status(200).json(paymentMethods);
  } catch (err) {
    console.log(err);
    res.status(500).json("Could not get payment methods");
  }
};

exports.paymentcreate = async (req, res) => {
  /* Query database for getting the payment amount and customer id of the current logged in user */

  const amount = 1000;
  const currency = "AUD";
  let customer = req.user.customer_id;
  // console.log(req.user);
  try {
    charged = await Stripe.CreatePayment(
      amount,
      currency,
      req.user.email,
      customer,
      req.body.paymentMethod
    );

    /* Add the payment intent record to your datbase if required */
  } catch (err) {
    console.log(err);
    res.status(500).json("Could not create payment");
  }
  try {
    const paymentConfirm = await Stripe.PaymentConfirm(charged);
    console.log(paymentConfirm.id, "sdsd");
    res.status(200).send(paymentConfirm);
  } catch (err) {
    return res.status(500).send(err);
  }
};
async function listCustomerPayMethods(customerId) {
  return new Promise(async (resolve, reject) => {
    try {
      const paymentMethods = await stripe.customers.listPaymentMethods(
        customerId,
        {
          type: "card",
        }
      );
      resolve(paymentMethods);
    } catch (err) {
      reject(err);
    }
  });
}

