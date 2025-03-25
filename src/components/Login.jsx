import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from "../reduxStore/userSlice";
import { change } from "../reduxStore/loginLogoutSlice";



const Login=()=>{
    const dispatch=useDispatch();
    
    const [email,setEmail]=useState("dibya@gmail.com");
    const [pass,setPass]=useState("dibya@123");
    const[error,setError]=useState("");
    const navigate=useNavigate();
    const submitLogin=async()=>{
        try{
            // const res=await axios.post("http://localhost:3000/login", { emailId: email, password: pass });
            const res=await axios.post("http://localhost:3000/login", { emailId: email, password: pass },{withCredentials:true});
          
            console.log(res);
            dispatch(addUser(res.data));
            dispatch(change())
            return navigate("/feed");
        }catch(err){
           
            setError(err.response.data);
            console.log(err.response.data);
        }
     
    }

    return(
        <>
     <div id="login" className="bg-[#1D232A] text-white w-1/4  ml-[500px] mt-10 h-[350px] rounded-md cursor-pointer    " >
     <p className="pl-[355px] text-2xl" onClick={()=>navigate("/")}>x</p>
     <p className=" pt-2 ml-36 font-bold text-lg text-green-500">Login</p>
    
   
        <div id="email" >
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Email</p>
            <input placeholder="Enter Email" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={email} onChange={(e)=>{
                setError("")
                setEmail(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Password</p>
            <input placeholder="Enter Password" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={pass} onChange={(e)=>{
                   setError("")
                setPass(e.target.value);
            }}/>
        </div>
        {
           setError !=" " ? <p className="ml-28 text-red-500">{error}</p>:<p></p>
        }
        <div id="btn">
            <button className="bg-green-600 rounded-lg h-10 w-24  mt-3 ml-32" onClick={submitLogin}>Login</button>
           
        </div>
     </div>
        </>
    )
}
export default Login;
