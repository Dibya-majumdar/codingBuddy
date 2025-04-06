import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import { createSocketConnection } from '../webSockets/socket';  //../ means outside the directory and ./ means inside this directry
import axios from 'axios';

const Chat = () => {
const {targetUserId}=useParams();
const selector=useSelector((store)=>store.user);
const userId=selector?.data?._id;
const [message,setmessage]=useState([]);
const [inputText,setText]=useState("")

async function gettingDtaFromDb(){  //facing problem at connection
  const res=await axios.get(`http://localhost:3000/chat/${targetUserId}`,{withCredentials:true});
  
  // console.log(res.data.messages);
  const chatMessages=res.data.messages.map((val)=>{
    return { text:val.text,senderId:val.senderId} //from senderId to targetUserId
  })
  setmessage(chatMessages);
  // console.log(message)


}
useEffect(()=>{
  gettingDtaFromDb();
},[userId,targetUserId])


useEffect(()=>{
if(!userId) return
const socket =createSocketConnection();
socket.emit("joinChat",{userId,targetUserId});


socket.on("messageReceived",({firstName,text,senderId })=>{ //add targetUserId //change to senderId 
  // console.log(firstName,text,targetUserId);
setmessage((prev)=>[...prev,{firstName,text,senderId }])
// console.log(message)


  })
return ()=>{
  socket.disconnect();
}
},[userId,targetUserId])

const handleSendMessage=()=>{
  if(!selector) return;
  const socket =createSocketConnection();
  socket.emit("sendMessage",{firstName:selector.data.firstName,userId,targetUserId,text:inputText})
  setText("")
}

const messagesEndRef = useRef(null);//for scrolling
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [message]);




  return (
    < >
    
        <div id='chat_container' className='w-1/2  m-auto mt-10 rounded-md bg-[#1D232A]'>
          <nav className='w-full h-10  overflow-hidden border border-white text-white pt-2 pl-2'>chat</nav>       {/*bg-blue-500 */}
          <main className="w-full h-96 overflow-y-auto overflow-x-hidden bg-[#1D232A] p-4 space-y-2">
          
 
    {/* <div  className="w-full flex justify-start">
      <div className="inline-block max-w-xs bg-blue-500 text-white px-4 py-2 rounded-lg">
        hi everyone
      </div>
    </div> */}

{
  message.map((val, index) => 
    // console.log("val.targetUserId",userId,"targetUserId",targetUserId)
  //i ma getting my own userId.in message there is a senderiD if it is equl to the userId then cahnge
    //according to databse this logic is perfect but at time of inserting some error occurs
  
    (val.senderId!=userId)?( <div key={index} className="w-full flex justify-start mt-2"> 
      <div className="inline-block max-w-xs bg-blue-500 text-white px-4 py-2 rounded-lg break-words whitespace-pre-wrap">
        {val.text}
      </div>
    </div> ):(<div key={index} className="w-auto h-auto flex justify-end mt-2 ">
      <div className="inline-block max-w-xs bg-green-500 text-white px-4 py-2 rounded-lg  break-words whitespace-pre-wrap">
        {val.text}
      </div>
    </div>)
    

    
  )

}

<div ref={messagesEndRef} />


              {/* <div className="w-full flex justify-end">
              <div className="inline-block max-w-xs bg-green-500 text-white px-4 py-2 rounded-lg">
              {message}
              </div>
              </div> */}
          
</main>

          <footer className='flex bg-black h-12 w-full'>
            <input placeholder='message...' value={inputText} className='w-2/3 h-8 text-black font-semibold rounded-md ml-1 mt-2 pl-2' onChange={(e)=>{
             setText(e.target.value);
            }}></input>
            <button className='w-20 h-8 bg-green-500 text-black font-bold rounded-md mt-2 ml-2' onClick={handleSendMessage}>send</button>
          </footer>

        </div>
      
    </>
  )
}

export default Chat
