import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },

  reducers: {
    addItems: (state, actions) => {
      state.items.push(actions.payload);
      state.totalAmount = state.items.reduce((currTotal, item) => {
        currTotal = currTotal + item.price / 100;
        return currTotal;
      }, 0);
    },

    crearCart: (state) => {
      state.items = [];
      state.totalAmount = state.items.reduce((currTotal, item) => {
        currTotal = currTotal + item.price / 100;
        return currTotal;
      }, 0);
    },
    deleteItems: (state, actions) => {
      state.items = state.items.filter((item) => item.id !== actions.payload);
      state.totalAmount = state.items.reduce((currTotal, item) => {
        currTotal = currTotal + item.price / 100;
        return currTotal;
      }, 0);
    },
    increasePrice: (state, actions) => {
      state.totalAmount = state.totalAmount + actions.payload/100;
    },
    decreasePrice: (state, actions) => {
      state.totalAmount = state.totalAmount - actions.payload/100;
    },
  },
});

export const {
  addItems,
  crearCart,
  deleteItems,
  increasePrice,
  decreasePrice,
} = cartSlice.actions;
export default cartSlice.reducer;
