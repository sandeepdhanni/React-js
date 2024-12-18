import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
      { id: 1, name: 'iPhone 14', price: 999, type: 'Electronics' },
      { id: 2, name: 'Nike Shoes', price: 150, type: 'Footwear' },
      { id: 3, name: 'Levi’s Jeans', price: 60, type: 'Clothing' },
    ],
  };

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { setProducts, addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
