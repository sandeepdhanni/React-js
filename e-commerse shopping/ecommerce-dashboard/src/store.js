import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlice';
import orderReducer from './features/orders/orderSlice';
import userReducer from './features/users/userSlice';
import themeReducer from './features/theme/themeSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    orders: orderReducer,
    users: userReducer,
    theme: themeReducer, 
  },
});

export default store;
