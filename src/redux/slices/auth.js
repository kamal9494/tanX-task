import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { toast } from "sonner";
import makeApiCall from "../../api";

const cookies = new Cookies();

const initialState = {
  accessToken: cookies.get("accessToken"),
  user: cookies.get("user"),
};

const registerUser = createAsyncThunk("auth/registerUser", async (userData) => {
  try {
    const url = "http://localhost:5000/register";
    const method = "POST";
    const response = await makeApiCall(url, method, userData);
    toast.success("User registered");
    return response.data;
  } catch (error) {
    console.log("Error while registering " + error);
    toast.error(error.response.data);
  }
});

const loginUser = createAsyncThunk("auth/loginUser", async (userData) => {
  try {
    const url = "http://localhost:5000/login";
    const method = "POST";
    const response = await makeApiCall(url, method, userData);
    toast.success(`LoggedIn as ${response.data.user.name}`);
    return response.data;
  } catch (error) {
    toast.error(error.response.data);
    console.log("Error while logging in " + error);
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
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      cookies.set("accessToken", action.payload.accessToken, { path: "/" });
      cookies.set("user", action.payload.user, { path: "/" });
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      cookies.set("accessToken", action.payload.accessToken, { path: "/" });
      cookies.set("user", action.payload.user, { path: "/" });
    });
  },
});

export const { logoutSuccess } = authSlice.actions;
export { registerUser, loginUser };
export default authSlice.reducer;
