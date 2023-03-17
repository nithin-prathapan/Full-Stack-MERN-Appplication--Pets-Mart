import { v4 as uuidv4 } from "uuid";
import Stripe from "stripe";
import Order from "../models/orderSchema.js";

const stripe = new Stripe(process.env.STRIPE_KEY, {
  apiVersion: "2022-11-15",
});
export const processPayment = async (req, res) => {
  const { subtotal, token, user, items } = req.body;
  const currentUser = user;
  const cartItems = items;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.paymentIntents.create(
      {
        amount: subtotal * 100,
        currency: "INR",
        customer: customer.id,
        receipt_email: customer.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: parseInt(subtotal),
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: token.id,
      });
      newOrder.save();
      res.send("Payment Done");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "Something went wrong" + error });
  }
};
