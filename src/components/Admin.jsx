import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Admin = () => {
    const [message,setMessage]=useState([]);
const adminMessage=async ()=>{
    const res=await axios.get("http://localhost:3000/Admin/message",{withCredentials:true});
    console.log(res.data);//it is a array consists of objets
    setMessage(res.data);
}

    useEffect(()=>{
        adminMessage()
    },[])

    if(message.length===0) return <h1>No sujjestions🤔 No Messages🧐</h1>
  return (
    <>
    {message.map((val)=>(
 <div className='bg-[#1D232A] text-white ml-2 lg:ml-[400px] sm:w-[100px] lg:w-1/2 pl-2 lg:pl-[20px] rounded-sm mt-2 pt-2 pb-2 '>
    <div className='flex'>
            <h1 className='text-green-500 text-xl font-bold'>Name:</h1>
            <h1 className='text-xl font-bold '>{val.Name}</h1>
        </div>
        <div className='flex'>
            <h1 className='text-green-500 text-xl font-bold'>Email:</h1>
            <h1 className='text-xl font-bold '>{val.emailId}</h1>
        </div>
        <div >
            {val.messages.map((val2)=>(
                <div className='flex'>
                    <h1 className='text-green-500 font-bold text-xl'>messages:   </h1>
                    <h1 className='text-xl font-bold pl-2 '>{ val2.text}</h1>
                </div>
    ))}
        </div>
    </div>
    ))}
   
      
    </>
  )
}

export default Admin;
