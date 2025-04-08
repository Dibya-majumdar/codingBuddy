//this is the whole body of project where navbar and outlet is present

import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addUser } from '../reduxStore/userSlice'
import { change, notchange } from '../reduxStore/loginLogoutSlice'
import Footer from './Footer'
//cause we are always coming here at first so check is user in login or not? if login then set the redux store and update the ui thats all
const Body = () => {
  const dispatch=useDispatch();
  // dispatch(notchange());
  //it will not run if token is not there.
  const fetchUser=async()=>{
    try{
        const res=await axios.get("http://localhost:3000/profile/view",{withCredentials:true});
        dispatch(addUser(res.data))
      //  console.log(res)
          dispatch(change()) //for loginlOGOUT btn value 
        
      
    }catch(err){
      dispatch(notchange())
      console.log(err);
    }
  }
  useEffect(()=>{
fetchUser();
  },[])
  return (
    <>
    <div className="min-h-screen flex flex-col">
    <Navbar/>
   
    <div className="flex-grow">
<Outlet/>
    </div>
    <Footer/>
    </div>
      {/* <Navbar/>
      <Outlet/>
      <Footer/> */}
    </>
  )
}

export default Body
