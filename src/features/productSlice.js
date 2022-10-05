import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productSelected: {},
  },
  reducers: {
    setProductDetails: (state, action) => {
      state.productSelected = action.payload;
    },
   
  },
});

export const { setProductDetails } = productSlice.actions;

export const  selectProduct = state => state.product.productSelected;

export default productSlice.reducer;