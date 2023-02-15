import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { UserAuth } from '../Auth/AuthContext'



const Order = () => {
    const List=useSelector((state)=>state.product.products)
    const {id}=useParams()
    const [item,setItem]=useState("")
    const product=List.find((item)=>item.id===id)
    const {price}=product
    const [priceofall,setPrice]=useState(price)
    const {currentUser}=UserAuth()
   
    useEffect(()=>{
        setPrice(price * item)
     },[item])
  return (
    <div className='max-sm:ml-0 ml-[150px] px-[10px] py-[20px]'>
        <form  action="https://getform.io/f/7df6078c-6c49-4520-92ed-3b7e5187c74b" method="POST" className="flex flex-col border-2 border-black items-start bg-white justify-start border-none rounded-xl w-[400px] max-sm:w-[360px] h-[300px] gap-6 p-4">
                <div className='font-bold'>price of per piece {product.price}</div>
                <input type="text" readOnly name="product-name" className='border-none w-full pl-4 outline-none rounded-lg bg-blue-200 h-[40px]' value={product.name}  placeholder="enter your email" />
                <input type="number"  className='border-none w-full pl-4 outline-none rounded-lg bg-blue-200 h-[40px]'  onChange={(e)=>setItem(e.target.value)} placeholder="enter the number of pieces" />
                <input  className='border-none w-full pl-4 outline-none rounded-lg bg-blue-200 h-[40px]' name="total price" value={priceofall}></input>
                <input  className='border-none hidden w-full pl-4 outline-none rounded-lg bg-blue-200 h-[40px]' name="username" value={currentUser.displayName===null?currentUser.email:currentUser.displayName}></input>
                <input  className='border-none hidden w-full pl-4 outline-none rounded-lg bg-blue-200 h-[40px]' name="email" value={currentUser.email}></input>
                <button className="px-4 rounded-md py-[2px] bg-slate-400 text-white text-center"  type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Order