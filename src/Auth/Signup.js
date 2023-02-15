import React from "react";
import { useState } from "react";

import { useNavigate,Link } from "react-router-dom";
import { UserAuth } from "./AuthContext";

const Signup = () => {
  const { signup,googlehandler } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("")
  const navigate=useNavigate();
  const handleSubmit = async(e) => {

    e.preventDefault();
    try {
      await signup(email,password)
        alert("signed successfully");
        navigate("/")
      
    } catch (err) {
      console.log(err);
      setError(err.message)

    }
  };
 
  return (
    <div className=" relative max-sm:ml-0 ml-[150px] px-[10px] py-[20px] h-[calc(100vh-40px)] bg-gray-200">
      <div className="flex justify-center items-center flex-col ">
        <p className="font-bold mb-[20px]">Sign up Here</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start bg-white justify-start border-none rounded-xl w-[400px] max-sm:w-[340px] h-[320px] gap-6 p-4"
        >
          <input
            type="text"
            name="email"
            className="border-none w-full pl-4 bg-gray-200 rounded-md outline-none h-[40px]"
            value={email}
            placeholder="write your email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="border-none w-full pl-4 outline-none rounded-lg bg-blue-200 h-[40px]"
            value={password}
            placeholder="enter your password"
            onChange={(e)=>setPassword(e.target.value)}
          />
         
          <button
            className="px-4 rounded-md py-[2px] bg-slate-400 text-white text-center"
            type="submit"
          >
            Signup
          </button>
          <div className="flex flex-col gap-6 justify-start items-start">
          <button
            className="px-4 rounded-md py-[2px] bg-black text-white text-center"
            type="submit"
            onClick={googlehandler}
          >
            Signup with Google
          </button>
          <Link to="/login"><button
            className="px-4 rounded-md py-[2px] bg-black text-white text-center"
            type="submit"
          >
            already have account ?
          </button>
          </Link>
          </div>
          <p className="text-red-600 text-[12px]">{error}</p>
        </form>
      </div>

      <div className=" absolute bottom-[40px] right-[30px] flex items-center justify-center mt-[40px]">
        <p className="font-semibold ">© 2021-2022, Productmania </p>
      </div>
    </div>
  );
};

export default Signup;
