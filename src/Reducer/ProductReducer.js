// import { combineReducers } from "@reduxjs/toolkit"
import { fetchProducts ,searchByCategory,searchProduct,addNewProduct,removeProduct,editProduct, productCategories} from "../Actions/ProductAction";
import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
  name: "product",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(`product slice`,action)
          return [...action.payload]
      })
      .addCase(searchProduct.fulfilled, (state,action) => {
        console.log(`search by category reducer`)
      })
      .addCase(searchByCategory.fulfilled, (state,action) => {
        console.log(`search product reducer`)
      })
      .addCase(addNewProduct.fulfilled, (state,action) => {
        console.log(`add new product reducer`)
      })
    .addCase(removeProduct.fulfilled, (state,action) => {
        console.log(`remove  product reducer`)
      })
    .addCase(editProduct.fulfilled, (state,action) => {
        console.log(`update product reducer`)
      })
      .addCase(productCategories.fulfilled, (state,action) => {
          return [...action.payload]
      })
  },
});

export default ProductSlice;