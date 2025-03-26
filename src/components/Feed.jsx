import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeedData } from '../reduxStore/feedSlice'
import FeedCard from './FeedCard'






const Feed = () => {
  const dispatch=useDispatch();  //hook for use dispatch 
  const feed=useSelector((store)=>store.feed);  //subscribe the store (store ,we write it at time of writting provider)
  // console.log(feed);
  const feedApiFunc=async()=>{      //function to call the get api using axios
  try{
    const res=await axios.get("http://localhost:3000/user/feed",{withCredentials:true});
    const val=res.data;
   dispatch(addFeedData(val));    //storing data into initialState of feed slice of store.
   
   
  
  }catch(err){
    console.log("error:"+err);
  }
  
}
useEffect(()=>{
feedApiFunc();

},[])


  return (
    <>
    {feed && <FeedCard val={feed[0]}/>}
   
    
    </>
  )
}

export default Feed
