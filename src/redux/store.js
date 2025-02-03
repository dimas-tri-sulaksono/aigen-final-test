import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/slice/counterSlice'; // contoh slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // tambahkan slice yang dibutuhkan
  },
});

export default store;
