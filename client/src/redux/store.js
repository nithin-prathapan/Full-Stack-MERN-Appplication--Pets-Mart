import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import adminReducer from "./adminReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import paymentReducer from "./paymentReducer";
const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    cart: cartReducer,
    product: productReducer,
    payment: paymentReducer,
  },
});

export default store;
