//login card
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from "../reduxStore/userSlice";
import { change } from "../reduxStore/loginLogoutSlice";
import { adminOff, adminOn } from "../reduxStore/adminSlice";



const Login=()=>{
    const dispatch=useDispatch();
    const selector=useSelector((store)=>store.admin);
    
    const [signUp,setsignUp]=useState(false);
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const[firstName,setFirstName]=useState("");
    const [lastName,setLastname]=useState("");
    const [age,setAge]=useState("");
    const [photoUrl,setPhotoUrl]=useState("");
    const [gender,setGender]=useState("");
    const [about,setAbout]=useState("");
    const[error,setError]=useState("");
    const [data,setData]=useState(true);
    const [adminKey,setadminKey]=useState("");
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
            // console.log(err.response.data);
            setError(err.response.data);
            
        }
     
    }
    const submitSignup=async()=>{
        try{
            const res=await axios.post("http://localhost:3000/signup",{firstName,lastName,age,emailId:email,password:pass,gender,about},{withCredentials:true});//remove photoUrl from here
            console.log(res);
            // setData(!data);//make only after signuP automatically comes to login Ui
            setsignUp(!signUp);
        }catch(err){
            // console.log(error);
            setError(err.response.data);
        }
       
    }

    const adminLogin=async()=>{
        try{
            const res=await axios.post("http://localhost:3000/admin/login",{emailId:email,password:pass,adminKey},{withCredentials:true});
            console.log(res.data)
            dispatch(addUser(res.data));
            dispatch(change())
            return navigate("/feed");
        }catch(err){
            console.log(err)
        }

    }


