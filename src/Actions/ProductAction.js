import { createAsyncThunk } from "@reduxjs/toolkit"
import { addProduct, deleteProduct, ProductByCategory, readCategories, readProducts, searchProductByTitle, updateProduct  } from "../Api/ProductApi"


// to read all products

export const fetchProducts = createAsyncThunk("products/fetchProducts",

  async () => {
    let out = await readProducts()
    console.log(`api response=`, out)
    return out.data.products
  }

)

//srarch product by nsme
export const searchProduct = createAsyncThunk("products/search", async (title) => {
  console.log(`product title = `, title)
  let out=await searchProductByTitle(title)
  return out.data
})


//all products
export const productCategories = createAsyncThunk("products/categories", async (title) => {
  console.log(`categories`)
  let out=await readCategories()
  return out.data
})

//product by categoryu
export const searchByCategory = createAsyncThunk("product/search/category",async(category)=>{
 console.log(`search buy category`,category)
 let out=await ProductByCategory(category)
 return out.data
}
)

//add product
export const addNewProduct = createAsyncThunk("product/add",
  async (product) => {
    console.log(`add new product= `, product)
    let res=await addProduct(product)
    return res.data
  }
)
//update product
export const editProduct = createAsyncThunk("product/update",
  async ({ id, product }) => {
    console.log(`update id= `, id)
    console.log(`update product= `, product)
    let res=await updateProduct({id,product})
    return res.data
  }
)

//reamove product
export const removeProduct = createAsyncThunk("product/delete",
  async (id) => {
    console.log(`update id= `, id)
   await deleteProduct(id)
   return id
  }
)