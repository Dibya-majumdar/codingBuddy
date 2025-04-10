import React from 'react'
import exampleImage from "../images/banner3.jpg"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';



//color->#BCA1B9
const Banner = () => {
  const navigate=useNavigate();
  const selector=useSelector((store)=>store.login)
  if(selector === "logout"){
    return navigate("/feed")
  }
  return (
    <>
     <div className='h-[634px] '>
      <div className='p-auto h-40 w-full text-white absolute z-10 pt-20'>
      <h1 className='font-bold text-5xl text-center pt-40 p-auto cursor-pointer'>DevBuddy<br></br> Find Your coding Partner</h1>
      {/* <h1 className='text-center'>New in the website</h1> */}
      {selector === "logout" ? (<div className='flex justify-center  gap-2 mt-5'>
        <h1 className='w-2/3 h-16 font-bold text-5xl text-center  p-auto cursor-pointer outline-none   text-white '> thanks For being a part of this website</h1>
        
      </div>):(<div className='flex justify-center  gap-2 mt-5'>
        <input className='w-1/2 h-16 rounded-md outline-none bg-white text-4xl pl-5 font-semibold text-black '></input>
        <button  className=' w-40 h-16 bg-green-500 text-black font-bold text-2xl rounded-md cursor-pointer' onClick={()=>{
          return navigate("/login")
        }}>SignUp</button>
      </div>)
    }
     
      </div>
      <div className='h-[634px] w-full bg-black absolute opacity-80'></div>
      <img  src={exampleImage} alt="" className='h-[634px] w-[1520px]' />
      
     </div>
     {/* <Footer/> */}
    
    </>
  )
}

export default Banner
