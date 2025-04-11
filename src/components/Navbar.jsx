import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { notchange } from '../reduxStore/loginLogoutSlice';
import { removeUser } from '../reduxStore/userSlice';
import { Link } from 'react-router-dom';
import { adminOff } from '../reduxStore/adminSlice';
import { Base_Url } from '../utils/constant';




const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const loginData=useSelector((store)=>store.login)
  const adminLoginOrLogout=useSelector((store)=>store.admin)
  // const userLogo=useSelector((store)=>store?.user?.data?.photoUrl);
  const user=useSelector((store)=>store.user);
  // console.log(user);
  const handleLogout=async()=>{
    const res=await axios.post(`${Base_Url}/logout`, { },{withCredentials:true});
    // console.log(res.data.message);
    dispatch(removeUser());
    dispatch(adminOff());
    return navigate("/login")


  }


  return (
   <>
   <div id="navbar" className='bg-[#1D232A] flex h-[60px] justify-between w-full '>
{loginData === "logout" ? (<Link ><div id="textlogo&" className='text-lg text-white sm:ml-0 md:ml-10 mt-[10px] font-bold h-[35px] w-[65px] '>DevBuddy</div></Link>):(<Link to={"/"}><div id="textlogo&" className='text-lg text-white sm:ml-0 md:ml-10 mt-[10px] font-bold h-[35px] w-[65px] '>DevBuddy</div></Link>)}
    <div id="login&signup" className='text-lg flex gap-2 md:gap-5'>
     <button className='bg-green-500 text-black rounded-xl h-[35px] w-[65px]  mt-[10px] font-bold sm:ml-[10px] 'onClick={()=>{
          if(loginData=="login"){
            return navigate("/login")
          }
          if(loginData==="logout"){
            handleLogout()
            dispatch(notchange())  //this thing we can do in side api call of logout also
          }
         
     }}> {loginData}</button>
{loginData=="logout" && <Link to={"/feed"}> <div className='h-10 w-10 rounded-full bg-red-700 mt-[6px]'>
  <img src='https://i.pinimg.com/474x/e5/fc/e3/e5fce38f237cd259d351b3b273773f2b.jpg' className='object-cover overflow-hidden rounded-full '></img>

</div></Link> }
{loginData=="logout" && <Link to={"/connections"}> <div className='h-10 w-10 rounded-full bg-red-700 mt-[6px]'>
  <img src='https://i.pinimg.com/474x/6f/c5/8d/6fc58dae01934e9e7e37c646a2d30b14.jpg' className='object-cover overflow-hidden rounded-full '></img>

</div></Link> } 
{loginData=="logout" && <Link to={"/connectionrequest"}> <div className='h-10 w-10 rounded-full bg-red-700 mt-[6px]'>
  <img src='https://i.pinimg.com/474x/7b/17/ed/7b17edda62f7838c983dc5d4b4f344b4.jpg' className='object-cover overflow-hidden rounded-full '></img>

</div></Link> }




{loginData==="logout" && user.data!=null  ? (<Link to={"/profile"}><div className="h-10 w-10 rounded-full bg-red-700 sm:mr-0 md:mr-5 mt-[6px] ">
      <img src={user.data.photoUrl || `https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid`} alt="userimage" className='object-cover h-full w-full overflow-hidden rounded-full'></img>
      </div></Link> ): (<Link to={"/login"}><div className="h-10 w-10 rounded-full bg-red-700 mr-5 mt-[6px] ">
      <img src= "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid" alt="userimage" className='object-cover h-full w-full overflow-hidden rounded-full'></img>
      </div></Link> )}   


    </div>
   </div>
   </>
  )
}

export default Navbar
