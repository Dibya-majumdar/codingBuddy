import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFeedData } from "../reduxStore/feedSlice";

const FeedCard=({val})=>{
    const dispatch=useDispatch();
    
   

   
const handleBtn=async(status,requestid)=>{
    try{
        const res=await axios.post(`http://localhost:3000/request/send/${status}/${requestid}`,{},{withCredentials:true}); //now everything is perfect but after sending request i have to remove the card from page -> Todo
        //from val i am getting the user data of feed(array of users)now val._id becomes action.payload in slice.
        console.log(res);
    }catch(err){
        console.log(err);
    }
}


//h-[590px] top div
    return (
        <>
        <div id="userExp" className=" mb-5 rounded-md cursor-pointer bg-[#1D232A] text-white w-[380px]  ml-[530px] mt-5 border border-solid border-black"> 
              
              <div className="w-full h-[380px] ">
                  <img src={val.photoUrl || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"} className=" w-full h-full object-fill  "></img>
                 
              </div>
              <div className="flex mt-5">
                  <p  className="ml-5 text-3xl font-bold ">{val.firstName} { val.lastName}</p> 
                   <p className="ml-3 ">    {val.age}</p>
                </div>
              <p className="ml-5 text-xl ">{val.gender}</p>
              <div className="ml-5 text-xl ">
                  <p>{val.about}</p>
              </div>
              <div className="mt-5">
                  {/* <button className="bg-red-500 rounded-md h-12 w-24 ml-5 " onClick={()=>{
                    handleBtn("ignored",val._id);
                    dispatch(removeFeedData(val._id))
                   
                  }}>ignore</button> */}
                  <button className="bg-red-500 rounded-full h-20 w-20 ml-20   " onClick={()=>{
                    handleBtn("ignored",val._id);
                    dispatch(removeFeedData(val._id))
                   
                  }}><img src="https://i.pinimg.com/474x/30/70/c5/3070c56f03f23cb365032a91e6d74345.jpg" className="h-full w-full object-fill rounded-full"></img></button>

                  {/* <button className="bg-green-500 rounded-md h-12 w-24 ml-2" onClick={()=>{
                     handleBtn("interested",val._id);
                     dispatch(removeFeedData(val._id)) 
                    
                  }}>intersted</button> */}
                  {/* w-24 h-20  of this 2 */}
                  
                   <button className="bg-green-500 rounded-full h-20 w-20 ml-2" onClick={()=>{   
                     handleBtn("interested",val._id);
                     dispatch(removeFeedData(val._id)) 
                    
                  }}><img src="https://i.pinimg.com/474x/b8/97/78/b89778a5df1add8ff6481df59b2b0dac.jpg" className="h-full w-full object-fill rounded-full"></img></button>
              </div>


          </div>
        </>
    )
}
export default FeedCard;