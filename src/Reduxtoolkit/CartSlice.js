import { createSlice } from "@reduxjs/toolkit";
const cartproduct=localStorage.getItem("cart")===null?[]:JSON.parse(localStorage.getItem("cart"))
const cartAmount=localStorage.getItem("totalamount")===null?0:JSON.parse(localStorage.getItem("totalamount"))
const CartSlice=createSlice({

    name:'cart',
    initialState:{
        cartItem:cartproduct,
        CartAmount:cartAmount,
        CartQuantity:0,  
    },
    reducers:{
        Removeallcart(state){
            state.cartItem=[]
        },
        AddtoCart(state,action){
            state.cartItem.push(action.payload)
            localStorage.setItem("cart",JSON.stringify(state.cartItem.map((item)=>item)))
           

        },
        removecart(state,action){
            const itemid=action.payload
            state.cartItem=state.cartItem.filter((item)=>item.id!==itemid);
            localStorage.setItem("cart",JSON.stringify(state.cartItem.map((item)=>item)))



        },
        getTotalprice(state){
            let{CartAmount,CartQuantity}=state.cartItem.reduce(
                (CartTotal,CartItem)=>{
                    const {price,quantity}=CartItem
                    const itemTotal=price*quantity
                    CartTotal.CartAmount+= itemTotal;
                    CartTotal.CartQuantity +=quantity;
                    return CartTotal;


            },{
                CartAmount: 0,
                CartQuantity: 0,
            }
            )
            state.CartAmount = parseInt(CartAmount.toFixed(2));
            state.CartQuantity = CartQuantity;
            localStorage.setItem("totalamount",JSON.stringify(state.CartAmount))
        }
        

        
      
    }
    
}

)

export const {AddtoCart,removecart,Removeallcart,getTotalprice}=CartSlice.actions
export default CartSlice.reducer