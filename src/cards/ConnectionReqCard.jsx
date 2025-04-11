//friends send request (card)
import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFrd } from '../reduxStore/frdRequestSlice'; //in the same folder means ./ but if diff folder than ../ 
import { Base_Url } from '../utils/constant';

const ConnectionReqCard = ({val}) => {
  const selector=useSelector((store)=>store.frdRequest);
  const dispatch=useDispatch();
  // console.log("val:",val);
const handleAddOrRemoveFriend=async(status,reqId)=>{
const res=await axios.post(`${Base_Url}/request/review/${status}/${reqId}`,{},{withCredentials:true}); 
console.log(res);
}

  return (
    <>
        <div id="userExp" className=" flex rounded-md cursor-pointer bg-[#1D232A] text-white w-[400px] h-[150px] ml-0 lg:ml-[530px]  mt-1 border border-solid border-black">
              
              <div className="w-24 rounded-full h-24 ml-7 mt-7">
                  <img src={val.photoUrl || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"} className=" w-full h-full object-fill rounded-full overflow-hidden "></img>
                 
              </div>
              <div>
              <div className="flex mt-7">
                  <p  className="ml-7 text-xl font-bold ">{val.firstName} { val.lastName}</p> 
                  
                </div>
             
            
              <div className="mt-5">
                  <button className="bg-green-500 rounded-md   ml-5 w-20 h-9 " onClick={()=>{
                    handleAddOrRemoveFriend("accepted",val._id);
                    dispatch(removeFrd(val._id))
                  }}>Add</button>
                  <button className="bg-red-500 rounded-md  ml-2 w-20 h-9" onClick={()=>{
                           handleAddOrRemoveFriend("rejected",val._id);
                           dispatch(removeFrd(val._id));
                  }}>Remove</button>
              </div>
              </div>

          </div>
        </>
  )
}

export default ConnectionReqCard;
