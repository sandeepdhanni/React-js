import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export default store;
