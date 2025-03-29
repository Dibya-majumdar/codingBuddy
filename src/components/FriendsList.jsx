//Page to show all the connections(friends of user who logedin)

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriendsData } from "../reduxStore/friendsSlice";
import FeedCard from "./FeedCard";
import FriendsCard from "../cards/FriendsCard";
import { Link } from "react-router-dom";

const FriendList=()=>{
    const selector=useSelector((store)=>store.friend);
    const dispatch=useDispatch();

    const connections=async()=>{
    try{
        const res=await axios.get("http://localhost:3000/user/connections",{withCredentials:true});
        dispatch(addFriendsData(res.data.checkUserTable));
    }catch(err){
    console.log(err);
    }
    }

    useEffect(()=>{
        connections();
    },[])

    if(selector==null) return
    if(selector.length===0) return <h1>no friends found</h1>
    return(
        <>
      <div>
      <div className='flex gap-10 '>
      <div> <p className='ml-[620px]  mt-2 text-3xl font-bold mb-5'>Your Friends(< span className="text-red-500">{selector.length}</span>)</p></div>
     
      
      </div>
        {selector.map((val)=>{
            return(
                <FriendsCard val={val}/>    //TODO-> make it by your self
            )
        })}
      </div>
        </>
    )
}
export default FriendList;