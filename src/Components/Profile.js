import React from 'react'
import { useEffect } from 'react'
import { UserAuth } from '../Auth/AuthContext'

const Profile = () => {
    const {currentUser}=UserAuth()
    useEffect(()=>{
        console.log(currentUser)
    },[])
  return (
    <div className='max-sm:ml-0 ml-[150px]  h-[calc(100vh-40px)] bg-gray-200 px-[10px] py-[20px] '>
        <div className='flex items-start justify-center'>
            <div className=' flex items-center max-sm:w-[320px] justify-center flex-col gap-6 border-2 rounded-lg bg-white h-[300px] w-[340px]'>
                <img className='rounded-full h-[70px] w-[70px]' src={currentUser.photoURL===null?"https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400" :currentUser.photoURL } alt="profile"/>
                <span className='font-bold'>{currentUser.displayName===null?"user1":currentUser.displayName}</span>
                <p>{currentUser.email}</p>
            </div>
        </div>
    </div>
  )
}

export default Profile