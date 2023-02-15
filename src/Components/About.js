import React from 'react'
import { useState } from 'react'

const About = () => {
    const [input,setInput]=useState({
        feedback:'',
        email:'',

    })
    const handleChange=(e)=>{
        e.preventDefault()
        setInput({...input,[e.target.name]:e.target.value})
    }
   
  return (
    <div className=" relative max-sm:ml-0 ml-[150px] px-[10px] py-[20px] h-[calc(100vh-40px)] bg-gray-200">
        <div className='flex justify-center items-center flex-col '>
            <p className='font-bold mb-[20px]'>want to send us a feedback</p>
            <form  action="https://getform.io/f/7df6078c-6c49-4520-92ed-3b7e5187c74b" method="POST" className="flex flex-col items-start bg-white justify-start border-none rounded-xl w-[400px] max-sm:w-[360px] h-[250px] gap-6 p-4">
                <input type="text" name="feedback" className='border-none w-full pl-4 bg-gray-200 rounded-md outline-none h-[40px]' value={input.feedback} placeholder='write your feedback' onChange={handleChange}/>
                <input type="text" name="email" className='border-none w-full pl-4 outline-none rounded-lg bg-blue-200 h-[40px]' value={input.email} placeholder="enter your email" onChange={handleChange}/>
                <button  className="px-4 rounded-md py-[2px] bg-slate-400 text-white text-center" type="submit">Submit</button>
                
            </form>
        </div>

        <div className=' absolute bottom-[40px] right-[30px] flex items-center justify-center mt-[40px]'>
        <p className="font-semibold ">© 2021-2022, Productmania </p>
        </div>



    </div>
  )
}

export default About