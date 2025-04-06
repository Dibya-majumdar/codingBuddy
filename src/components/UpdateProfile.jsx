import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";
import axios from "axios";

import { addUser } from "../reduxStore/userSlice";

const UpdateProfile = ({val}) => {
    const dispatch=useDispatch();
     const navigate=useNavigate();

    const [firstName,setFirstName]=useState(val.firstName);
    const [lastName,setLastName]=useState(val.lastName);
    const [password,setPassword]=useState("");
    const[age,setAge]=useState(val.age|| "");
    const[gender,setGender]=useState(val.gender ||"");
    const[photoUrl,setPhotoUrl]=useState( val.photoUrl||"");
    const[about,setAbout]=useState(val.about|| "");
     const[error,setError]=useState("");

     const handleUpload=async(e)=>{
        const file=e.target.files[0];//image that user pass from input box
        if(!file) return; 
        const formData=new FormData(); //make a obj(it is raw js)
        formData.append("image",file); //pass image in the obj
        try{
             const res=await axios.post(`https://api.imgbb.com/1/upload?&key=0c0cbaf58e6997933b70c102e60cca69`,formData);//at first it is showing error beacuse of i have did -> {formData}.but i should do -> formData.
           console.log(res.data.data.url);
           setPhotoUrl(res.data.data.url)
        }catch(err){
            console.log(err);
        }


     }

   
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

  return (
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
        <div id="password" className=''>
           
        <div className='flex gap-2'><p className="mt-[10px] ml-[25px] font-bold text-xl ">Password</p><p className='text-[12px] font-semibold mt-[15px] ml[15px] text-red-500'> (if you want to change)</p></div>
            <input placeholder="Enter password " className="rounded-sm  ml-[25px] w-[330px] h-10 mt-2 pl-5 text-black outline-none" value={password} onChange={(e)=>{
                
                setPassword(e.target.value);
            }}/>
        </div>
     
        <div id="photoUrl" >
            <p className="mt-[10px] ml-[25px] font-bold text-xl text-white ">PhotoUrl</p>
            <div  className="rounded-sm  ml-[10px] w-[930px] h-10 mt-2 pl-5 text-white outline-none">  <input  type="file" accept="image/*"  onChange={handleUpload}/></div>
          
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


            <div id="userExp" className="mt-10  rounded-md cursor-pointer bg-[#1D232A] text-white w-[380px] h-[590px] overflow-hidden">
                <div className="w-full h-[380px]">
                    <img src={photoUrl || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"} className=" w-full h-full object-fill "></img>
                </div>
                <div className="flex mt-5">
                    <p  className="ml-5 text-3xl font-bold ">{firstName} { lastName}</p> 
                     <p className="ml-3 ">    {age}</p>
                  </div>
                <p className="ml-5 text-xl ">{gender}</p>
                <div className="ml-5 text-xl ">
                    <p>{about}</p>
                </div>
                <div className="mt-5 mb-5">
                    <button className="bg-red-500 rounded-full h-20 w-20 ml-20 "><img src="https://i.pinimg.com/474x/30/70/c5/3070c56f03f23cb365032a91e6d74345.jpg" className="h-full w-full object-fill rounded-full"></img></button>
                    <button className="bg-green-500 rounded-full h-20 w-20 ml-2 mb-5"><img src="https://i.pinimg.com/474x/b8/97/78/b89778a5df1add8ff6481df59b2b0dac.jpg" className="h-full w-full object-fill rounded-full"></img></button>
                </div>


            </div>
            </div>
    </>
  )
}

export default UpdateProfile
