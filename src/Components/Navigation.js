import React, { useEffect } from "react";
import "../App.css";
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { GrProductHunt } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { UserAuth } from "../Auth/AuthContext";

const Navigationbar = ({ setSearch, search }) => {
  const product = useSelector((state) => state.cart.cartItem);
  const [menu, setMenu] = useState(false);
  const { currentUser, logout } = UserAuth();
  useEffect(() => {
    console.log(currentUser);
  }, []);
  const navigate = useNavigate();
  const hanldelogout = async () => {
    await logout();
    navigate("/login");
    setMenu(false);
  };
  const handleAdmin = () => {
    if (currentUser) {
      navigate("/admindashboard");
    } else {
      navigate("/login");
      alert("please login");
    }
  };

  return (
    <>
      <div className="  bg-black max-sm:ml-0 max-sm:px-4 text-white sticky top-0 left-0 right-0 z-10 h-10 flex items-center px-10 justify-between ml-0 ">
        <div className="flex items-center justify-center gap-2">
          {menu ? (
            <motion.div
              animate={{ rotate: [0, 0, 360, 360, 0] }}
              transition={{
                duration: 3,
              }}
            >
              <RxCross2
                fontSize="20px"
                onClick={() => setMenu(false)}
                className="hidden max-sm:block cursor-pointer  overflow-hidden"
              />
            </motion.div>
          ) : (
            <HiMenuAlt4
              onClick={() => setMenu(!menu)}
              fontSize="20px"
              className="hidden max-sm:block cursor-pointer"
            />
          )}
          <Link to="/">
            <div className="font-bold text-md max-sm:text-md gap-4 cursor-pointer">
              Lancememania
            </div>
          </Link>
        </div>
        <div className="flex relative items-center justify-center w-[180px] gap-2 ">
          <input
            type="text"
            className="text-black w-[160px] text-[16px]  pl-4 outline-none rounded-sm "
            value={search}
            placeholder="Search here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length >= 1 ? (
            <RxCross2
              fontSize="20px"
              onClick={() => setSearch("")}
              className="absolute right-2 cursor-pointer text-black overflow-hidden"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={menu ? "menu-small-display " : "menu"}>
        <ul className="flex flex-col relative items-start justify-start text-white gap-[12px] text-[16px]">
          <RxCross2
            color="white"
            className=" border-2 rounded-md border-white absolute right-0 cursor-pointer text-black hidden max-sm:block overflow-hidden"
            onClick={() => setMenu(false)}
          />
          <Link to="/">
            <div
              onClick={() => setMenu(false)}
              className="hover:bg-blue-600 cursor-pointer transition-all 500 ease-in-out items-center justify-center gap-2 flex  rounded-md p-2 hover:text-white w-full"
            >
              <li>Products</li>
              <motion.div
                animate={{ rotate: [0, 360, 360, 0] }}
                transition={{ duration: 2 }}
              >
                <GrProductHunt />
              </motion.div>
            </div>
          </Link>

          <div
            onClick={handleAdmin}
            className="hover:bg-blue-600 cursor-pointer rounded-md p-2 hover:text-white w-full"
          >
            <li>AdminDashboard</li>
          </div>
          <Link to="/cart">
            <div
              onClick={() => setMenu(false)}
              className="hover:bg-blue-600 cursor-pointer relative rounded-md items-center justify-center gap-2 flex p-2 hover:text-white w-full "
            >
              <li>cart</li>
              <AiOutlineShoppingCart />
              <span className="absolute top-0 right-[-2px]">
                {product===null? "0" : product.length}
              </span>
            </div>
          </Link>
          <Link to="/about">
            <div
              onClick={() => setMenu(false)}
              className="hover:bg-blue-600 cursor-pointer rounded-md p-2 hover:text-white w-full"
            >
              <li>Send feedback</li>
            </div>
          </Link>
          <Link to="/yourorderlist">
            <div
              onClick={() => setMenu(false)}
              className="hover:bg-blue-600 cursor-pointer rounded-md p-2 hover:text-white w-full"
            >
              <li>OrderList</li>
            </div>
          </Link>

          {currentUser?"":<Link to="/signup">
            <div
              onClick={() => setMenu(false)}
              className="hover:bg-blue-600 cursor-pointer rounded-md p-2 hover:text-white w-full"
            >
              <li>Signup</li>
            </div>
          </Link>}
          {currentUser ? (
            <div
              onClick={hanldelogout}
              className="hover:bg-blue-600 cursor-pointer rounded-md p-2 hover:text-white w-full"
            >
              <li>logout </li>
            </div>
          ) : (
            <Link to="/login">
              <div
                onClick={() => setMenu(false)}
                className="hover:bg-blue-600 cursor-pointer rounded-md p-2 hover:text-white w-full"
              >
                <li>Login</li>
              </div>
            </Link>
          )}

          {currentUser?<Link to="/userprofile"><div className="p-2">
            <img className="rounded-full object-cover w-[40px] h-[40px] " src={currentUser.photoURL===null?"https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400":currentUser.photoURL} alt="profilepic"/>
            </div></Link>:""}
        </ul>
        <div className="absolute bottom-[16px] text-[14px] cursor-pointer text-white font-bold">
          © 2021-2022, Productmania
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
