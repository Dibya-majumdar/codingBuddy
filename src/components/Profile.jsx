import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { change } from "../reduxStore/loginLogoutSlice";
import { addUser } from "../reduxStore/userSlice";

const Profile=()=>{
    const selector=useSelector((store)=>store.user.data)
   
    console.log(selector);
    const dispatch=useDispatch();
    

    
    const [firstName,setFirstName]=useState(selector.firstName);
    const [lastName,setLastName]=useState(selector.lastName);
    const [password,setPassword]=useState("");
    const[age,setAge]=useState(selector.age|| "");
    const[gender,setGender]=useState(selector.gender ||"");
    const[photoUrl,setPhotoUrl]=useState( selector.photoUrl||"");
    const[about,setAbout]=useState(selector.about|| "");
     const[error,setError]=useState("");

    const navigate=useNavigate();

    const handleSave=async()=>{
        try{
            const res=(password.trim()==="")?( await axios.patch("http://localhost:3000/profile/edit",{firstName,lastName,age,photoUrl,about,gender},{withCredentials:true})):( await axios.patch("http://localhost:3000/profile/edit",{firstName,lastName,password,age,photoUrl,about,gender},{withCredentials:true}))
            dispatch(addUser(res.data));
            navigate("/feed");
       
        console.log(res)
        }catch(err){
            console.log(err.message);
        }
    }


    return(
        <>
        <div id="wraperTopMost" className="flex w-full gap-10" >
            

            <div id="edit" className="bg-[#1D232A] text-white w-[380px]  ml-[350px] mt-10  rounded-md cursor-pointer    " >
     <p className="pl-[355px] text-2xl" onClick={()=>navigate("/feed")}>x</p>
     <p className=" pt-2 ml-36 font-bold text-lg text-green-500">Edit Profile</p>
    
   
        <div id="firstname" >
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">FirstName</p>
            <input placeholder="Enter FirstName" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={firstName} onChange={(e)=>{
            
                setFirstName(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">LastName</p>
            <input placeholder="Enter LastName" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={lastName} onChange={(e)=>{
                
                setLastName(e.target.value);
            }}/>
        </div>
        <div id="password">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Password</p>
            <input placeholder="Enter LastName" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={password} onChange={(e)=>{
                
                setPassword(e.target.value);
            }}/>
        </div>
     
        <div id="photoUrl">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">PhotoUrl</p>
            <input placeholder="Enter url" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={photoUrl} onChange={(e)=>{
                
                setPhotoUrl(e.target.value);
            }}/>
        </div>
        <div id="age">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Age</p>
            <input placeholder="Enter age" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={age} onChange={(e)=>{
                
                setAge(e.target.value);
            }}/>
        </div>
        <div id="gender">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">Gender</p>
            <input placeholder="Enter age" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={gender} onChange={(e)=>{
                
                setGender(e.target.value);
            }}/>
        </div>
        <div id="about">
            <p className="mt-[10px] ml-[25px] font-bold text-xl ">About</p>
            <input placeholder="Enter about yourself" className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={about} onChange={(e)=>{
                
                setAbout(e.target.value);
            }}/>
        </div>
       
        {
           setError !=" " ? <p className="ml-28 text-red-500">{error}</p>:<p></p>
        }
        <div id="btn">
            <button className="bg-green-600 rounded-lg h-10 w-24  mt-3 ml-32 mb-5" onClick={handleSave}>save</button>
           
        </div>
     </div>


            <div id="userExp" className="mt-10  rounded-md cursor-pointer bg-[#1D232A] text-white w-[380px] h-[500px]">
                <div className="w-full h-[250px]">
                    <img src={photoUrl || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"} className=" w-full h-full object-cover "></img>
                </div>
                <div className="flex mt-5">
                    <p  className="ml-5 text-3xl font-bold ">{firstName} { lastName}</p> 
                     <p className="ml-3 ">    {age}</p>
                  </div>
                <p className="ml-5 text-xl ">{gender}</p>
                <div className="ml-5 text-xl ">
                    <p>{about}</p>
                </div>
                <div className="mt-5">
                    <button className="bg-red-500 rounded-md h-12 w-24 ml-5 ">ignore</button>
                    <button className="bg-green-500 rounded-md h-12 w-24 ml-2">intersted</button>
                </div>


            </div>
            </div>
        </>
    )
}

export default Profile;