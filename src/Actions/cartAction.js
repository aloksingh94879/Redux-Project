import { createAsyncThunk } from "@reduxjs/toolkit";

// api product to the cart

export const addtoCart=createAsyncThunk('products/addtocart',async(product)=>{
    console.log('cart product=',product);
    
  })

// earch product by name
export const searchProduct =createAsyncThunk('products/search',async(title)=>[
    console.log(`product title=`,title)
    
])

// product category
export const ProductCategories =createAsyncThunk('products/categories',async()=>[
    console.log(`categories`)
])


//  product category