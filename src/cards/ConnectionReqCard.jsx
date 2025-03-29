//friends send request (card)
import React from 'react'

const ConnectionReqCard = ({val}) => {
  return (
    <>
        <div id="userExp" className=" flex rounded-md cursor-pointer bg-[#1D232A] text-white w-[400px] h-[150px] ml-[530px]  mt-1 border border-solid border-black">
              
              <div className="w-24 rounded-full h-24 ml-7 mt-7">
                  <img src={val.photoUrl || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"} className=" w-full h-full object-fill rounded-full overflow-hidden "></img>
                 
              </div>
              <div>
              <div className="flex mt-7">
                  <p  className="ml-7 text-xl font-bold ">{val.firstName} { val.lastName}</p> 
                  
                </div>
             
            
              <div className="mt-5">
                  <button className="bg-green-500 rounded-md   ml-5 w-20 h-9 ">Add</button>
                  <button className="bg-red-500 rounded-md  ml-2 w-20 h-9">Remove</button>
              </div>
              </div>

          </div>
        </>
  )
}

export default ConnectionReqCard;
