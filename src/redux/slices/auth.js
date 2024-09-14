import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import makeApiCall from "../../api";

const cookies = new Cookies();

const initialState = {
  accessToken: cookies.get("accessToken"),
  user: cookies.get("user"),
  loginLoading: false,
  registerLoading: false,
};

const registerUser = createAsyncThunk("auth/registerUser", async (userData) => {
  try {
    const url = "https://fake-server-tanx.vercel.app/register";
    const method = "POST";
    const response = await makeApiCall(url, method, userData);
    return response.data;
  } catch (error) {
    console.log("Error while registering " + error);
    throw error;
  }
});

const loginUser = createAsyncThunk("auth/loginUser", async (userData) => {
  try {
    const url = "https://fake-server-tanx.vercel.app/login";
    const method = "POST";
    const response = await makeApiCall(url, method, userData);
    return response.data;
  } catch (error) {
    console.log("Error while logging in " + error);
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutSuccess(state) {
      state.accessToken = null;
      state.user = null;
      cookies.remove("accessToken");
      cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.registerLoading = false;
      state.accessToken = null;
      state.user = null;
      cookies.remove("accessToken");
      cookies.remove("user");
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      cookies.set("accessToken", action.payload.accessToken, { path: "/" });
      cookies.set("user", action.payload.user, { path: "/" });
    });
    builder.addCase(registerUser.pending, (state) => {
      state.registerLoading = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.registerLoading = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginLoading = false;
      state.accessToken = null;
      state.user = null;
      cookies.remove("accessToken");
      cookies.remove("user");
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      cookies.set("accessToken", action.payload.accessToken, { path: "/" });
      cookies.set("user", action.payload.user, { path: "/" });
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loginLoading = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loginLoading = false;
    });
  },
});

export const { logoutSuccess } = authSlice.actions;
export { registerUser, loginUser };
export default authSlice.reducer;
