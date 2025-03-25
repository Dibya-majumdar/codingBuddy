import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeedData } from '../reduxStore/feedSlice'

const Feed = () => {
  const dispatch=useDispatch();
const selector=useSelector((store)=>store.feed);
 const [firstName,setFirstName]=useState( "")
const [lastName,setLastName]=useState("")
const [age,setAge]=useState("")
const [about,setAbout]=useState("")
const [gender,setGender]=useState("")
const [photoUrl,setPhotoUrl]=useState("");
// const [feedPresent,setFeedPresent]=useState(false);


// if(selector!=null){
//   setFeedPresent(true)
// }

const feedApiFunc=async()=>{
  try{
    const res=await axios.get("http://localhost:3000/user/feed",{withCredentials:true});
    const val=res.data[0];
    // console.log("res:",val)
    dispatch(addFeedData(val));
    setFirstName(val.firstName);
    setLastName(val.lastName);
    setAge(val.age);
    setAbout(val.about);
    setGender(val.gender);
    setPhotoUrl(val.photoUrl);
  }catch(err){
    console.log("error:"+err);
  }
  
}
useEffect(()=>{
feedApiFunc();
},[])


  return (
    <>
    <div id="userExp" className="  rounded-md cursor-pointer bg-[#1D232A] text-white w-[380px] h-[590px] ml-[530px] mt-5 border border-solid border-black">
              
                <div className="w-full h-[380px] ">
                    <img src={photoUrl || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"} className=" w-full h-full object-fill  "></img>
                    {/* <img src={photoUrl || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"} className=" max-w-full max-h-full overflow-hidden  "></img> */}
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
    </>
  )
}

export default Feed
