//Page to show all the connections(friends of user who logedin)

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriendsData } from "../reduxStore/friendsSlice";
import FriendsCard from "../cards/FriendsCard";
import { Base_Url } from "../utils/constant";


const FriendList=()=>{
    const selector=useSelector((store)=>store.friend);
    const dispatch=useDispatch();

    const connections=async()=>{
    try{
        const res=await axios.get(`${Base_Url}/user/connections`,{withCredentials:true});
        dispatch(addFriendsData(res.data.checkUserTable));
    }catch(err){
    console.log(err);
    }
    }

    useEffect(()=>{
        connections();
    },[])

    if(selector==null) return <h1 className='sm:ml-5 md:ml-[600px] mt-3 font-bold text-3xl  '>no friends found</h1>
    if(selector.length===0) return <h1 className='sm:ml-5 md:ml-[600px] mt-3 font-bold text-3xl  '>no friends found</h1>
    return(
        <>
      <div>
      <div className='flex gap-10 mb-5 justify-center lg:justify-normal'>
      <div className=""> <p className=' lg:ml-[620px]  mt-2 text-3xl font-bold mb-5'>Your Friends(< span className="text-red-500">{selector.length}</span>)</p></div>
     
      
      </div>
        {selector.map((val,index)=>{
            return(
                <FriendsCard key={index} val={val}/>    //TODO-> make it by your self
            )
        })}
      </div>
        </>
    )
}
export default FriendList;