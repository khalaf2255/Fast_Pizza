import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
  // cart: [
  //   { pizzaId: 12, name: 'ffff', quantity: 2, unitPrice: 16, totalPrice: 32 },
  // ],
};
const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // PAYLOAD = NEWITEM
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // PAYLOAD = PIZZAID
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // PAYLOAD = PIZZAID
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // PAYLOAD = PIZZAID
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartReducer.actions;
export default cartReducer.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);

export const getCart = (state) => state.cart.cart