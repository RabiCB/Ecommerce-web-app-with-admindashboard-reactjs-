import React, { useState,useEffect } from "react";
import { AddProducts, remove } from "../Reduxtoolkit/CreateSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import "../App.css";

const Admin = ({ search}) => {
  const List = useSelector((state) => state.product.products);
  useEffect(()=>{
    localStorage.setItem("List",JSON.stringify(List))
  },[List])
  const [items, setItems] = useState({
    id: uuidV4(),
    name: "",
    price: "",
    img: "",
    about: "",
    quantity:'',
  });
  const [error,setError]=useState("")
  const hanldleAdd = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };
 
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if(!items.about||!items.name||!items.price||!items.about||!items.quantity){
      setError("please fill all input")
    }
    else{
      dispatch(AddProducts(items))
      setError("product added sucessfully")
    

    }
   
    

   

  };
  const dispatch = useDispatch();

  return (
    <div className="max-sm:ml-0 max-sm:pl-[10px] relative border-none  max-lg:h-auto ml-[150px] max-lg  max-lg: max-lg:grid-cols-1 max-lg-grid-flow-col max-lg:place-content-center max-lg:px-[20px]  px-[10px] py-[20px] h-auto grid grid-cols-2 gap-4 overflow-hidden ">
      <div className="border-2  bg-gray-200 rounded-lg overflow-y-scroll scrollbar-hide h-[500px]">
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
            <div key={item.id} className=" flex items-center justify-center flex-nowrap width-full flex-col ">
              <div className=" relative flex items-center  h-[60px] w-full justify-start  px-4 gap-4">
                <img
                  className="h-[30px] w-[30px] rounded-screen object-contain"
                  src={item.img}
                  alt="pic"
                />
                {item.name.length>=18?<h6 className="font-bold text-[12px]">{item.name.substring(0,16)}...</h6>:<h6 className="font-bold text-[12px]">{item.name}</h6>}
                <span>${item.price}</span>
                <p className="text-[8px] max-sm:hidden">{item.about.substring(0,22)}...</p>
                <button
                  onClick={() => dispatch(remove(item.id))}
                  className="absolute right-2 bg-slate-400 px-2 py-[-2px] rounded-md text-white text-center"
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-lg:flex max-lg:items-center max-lg:justify-center">
      <form
        className=" flex flex-col pr-10 border-2 gap-4 border-gray-200 items-center p-4 h-[380px] max-md:w-[340px]   rounded-lg w-[300px] bg-white  "
        onSubmit={hanldeSubmit}
      >
        <input
          type="text"
          className="border-none bg-gray-200  px-4 text-[16px]  h-[40px] rounded-lg outline-none w-full "
          value={items.name}
          name="name"
          placeholder="name of product"
          onChange={hanldleAdd}
        />
        <input
          type="text"
          className="border-none bg-gray-200 outline-none px-4  text-[16px]   rounded-lg h-[40px]  w-full "
          value={items.price}
          placeholder="price of product"
          name="price"
          onChange={hanldleAdd}
        />
        <input
          type="text"
          className="border-none outline-none px-4  text-[16px]  rounded-lg h-[40px] bg-gray-200  w-full "
          placeholder="paste image url"
          value={items.img}
          name="img"
          onChange={hanldleAdd}
        />
        <input
          type="text"
          className="border-none bg-gray-200 outline-none px-4  text-[16px]   rounded-lg h-[40px]  w-full"
          placeholder="write about product"
          value={items.about}
          name="about"
          onChange={hanldleAdd}
        />
        <input
          type="number"
          className="border-none bg-gray-200 outline-none px-4  text-[16px]   rounded-lg h-[40px]  w-full"
          placeholder="number of quantity"
          value={items.quantity}
          name="quantity"
          onChange={hanldleAdd}
        />
        <button
          type="submit"
          className="bg-slate-400 px-8 rounded-md py-[4px] text-white text-center"
          onClick={hanldeSubmit}
        >
          Add
        </button>
        <div className="text-[12px] text-green-600">{error}</div>
      </form>
    
      </div>
      
      <div className=' absolute bottom-[15px] right-[30px] flex items-center justify-center'>
        <p className="font-semibold max-sm:hidden ">© 2021-2022, Productmania </p>
        </div>

    </div>
  );
};

export default Admin;
