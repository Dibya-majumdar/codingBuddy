import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Base_Url } from '../utils/constant';

const Admin = () => {
    const [message,setMessage]=useState([]);
const adminMessage=async ()=>{
    const res=await axios.get(`${Base_Url}/Admin/message`,{withCredentials:true});
    // console.log(res.data);//it is a array consists of objets
    setMessage(res.data);
}

    useEffect(()=>{
        adminMessage()
    },[])

    if(message.length===0) return <h1 className='text-black font-bold text-md lg:text-4xl text-center'>No sujjestions🤔 No Messages🧐</h1>
  return (
    <>
    <h1 className='text-black font-bold text-md lg:text-4xl text-center'>Messages and sujjestions from users 🥳</h1>
    {message.map((val)=>(
 <div className='bg-[#1D232A] text-white ml-2 lg:ml-[400px] lg:w-1/2 pl-2 lg:pl-[20px] rounded-sm mt-2 pt-2 pb-2 mb-2 '>
    <div className='flex'>
            <h1 className='text-green-500 text-xl font-bold'>Name:</h1>
            <h1 className='text-xl font-bold pl-3 pr-3 '>{val.Name}</h1>
        </div>
        <div className='flex'>
            <h1 className='text-green-500 text-xl font-bold'>Email:</h1>
            <h1 className='text-xl font-bold pl-3 pr-3'>{val.emailId}</h1>
        </div>
        <div >
            {val.messages.map((val2)=>(
                <div className='flex'>
                    <h1 className='text-green-500 font-bold text-xl'>messages:   </h1>
                    <h1 className='text-xl font-bold pl-3 pr-3 '>{ val2.text}</h1>
                </div>
    ))}
        </div>
    </div>
    ))}
   
      
    </>
  )
}

export default Admin;
