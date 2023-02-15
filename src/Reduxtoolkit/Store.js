import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./CreateSlice"
import CartReducer from "./CartSlice"
import OrderReducer from "./OrderSlice"
export const store=configureStore({
   reducer:{
    product:ProductReducer,
    cart:CartReducer,
    order:OrderReducer,
}
})
