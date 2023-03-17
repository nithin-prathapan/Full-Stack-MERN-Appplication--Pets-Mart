import Order from "./../models/orderSchema.js";
export const getAllOrders = async (req, res) => {
  try {
    const response = await Order.find({});
    res.status(200).json({ success: true, orders: response });
  } catch (error) {
    res.status(404).json({ success: false, error: error });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const result = await Order.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
