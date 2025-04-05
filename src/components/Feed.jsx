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
    // console.log(res);
   dispatch(addFeedData(val));    //storing data into initialState of feed slice of store.
   
   
  
  }catch(err){
    console.log("error:"+err);
  }
  
}
useEffect(()=>{
feedApiFunc();

},[])

if(feed==null) return;
if(feed.length===0) return <h1 className='ml-[600px] mt-3 font-bold text-3xl  '> Feed is empty 🤡</h1>

  return (
    <>
    {feed && <FeedCard val={feed[0]}/>}
   
    
    </>
  )
}

export default Feed
