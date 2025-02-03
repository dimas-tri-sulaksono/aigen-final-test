import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1, // Default jumlah item 1
  pricePerItem: 0, // Harga satuan dari props
  totalPrice: 0, // Total harga awal
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPricePerItem: (state, action) => {
      state.pricePerItem = action.payload;
      state.totalPrice = state.value * state.pricePerItem; // Hitung total awal
    },
    increment: (state) => {
      state.value += 1;
      state.totalPrice = state.value * state.pricePerItem;
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1;
        state.totalPrice = state.value * state.pricePerItem;
      }
    },
    reset: (state) => {
      state.value = 1;
      state.totalPrice = state.pricePerItem;
    },
  },
});

export const { increment, decrement, reset, setPricePerItem } = counterSlice.actions;
export default counterSlice.reducer;
