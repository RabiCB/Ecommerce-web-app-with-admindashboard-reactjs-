
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiFillDelete} from "react-icons/ai"
import { RemoveOrder } from '../Reduxtoolkit/OrderSlice'
import { UserAuth } from '../Auth/AuthContext'
import { Link } from 'react-router-dom'

const OrderList = () => {
    const Order=useSelector((state)=>state.order.order)
    const {order}=useSelector((state)=>state.order)
    const dispatch=useDispatch()
    const {currentUser}=UserAuth()
  return (
    <div className='max-sm:ml-0 ml-[150px] px-[10px] py-[20px] max-md:flex max-md:items-center max-md:justify-center'
    >
       {order.length===0?<div className='flex item-center justify-center'>{currentUser?<p className='font-bold'>Your order list is empty </p>:<p className='font-bold'>Please login <Link to="/login" style={{color:'blue'}}>Click here</Link></p>}</div>: <div className='flex flex-col items-start rounded-lg  justify-start w-[600px] max-md:w-[640px] h-[500px] overflow-y-scroll bg-gray-200 max-sm:w-[420px]'>
        {
            Order.map((item)=>{
                return<div className="flex items-center relative flex-nowrap  justify-start p-6  gap-12 w-full">
                    <img className='h-[50px] w-[50px] object-contain' src={item.img} alt="product"/>
                    <p className='text-[14px] font-bold'>{item.name}</p>
                    <span>${item.price}</span>
                    <p className='text-[12px] max-md:hidden'>{item.about.substring(0,20)}...</p>
                    <AiFillDelete fontSize="24px" onClick={()=>dispatch(RemoveOrder(item.id))} className='absolute right-4 cursor-pointer '/>
                    </div>
            })
        }
        </div>}
    </div>
  )
}

export default OrderList