//ml-500
    return(
        <>
       
        {signUp==false ?(selector == false? (<div id="login" className="bg-[#1D232A] text-white  w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 
     mr-auto    ml-0 sm:ml-20 md:ml-40 lg:ml-64 xl:ml-[500px] mt-5  rounded-md cursor-pointer  mb-2  " >
     <p className=" pl-[290px] sm:pl[320px] md:pl-[305px] lg:pl-[355px] text-2xl" onClick={()=>navigate("/")}>x</p>
     <p className=" pt-2 ml-36 sm:ml-16 md:ml-36 font-bold text-lg text-green-500">Login</p>
    
   
        <div id="email"className="ml-0 ">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Email</p>
            <input placeholder="Enter Email" className="rounded-sm  ml-[25px] w-[280px] md:w-[310px] lg:w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={email} onChange={(e)=>{
                setError("")
                setEmail(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Password</p>
            <input type="password" placeholder="Enter Password" className="rounded-sm  ml-[25px] w-[280px]  md:w-[310px] lg:w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={pass} onChange={(e)=>{
                   setError("")
                setPass(e.target.value);
            }}/>
        </div>
        {
           error !=" " ? <p className="ml-28 text-red-500">{error}</p>:<p></p>
        }
        <div id="btn">
            <button className="bg-green-600 rounded-lg h-10 w-24  mt-3 ml-32" onClick={submitLogin}>Login</button>
           
        </div>
        <div className="flex ml-20 mt-5 ">
            <p className="text-gray-500 font-bold mb-3">new in website ? Do</p><p className="text-gray-500 font-bold underline ml-1" onClick={()=>{ setsignUp(true)}
               }>signUp</p>
        </div>
        <div className="flex justify-center  mb-5">
        <p className="text-gray-500 font-bold mb-5">are you a Admin? Do</p><p className="text-gray-500 font-bold underline ml-1" onClick={()=>{
            dispatch(adminOn(true));
        }} >AdminLogin</p>
        </div>
     {/* //start   */}
     </div>):(<div id="login" className="bg-[#1D232A] text-white  w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 
     mr-auto    ml-0 sm:ml-20 md:ml-40 lg:ml-64 xl:ml-[500px] mt-5  rounded-md cursor-pointer mb-2   " >
     <p className=" pl-[290px] sm:pl[320px] md:pl-[305px] lg:pl-[355px] text-2xl" onClick={()=>navigate("/")}>x</p>
     <p className=" pt-2 ml-36 sm:ml-16 md:ml-36 font-bold text-lg text-green-500">Login</p>
    
   
        <div id="email"className="ml-0 ">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Email</p>
            <input placeholder="Enter Email" className="rounded-sm  ml-[25px] w-[280px] md:w-[310px] lg:w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={email} onChange={(e)=>{
                setError("")
                setEmail(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Password</p>
            <input type="password" placeholder="Enter Password" className="rounded-sm  ml-[25px] w-[280px]  md:w-[310px] lg:w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={pass} onChange={(e)=>{
                   setError("")
                setPass(e.target.value);
            }}/>
        </div>
        <div id="adminKey">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Admin Key</p>
            <input type="password" placeholder="Enter Password" className="rounded-sm  ml-[25px] w-[280px]  md:w-[310px] lg:w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={adminKey} onChange={(e)=>{
                   setError("")
                setadminKey(e.target.value);
            }}/>
        </div>
        {
           error !=" " ? <p className="ml-28 text-red-500">{error}</p>:<p></p>
        }
        <div id="btn">
            <button className="bg-green-600 rounded-lg h-10 w-24  mt-3 ml-32" onClick={adminLogin}>Login</button>
           
        </div>
        <div className="flex ml-20 mt-5 ">
            <p className="text-gray-500 font-bold mb-3">new in website ? Do</p><p className="text-gray-500 font-bold underline ml-1" onClick={()=>{ setsignUp(true)}
               }>signUp</p>
        </div>
        
     </div>))
    //  end
     :
     
       (<div id="login" className="bg-[#1D232A] text-white  w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 
     mr-auto    ml-0 sm:ml-20 md:ml-40 lg:ml-64 xl:ml-[500px] mt-5  rounded-md cursor-pointer mb-2   " >
     <p className=" pl-[300px]  md:pl-[325px]   lg:pl-[355px] text-2xl" onClick={()=>navigate("/")}>x</p>
     <p className=" pt-2 ml-36 font-bold text-lg text-green-500">signUp</p>
    
     <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">First Name</p>
            <input placeholder="Enter firstName" className="rounded-sm  ml-[25px] w-[250px] sm:w-[300px] md:w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={firstName} onChange={(e)=>{
                   setError("")
                setFirstName(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Last Name</p>
            <input placeholder="Enter lastName" className="rounded-sm  ml-[25px] w-[250px] sm:w-[300px] md:w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={lastName} onChange={(e)=>{
                   setError("")
                setLastname(e.target.value);
            }}/>
        </div>
        <div id="email"className="ml-0 ">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Email</p>
            <input placeholder="Enter email" className="rounded-sm  ml-[25px] w-[250px] sm:w-[300px] md:w-[330px]  h-10 mt-2 pl-5 text-black outline-none" value={email} onChange={(e)=>{
                setError("")
                setEmail(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Password</p>
            <input placeholder="Enter password" className="rounded-sm  ml-[25px] w-[250px] sm:w-[300px] md:w-[330px]  h-10 mt-2 pl-5 text-black outline-none" value={pass} onChange={(e)=>{
                   setError("")
                setPass(e.target.value);
            }}/>
        </div>
       
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Age</p>
            <input placeholder="Enter age" className="rounded-sm  ml-[25px] w-[250px] sm:w-[300px] md:w-[330px]  h-10 mt-2 pl-5 text-black outline-none" value={age} onChange={(e)=>{
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
            <input placeholder="Enter gender" className="rounded-sm  ml-[25px] w-[250px] sm:w-[300px] md:w-[330px]  h-10 mt-2 pl-5 text-black outline-none" value={gender} onChange={(e)=>{
                   setError("")
                setGender(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">About</p>
            <input placeholder="about..." className="rounded-sm  ml-[25px] w-[250px] sm:w-[300px] md:w-[330px]  h-10 mt-2 pl-5 text-black outline-none" value={about} onChange={(e)=>{
                   setError("")
                setAbout(e.target.value);
            }}/>
        </div>
        {
           error !=" " ? <p className="ml-28 text-red-500">{error}</p>:<p></p>
        }
        <div id="btn">
            <button className="bg-green-600 rounded-lg h-10 w-24  mt-3 ml-32" onClick={submitSignup}>signUp</button>
           
        </div>
        <div className="flex ml-16 mt-5 mb-5">
            <p className="text-gray-500 font-bold text-center">already have an account ?</p><p className="text-gray-500 font-bold underline ml-1" onClick={()=>{
                setsignUp(false)
                dispatch(adminOff());
            }}>login</p>
        </div>
     </div>)}
   
        </>
    )
}
export default Login;
