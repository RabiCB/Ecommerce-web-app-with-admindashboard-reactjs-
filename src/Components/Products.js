import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AddtoCart } from "../Reduxtoolkit/CartSlice";
import { AddtoOrdered } from "../Reduxtoolkit/OrderSlice";
import { UserAuth } from "../Auth/AuthContext";
const Products = ({ search, setSearch }) => {
  const List = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const {currentUser}=UserAuth();
 const navigate=useNavigate()
  const handleClickOrder=(item)=>{
    if(currentUser){
      navigate(`/order/${item.id}`)
      dispatch(AddtoOrdered(item))
    }
   else{
    navigate("/login")
    alert("please login");

   }


  }
  const handleClickCart=(item)=>{
    if(currentUser){
     
      dispatch(AddtoCart(item))
    }
   else{
    navigate("/login")
    alert("please login");

   }


  }
  
  return (
    <div className="product-div max-sm:ml-0 ml-[150px] px-[10px] py-[20px] h-auto grid max-xl:grid-cols-3 max-lg:grid-cols-2  max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:place-content-center max-sm:place-items-center grid-cols-4 gap-10  ">
      
        {List.filter((item) => {
          if (search === "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          } else if (item.price.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        }).map((item) => {
          return (
              <div key={item.id} className="product flex border-2 rounded-lg  flex-col items-start justify-start h-full p-2 gap-2 bg-white">
                <Link to={`/product/${item.id}`}>
                  <img
                    className="w-full rounded-md object-contain"
                    src={item.img}
                    alt="product"
                  />
                  <h6 className="font-bold text-[14px]">{item.name}</h6>
                  <p>${item.price}</p>
                </Link>
                <div className="flex justify-center items-center gap-6">
                  <button onClick={()=>handleClickOrder(item)} className="px-4 rounded-md py-[2px] max-sm:text-[12px]  bg-slate-400 text-white text-center">
                    order
                  </button>
                 
                  <button
                    onClick={()=>handleClickCart(item) }
                    className="px-2 max-sm:text-[12px] rounded-md py-[2px] bg-slate-400 text-white text-center"
                  >
                    Addtocart
                  </button>
                </div>
              </div>
          
          );
        })}
     
    </div>
  );
};

export default Products;
