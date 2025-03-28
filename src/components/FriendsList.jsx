import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriendsData } from "../reduxStore/friendsSlice";
import FeedCard from "./FeedCard";

const FriendList=()=>{
    const friendS=useSelector((store)=>store.friend);
    const dispatch=useDispatch();

    const connections=async()=>{
    try{
        const res=await axios.get("http://localhost:3000/user/connections",{withCredentials:true});
        console.log(res.data.checkUserTable);
        dispatch(addFriendsData(res.data.checkUserTable));
    }catch(err){
    console.log(err);
    }
    }

    useEffect(()=>{
        connections();
    },[])

    if(friendS==null) return
    if(friendS.length===0) return <h1>no friends found</h1>
    return(
        <>
      <div>
        {friendS.map((val)=>{
            return(
                <FeedCard val={val}/>    //TODO-> make it by your self
            )
        })}
      </div>
        </>
    )
}
export default FriendList;