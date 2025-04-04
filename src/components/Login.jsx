//login card
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from "../reduxStore/userSlice";
import { change } from "../reduxStore/loginLogoutSlice";



const Login=()=>{
    const dispatch=useDispatch();
    
    const [signUp,setsignUp]=useState(false);
    const [email,setEmail]=useState("dibya@gmail.com");
    const [pass,setPass]=useState("dibya@123");
    const[firstName,setFirstName]=useState("");
    const [lastName,setLastname]=useState("");
    const [age,setAge]=useState("");
    const [photoUrl,setPhotoUrl]=useState("");
    const [gender,setGender]=useState("");
    const [about,setAbout]=useState("");
    const[error,setError]=useState("");
    const [data,setData]=useState(true);
    const navigate=useNavigate();//make only after signuP automatically navigate to login page

    const submitLogin=async()=>{
        try{
            // const res=await axios.post("http://localhost:3000/login", { emailId: email, password: pass });
            const res=await axios.post("http://localhost:3000/login", { emailId: email, password: pass },{withCredentials:true});
          
            // console.log(res);
            dispatch(addUser(res.data));
            dispatch(change())
            return navigate("/feed");
        }catch(err){
           
            setError(err.response.data);
            console.log(err.response.data);
        }
     
    }
    const submitSignup=async()=>{
        try{
            const res=await axios.post("http://localhost:3000/signup",{firstName,lastName,age,emailId:email,password:pass,gender,about},{withCredentials:true});//remove photoUrl from here
            console.log(res);
            // setData(!data);//make only after signuP automatically comes to login Ui
            setsignUp(!signUp);
        }catch(err){
            console.log(error);
        }
       
    }


//ml-500
    return(
        <>
        {signUp==false ?(<div id="login" className="bg-[#1D232A] text-white w-1/4   ml-0 sm:ml-20 md:ml-40 lg:ml-64 xl:ml-[500px] mt-5 h-[350px] rounded-md cursor-pointer    " >
     <p className="pl-[355px] text-2xl" onClick={()=>navigate("/")}>x</p>
     <p className=" pt-2 ml-36 font-bold text-lg text-green-500">Login</p>
    
   
        <div id="email"className="ml-0 ">
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
        <div className="flex ml-20 mt-5">
            <p className="text-gray-500 font-bold">new in website ? Do</p><p className="text-gray-500 font-bold underline ml-1" onClick={()=>{ setsignUp(true)}
               }>signUp</p>
        </div>
     </div>)
     :
     
       (<div id="login" className="bg-[#1D232A] text-white w-1/4   ml-0 sm:ml-20 md:ml-40 lg:ml-64 xl:ml-[500px] mt-5  rounded-md cursor-pointer    " >
     <p className="pl-[355px] text-2xl" onClick={()=>navigate("/")}>x</p>
     <p className=" pt-2 ml-36 font-bold text-lg text-green-500">signUp</p>
    
     <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">First Name</p>
            <input placeholder="Enter firstName" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={firstName} onChange={(e)=>{
                   setError("")
                setFirstName(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Last Name</p>
            <input placeholder="Enter lastName" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={lastName} onChange={(e)=>{
                   setError("")
                setLastname(e.target.value);
            }}/>
        </div>
        <div id="email"className="ml-0 ">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Email</p>
            <input placeholder="Enter email" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={email} onChange={(e)=>{
                setError("")
                setEmail(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Password</p>
            <input placeholder="Enter password" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={pass} onChange={(e)=>{
                   setError("")
                setPass(e.target.value);
            }}/>
        </div>
       
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Age</p>
            <input placeholder="Enter age" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={age} onChange={(e)=>{
                   setError("")
                setAge(e.target.value);
            }}/>
        </div>
        {/* <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Photo Url</p>
            <input placeholder="Enter photo url" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={photoUrl} onChange={(e)=>{
                   setError("")
                setPhotoUrl(e.target.value);
            }}/>
        </div> */}
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Gender</p>
            <input placeholder="Enter gender" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={gender} onChange={(e)=>{
                   setError("")
                setGender(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">About</p>
            <input placeholder="about..." className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={about} onChange={(e)=>{
                   setError("")
                setAbout(e.target.value);
            }}/>
        </div>
        {
           setError !=" " ? <p className="ml-28 text-red-500">{error}</p>:<p></p>
        }
        <div id="btn">
            <button className="bg-green-600 rounded-lg h-10 w-24  mt-3 ml-32" onClick={submitSignup}>signUp</button>
           
        </div>
        <div className="flex ml-16 mt-5">
            <p className="text-gray-500 font-bold text-center">already have an account ?</p><p className="text-gray-500 font-bold underline ml-1" onClick={()=>{
                setsignUp(false)
            }}>login</p>
        </div>
     </div>)}
     
        </>
    )
}
export default Login;
