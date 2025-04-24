import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productFormReducer from '../entities/productForm/productFormSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productForm: productFormReducer,
    products: productsReducer,
  },
});
