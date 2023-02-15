import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Auth/AuthContext";
import { AddtoCart } from "../Reduxtoolkit/CartSlice";
const Singleproduct = () => {
  const item = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = item.find((singleitem) => singleitem.id === id);
  const [readmore, setreadmore] = useState(false);
  const navigate=useNavigate()
  const { currentUser } = UserAuth();

  const handleClickCart = (item) => {
    if (currentUser) {
      dispatch(AddtoCart(item));
    } else {
      navigate("/login");
      alert("please login");
    }
  };
  return (
    <div className="bg-slate-100 max-sm:ml-0 h-[calc(100vh-40px)] ml-[145px] p-[10px] flex  justify-center">
      <div className="flex items-start justify-start p-4 flex-col gap-2 h-[470px] w-[400px] max-sm:w-[340px] max-sm:h-[430px] border-2 mt-[20px] bg-white rounded-md">
        <img
          className="w-full object-contain rounded-md"
          src={product.img}
          alt="product"
        />
        <h6 className="font-bold text-[18px]">{product.name}</h6>
        <p>${product.price}</p>
        <div>
          {readmore ? (
            <p className="text-[12px]">{product.about}</p>
          ) : (
            <p className="text-[12px]">
              {product.about.length < 60
                ? `${product.about}`
                : `${product.about.substring(0, 60)}...`}
            </p>
          )}
          {product.about.length >= 60 ? (
            <span
              className="text-[12px] cursor-pointer text-slate-400"
              onClick={() => setreadmore(!readmore)}
            >
              {readmore ? "read less" : "read more"}
            </span>
          ) : (
            ""
          )}
        </div>
        <button
          onClick={() => handleClickCart(product)}
          className="px-4 py-[2px] rounded-md bg-slate-400 text-white text-center"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Singleproduct;
