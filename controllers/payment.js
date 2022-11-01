const User = require("../models/User");
const Stripe = require("../payment/stripe");
const { addCard } = require("./auth");

exports.paymentmethodattach = async (req, res) => {
  const { paymentMethod } = req.body;
  const user = await User.findById(req.body.user);
  let customer;
  try {
    if (user.customer_id) {
      customer = user.customer_id;
      // console.log(customer);
    } else {
      customer = await Stripe.CreateCustomer(
        user.email,
        user.name,
        user.address
      );
      console.log(customer);
      console.log(objid);
      await User.findByIdAndUpdate(req.body.user, { customer_id: customer });
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
    return res.status(500).send(err);
  }
};

exports.addCard = async (req, res) => {
  try {
   
    const { paymentMethod } = req.body;

    const user = await User.findById(req.body.userId);

    const paymentIntent = await Stripe.addCard(
      user.customer_id,paymentMethod
    );
    console.log(paymentIntent);
    // check payment status rozarpay end
    if (paymentIntent) {
      return res.status(200).send("Added");
    } else {
      return res.status(400).send("error");
    }
  } catch (error) {
    return res.status(500).send("error");
  }
};
