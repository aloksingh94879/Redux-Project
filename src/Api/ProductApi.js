import axios from "axios";

const axiosIns=axios.create({
    baseURL:"https://dummyjson.com",
    headers:{
        "content-type":"application/json"
    }
})

// read all products

export const readProducts=async()=>{
    return await axiosIns.request({
        method:"GET",
        url:"/products"
    })
}


export const readCategories=async()=>{
    return await axiosIns.request({
        method:"GET",
        url:"/products/categories"
    })
}

// search product by category
export const ProductByCategory=async(category)=>{
    return await axiosIns.request({
        method:"GET",
        url:`/products/category${category}`
    })
}
// search product by title
export const searchProductByTitle=async(title)=>{
    return await axiosIns.request({
        method:"GET",
        url:`/products/search?q=${title}`
    })
}

// add product
export const addProduct=async(product)=>{
    return await axiosIns.request({
        method:"POST",
        url:`/products/add`,
        data:product
    })
}

// update product
export const updateProduct=async({id,product})=>{
    return await axiosIns.request({
        method:"PATCH",
        url:`/products/${id}`,
        data:product
    })
}

// delete product  
export const deleteProduct=async(id)=>{
    return await axiosIns.request({
        method:"DELETE",
        url:`/products/${id}`
    })
}