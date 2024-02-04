import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
import cartReducer from "./slices/cart";
import authReducer from "./slices/auth";
import favReducer from "./slices/favorites";
import ordersReducer from "./slices/order";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    favourites: favReducer,
    orders: ordersReducer,
  },
  devTools: true,
});
