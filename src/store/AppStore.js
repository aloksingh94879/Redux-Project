import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Reducer/ProductReducer";

let MainReducer =combineReducers({
  output: ProductSlice.reducer
})

//main store(can only be written once)

const AppStore=configureStore({
  reducer: MainReducer,
  devTools:true
})

export default AppStore