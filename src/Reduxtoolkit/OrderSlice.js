import { createSlice } from "@reduxjs/toolkit";

const Orders=localStorage.getItem("order")===null?[]:JSON.parse(localStorage.getItem("order"))
const OrderSlice=createSlice({
    name:'order',
    initialState:{
        order:Orders,
    },
    reducers:{
        AddtoOrdered(state,action){
            state.order.push(action.payload)
            localStorage.setItem("order",JSON.stringify(state.order.map((item)=>item)))
        },
        RemoveOrder(state,action){
            state.order=state.order.filter((item)=>item.id!==action.payload)
            localStorage.setItem("order",JSON.stringify(state.order.map((item)=>item)))
        }

    }
})

export const {AddtoOrdered,RemoveOrder}=OrderSlice.actions
export default OrderSlice.reducer