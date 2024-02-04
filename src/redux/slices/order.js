import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import makeApiCall from "../../api";
import { toast } from "sonner";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const fetchOrders = createAsyncThunk("fetchOrders", async () => {
  const user = cookies.get("user");
  try {
    const url = `http://localhost:5000/orders?userId=${user.id}`;
    const method = "GET";
    const response = await makeApiCall(url, method, null);
    return response.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
});

export const order = createAsyncThunk("order", async (product) => {
  try {
    const url = `http://localhost:5000/orders`;
    const method = "POST";
    const response = await makeApiCall(url, method, product);
    return response.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
});

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    loading: false,
    error: null,
    ordersList: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.ordersList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(order.fulfilled, (state, action) => {
      state.ordersList.push(action.payload);
      toast.success("Order Successful!");
    });
  },
});

export const selectOrderedProducts = (state) => state.orders.ordersList;
export default ordersSlice.reducer;
