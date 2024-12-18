import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [
    { id: 1, customerName: 'John Doe', product: 'iPhone 14', status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', product: 'Nike Shoes', status: 'Shipped' },
  ],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },
    updateOrderStatus(state, action) {
      const { id, status } = action.payload;
      const order = state.orders.find(order => order.id === id);
      if (order) {
        order.status = status;
      }
    },
  },
});

export const { setOrders, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
