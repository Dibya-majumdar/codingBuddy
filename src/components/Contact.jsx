


import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToastCard from "../cards/ToastCard";

const Contact = () => {
  const [emai,setEmail]=useState("");
  const [text,setText]=useState("");
  const [name,setName]=useState("");
  const [error,seterror]=useState("");
  const [toast,setToast]=useState(false);


const sendAdminMessage=async()=>{
  try{
    const res=await axios.post("http://localhost:3000/Admin/message",{emailId:emai,messages:text,Name:name},{withCredentials:true});
  setEmail("");
  setName("");
  setText("");
  setToast(true);
  setTimeout(()=>{
setToast(false)
  },3000)
  }catch(err){
    console.log(err);
    seterror(err.response.data);
  }

}


  return (
    <div className="min-h-screen bg-[#1D232A]  text-white mt-2 mb-2  lg:w-1/2 px-6 md:px-16 py-12 flex flex-col lg:ml-[350px] rounded-md overflow-hidden ">
      {toast  && <ToastCard val1={"Message send"}/>  }
      <h1 className="text-4xl font-bold text-green-600 mb-4">Contact Us</h1>
      <p className="text-lg mb-8">
        Have a question, suggestion, or just want to say hello? We’d love to hear from you! 👋
      </p>

      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl text-green-500 font-semibold">📧 Email</h2>
          <p className="mt-2 text-lg">DevBuddy2025@gmail.com</p>
        </div>

        <div>
          <h2 className="text-xl text-green-500 font-semibold">💬 Socials</h2>
          <p className="mt-2 text-lg">GitHub: <a href="https://github.com/Dibya-majumdar/" className="text-green-400 hover:underline">https://github.com/Dibya-majumdar/</a></p>
          <p className="text-lg">LinkedIn: <Link to={"https://www.linkedin.com/in/dibya-majumdar-3879102a2/"} className="text-green-400 hover:underline">https://www.linkedin.com/in/dibya-majumdar-3879102a2/</Link></p>
        </div>

        <div>
          <h2 className="text-xl text-green-500 font-semibold">📍 Location</h2>
          <p className="mt-2 text-lg">Planet Earth 🌍 — Mostly online!</p>
        </div>
      </div>

      {/* Optional: Contact Form */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Send us a message</h2> 
       <div className="">
        <div>  <input type="text" placeholder="Your Name" className="w-2/3 lg:w-[400px] p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none mb-3" value={name} onChange={(e)=>{
          setName(e.target.value);
          seterror("");
        }}/></div>
        <div>  <input
            type="email"
            placeholder="Your Email"
            className=" w-2/3 lg:w-[400px] p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none mb-3" value={emai} onChange={(e)=>{
              setEmail(e.target.value)
              seterror("");
            }
          }
          /></div>
        <div> <textarea
            placeholder="Your Message"
            rows="5"
            className="w-2/3  lg:w-[400px] p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" value={text} onChange={(e)=>{
              setText(e.target.value)
              seterror("");
            }} 
          ></textarea></div>
          </div>
          {error!=null && <div className="text-red-500 font-bold ">{error}</div>}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded" onClick={sendAdminMessage}
          >
            Send
          </button>
         
         
      </div>
    </div>
  );
};

export default Contact;
