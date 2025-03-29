import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestComes } from '../reduxStore/frdRequestSlice'

import ConnectionReqCard from '../cards/connectionReqCard';
import { Link } from 'react-router-dom';


const FriendRequest = () => {
  const selector=useSelector((store)=>store.frdRequest);
  const dispatch=useDispatch();


const gettingRequest=async()=>{

try{
const res=await axios.get("http://localhost:3000/user/request",{withCredentials:true});
// console.log(res.data.data);
dispatch(requestComes(res.data.data));
}catch(err){
    console.log(err)
}}
useEffect(()=>{
    gettingRequest();
    },[])

    if(selector===null) return;
    if(selector.length===0) return <h1>No friend request comes</h1>

  return (
    <>
    <div className='flex gap-10 '>
      <div> <p className='ml-[500px]  mt-2 text-3xl font-bold mb-5'>friend Requests(< span className="text-red-500">{selector.length}</span>)</p></div>
     
      <div className='w-40 h-12 bg-green-500 rounded-md mt-2'>
          <Link to={"/connections"}> <button className='ml-6 mt-2 font-bold text-xl'> See Friends</button></Link>
      </div>
      </div>
      {selector.map((val)=>{
        return (
          <ConnectionReqCard val={val}/>    //todo make ui by yourself
        )
      })}
     
    </>
  )
}

export default FriendRequest
