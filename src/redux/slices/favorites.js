import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import makeApiCall from "../../api";
import { toast } from "sonner";

export const fetchFavProducts = createAsyncThunk(
  "fetchFavProducts",
  async (userId) => {
    try {
      const url = `https://fake-server-tanx.vercel.app/favourites?userId=${userId}`;
      const method = "GET";
      const response = await makeApiCall(url, method, null);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }
);

export const addToFavs = createAsyncThunk("addToFavs", async (product) => {
  try {
    const url = `https://fake-server-tanx.vercel.app/favourites`;
    const method = "POST";
    const response = await makeApiCall(url, method, product);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
});

export const removeFav = createAsyncThunk("removeFav", async (id) => {
  try {
    const url = `https://fake-server-tanx.vercel.app/favourites/${id}`;
    const method = "DELETE";
    await makeApiCall(url, method, null);
    return id;
  } catch (error) {
    console.log("Error", error);
  }
});

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    loading: false,
    error: null,
    favouritesList: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFavProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.favouritesList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchFavProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addToFavs.fulfilled, (state, action) => {
      state.favouritesList.push(action.payload.data);
      toast.success("Item added to Favorites");
    });
    builder.addCase(removeFav.fulfilled, (state, action) => {
      state.favouritesList = state.favouritesList.filter(
        (item) => item.id !== action.payload
      );
      toast.success("Item removed from Favorites");
    });
  },
});

export const selectFavoriteProducts = (state) =>
  state.favourites.favouritesList;

export default favouritesSlice.reducer;
