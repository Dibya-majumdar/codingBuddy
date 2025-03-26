import React from "react";

const FeedCard=({val})=>{

    return (
        <>
        <div id="userExp" className="  rounded-md cursor-pointer bg-[#1D232A] text-white w-[380px] h-[590px] ml-[530px] mt-5 border border-solid border-black">
              
              <div className="w-full h-[380px] ">
                  <img src={val.photoUrl || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"} className=" w-full h-full object-fill  "></img>
                 
              </div>
              <div className="flex mt-5">
                  <p  className="ml-5 text-3xl font-bold ">{val.firstName} { val.lastName}</p> 
                   <p className="ml-3 ">    {val.age}</p>
                </div>
              <p className="ml-5 text-xl ">{val.gender}</p>
              <div className="ml-5 text-xl ">
                  <p>{val.about}</p>
              </div>
              <div className="mt-5">
                  <button className="bg-red-500 rounded-md h-12 w-24 ml-5 ">ignore</button>
                  <button className="bg-green-500 rounded-md h-12 w-24 ml-2">intersted</button>
              </div>


          </div>
        </>
    )
}
export default FeedCard;