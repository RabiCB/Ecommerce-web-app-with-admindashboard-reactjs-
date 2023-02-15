import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  removecart,
  getTotalprice,
  Removeallcart,
} from "../Reduxtoolkit/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { AddtoOrdered } from "../Reduxtoolkit/OrderSlice";
import { UserAuth } from "../Auth/AuthContext";
const Cart = ({setSearch,search}) => {
  const List = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  const {currentUser}=UserAuth()
  
  const { CartAmount,cartItem } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotalprice());
    
  }, [List]);

  return (
    <div className="relative ml-[150px] max-md:h-auto  max-sm:ml-0 max-md:px-[10px] px-[10px] py-[50px]  h-auto">
      {cartItem.length>=1 &&(<button
        className="fixed px-4 rounded-md py-[4px] hover:bg-black hover:text-white bg-red-600 hover:transition-all 5000 ease-in-out text-white text-center right-[30px] bottom-[20px]"
        onClick={() => dispatch(Removeallcart())}
      >
        Remove Carts
      </button>)}

      <div className="absolute top-[20px] font-bold right-[10px]">
        TotalCartAmount: ${CartAmount}
      </div>

      <div className="grid max-xl:grid-cols-4 max-lg:grid-cols-3 h-auto max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:px-[20px] grid-cols-5 gap-6">
        {List.length === 0 ? (
          <div className=" flex justify-start mt-[10px] items-start  font-bold">
            {currentUser?<p> Your cart is empty </p>:<p>please Login and add to cart <Link to="/login" style={{color:"blue"}}>Click here</Link></p>}
          
          </div>
        ) : (
          
          List.filter((item)=>{
            if(search===""){
              return item
            }
            else if(item.name.toLowerCase().includes(search.toLowerCase())){
              return item
            }
            else if(item.price.toLowerCase().includes(search.toLowerCase())){
              return item
            }

          }).map((item) => {
            return (
              <div className="border-2 rounded-md" key={item.id}>
                <div className="flex flex-col items-start justify-start h-full p-2 gap-2 bg-white">
                  <img
                    className="w-full rounded-md object-contain"
                    src={item.img}
                    alt="product"
                  />
                  <h6 className="font-bold text-[14px]">{item.name}</h6>
                  <p>${item.price}</p>
                  <div className="flex justify-center items-center gap-4">
                   <Link to={`/order/${item.id}`} ><button onClick={()=>dispatch(AddtoOrdered(item))} className="px-2 rounded-md py-[2px] bg-slate-400 text-white text-center">
                      order
                    </button>
                    </Link>

                    <button
                      onClick={() => dispatch(removecart(item.id))}
                      className="px-2 rounded-md py-[2px] bg-slate-400 text-white text-center"
                    >
                      Removeitem
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
