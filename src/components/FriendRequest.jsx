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
    },[])    //remove selector from dependency array

    if(selector===null) return <h1 className='ml-[600px] mt-3 font-bold text-3xl  '>No friend request comes</h1>;
    if(selector.length===0) return <h1 className='ml-[600px] mt-3 font-bold text-3xl  '>No friend request comes</h1>

  return (
    <>
    {selector!=null ?   <div className='flex gap-10 '>
      <div> <p className='ml-[500px]  mt-2 text-3xl font-bold mb-5'>friend Requests(< span className="text-red-500">{selector.length}</span>)</p></div>
     
      <Link to={"/connections"}> <div className='w-40 h-12 bg-green-500 rounded-md mt-2'>
          <button className='ml-6 mt-2 font-bold text-xl'> See Friends</button>
      </div></Link>
      </div>:   <div className='flex gap-10 '>
      <div> <p className='ml-[500px]  mt-2 text-3xl font-bold mb-5'>friend Requests(< span className="text-red-500">{0}</span>)</p></div>
     
      <Link to={"/connections"}> <div className='w-40 h-12 bg-green-500 rounded-md mt-2'>
         <button className='ml-6 mt-2 font-bold text-xl'> See Friends</button>
      </div></Link>
      </div>}
 
      {selector !=null && selector.map((val,index)=>{
        return (
          <ConnectionReqCard key={index} val={val}/>    //todo make ui by yourself
        )
      })}
     
    </>
  )
}

export default FriendRequest
