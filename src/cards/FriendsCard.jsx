import React from 'react'
import { Link } from 'react-router-dom'

const FriendsCard = ({val}) => {

  return (
    <>
         <div id="userExp" className=" mb-5 flex rounded-md cursor-pointer bg-[#1D232A] text-white  sm:w-[150px] md:w-[400px]  sm:ml-0 md:ml-[530px]  mt-1 border border-solid border-black">
              
              <div className="w-24 rounded-full h-24 ml-7 mt-7 mb-8">
                  <img src={val.photoUrl || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid"} className=" w-full h-full object-fill rounded-full overflow-hidden "></img>
                 
              </div>
              <div>
              <div className="flex mt-7">
                  <p  className="ml-7 text-xl font-bold ">{val.firstName} { val.lastName}</p> 
                  <p className='ml-2'>{val.age}</p>
              
                  
                </div>
                <p className='ml-7'>{val.gender}</p>
                <p className='ml-7'>{val.about}</p>
               <Link to={"/chat/"+val._id}><div className='ml-7 mt-2 '>
                  <button className='bg-green-500 w-24 h-8  rounded-md text-black font-bold'>Message</button>
                </div></Link>
             
            
              {/* <div className="mt-2 mb-2">
                  <button className="bg-green-500 rounded-md   ml-5 w-20 h-9 ">Add</button>
                  <button className="bg-red-500 rounded-md  ml-2 w-20 h-9">Remove</button>
              </div> */}
             
              </div>

          </div>
    </>
  )
}

export default FriendsCard
