import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Navbar = () => {
  const navigate=useNavigate();
  const loginData=useSelector((store)=>store.login)
  const userLogo=useSelector((store)=>store?.user?.data?.photoUrl)


  return (
   <>
   <div id="navbar" className='bg-[#1D232A] flex h-[60px] justify-between w-full'>
    <div id="textlogo&" className='text-lg text-white ml-10 mt-[10px] font-bold h-[35px] w-[65px] '>DevBuddy</div>
    <div id="login&signup" className='text-lg flex gap-5'>
     <button className='bg-green-500 text-black rounded-xl h-[35px] w-[65px]  mt-[10px] font-bold 'onClick={()=>{
          return navigate("/login")
     }}> {loginData}</button>
      <div className="h-10 w-10 rounded-full bg-red-700 mr-5 mt-[6px] ">
      <img src={userLogo || `https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid`} alt="userimage" className='object-cover h-full w-full overflow-hidden rounded-full'></img>
      </div>
    </div>
   </div>
   </>
  )
}

export default Navbar
