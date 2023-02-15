import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const products=[
    {
        id:uuidv4(),
        name:"Logitech gaming mouse",
        price:"320",
        img:'https://images.pexels.com/photos/6236591/pexels-photo-6236591.jpeg?auto=compress&cs=tinysrgb&w=400',
        about:'Logitech G604 Lightspeed: A wireless gaming mouse that features 15 programmable buttons and the HERO 16K sensor for precise tracking.',
        quantity:1,
    },
    {
        id:uuidv4(),
        name:"Ladies hand bag",
        price:"20",
        img:'https://images.pexels.com/photos/10944900/pexels-photo-10944900.jpeg?auto=compress&cs=tinysrgb&w=400',
        about:'Tote bags: Large, spacious bags that are perfect for everyday use and can carry a variety of items, such as books, laptops, and more.',
        quantity:1,
    },
    {
        id:uuidv4(),
        name:"Mac air with M1",
        price:"1220",
        img:'https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=400',
        about:'The M1 chip offers faster and more efficient performance compared to previous generations of MacBook Airs.',
        quantity:1,

    },
    {
        id:uuidv4(),
        name:"Black corded headset ",
        price:"200",
        img:'https://images.pexels.com/photos/933245/pexels-photo-933245.jpeg?auto=compress&cs=tinysrgb&w=400',
        about:'High-quality audio: The CODE RED headset features 7.1 surround sound technology and a powerful bass, providing an immersive gaming experience.',
        quantity:1,
    },
    {
        id:uuidv4(),
        name:"Canon 80D with 4K",
        price:"1400",
        img:'https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=400',
        about:'High-video and Picture quality: The face of Canon with 80 Fps',
        quantity:1,
    },

]
const allproducts=localStorage.getItem("allitems")!==null?JSON.parse(localStorage.getItem("allitems")):products;

const ProductSlice=createSlice({
    name:'product',
    initialState:{
        products:allproducts,
    },
    reducers:{
       AddProducts(state,action){
         state.products.push(action.payload)
         localStorage.setItem("allitems",JSON.stringify(state.products.map((productitem)=>productitem)))
       },
       remove(state,action){
        state.products= state.products.filter((item)=>item.id!==action.payload)
        localStorage.setItem("allitems",JSON.stringify(state.products.map((productitem)=>productitem)))
       },
       
    }

})

export const {AddProducts,remove,update}=ProductSlice.actions
export default  ProductSlice.reducer