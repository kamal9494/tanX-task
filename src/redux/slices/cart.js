import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
      toast.success("Item added to cart!");
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      toast.success("Item removed!");
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex !== -1){
        const updatedItems = [...state.cartItems];
        const updatedQuantity = updatedItems[itemIndex].quantity - 1;

        if(updatedQuantity <= 0){
          updatedItems.splice(itemIndex, 1);
        }else{
          updatedItems[itemIndex].quantity = updatedQuantity;
        }
        state.cartItems = updatedItems;
      }
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    }
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
