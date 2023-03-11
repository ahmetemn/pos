import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({

  name: "card",
  initialState: {
    cardItems: [],
    total: 0,
    //vergilendirme 
    tax2: 18,
  },
  reducers: {
    addProduct: (state, action) => {
      const findCardItem = state.cardItems.find((item) => item._id === action.payload._id)
      if (findCardItem) {
        findCardItem.quantity = findCardItem.quantity + 1
      }
      else {
        state.cardItems.push(action.payload);
      }
      state.total += action.payload.price;

    },
    deleteProduct: (state, action) => {

      ///  const findCardItem = state.cardItems.find((item)=>item._id ===action.payload._id)
      state.cardItems = state.cardItems.filter((item) => item._id !== action.payload._id);


      state.total -= action.payload.price * action.payload.quantity;
    },

    increase: (state, action) => {

      const cardItem = state.cardItems.find((item) => item._id === action.payload._id)
      cardItem.quantity += 1
      state.total += cardItem.price
    },
    decrease: (state, action) => {

      const cardItem = state.cardItems.find((item) => item._id === action.payload._id)
      cardItem.quantity -= 1
      state.total -= cardItem.price
      if (cardItem.quantity === 0) {
        state.cardItems = state.cardItems.filter((item) => item._id !== action.payload._id)
      }
    }, 
     reset: (state , action) => {
        state.cardItems = [];
        state.total= 0 ; 
     }

  }
})
export const { addProduct, deleteProduct, increase, decrease ,  reset  } = cardSlice.actions

export default cardSlice.reducer;