import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import makeApiCall from "../../api";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const url = "https://fake-server-tanx.vercel.app/products";
    const method = "GET";
    const response = await makeApiCall(url, method, null);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    productsList: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsList = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
