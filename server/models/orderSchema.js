import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    orderAmount: {
      type: Number,
      required: true,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
      required: true,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    transactionId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Order = new mongoose.model("Order", orderSchema);

export default Order;
