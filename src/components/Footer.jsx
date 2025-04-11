import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer=()=>{
    const selector=useSelector((store)=>store.login);

    return(
        <>
       <div id="Footer" className="w-full bg-[#1D232A] flex flex-col cursor-pointer   ">
        <div id="main" className="flex h-full  justify-around pt-5  ">
            <div className="">
                <h1 className="text-green-500  font-bold text-md md:text-xl">Company Name</h1>
                {selector === "logout" ?(<Link to={"/feed"}><p className="mt-3 font-bold text-sm  md:text-lg text-white  hover:text-red-500 hover:underline">DevBuddy</p></Link>):(<Link to={"/"}><p className="mt-3 font-bold text-sm  md:text-lg text-white  hover:text-red-500 hover:underline">DevBuddy</p></Link>)}
                <p className="mt-3  font-bold text-sm md:text-lg text-white text-wrap ">“Code. Connect. Collaborate.”</p>
            </div>
            <div >
            <h1 className="text-green-500 font-bold text-md md:text-xl">Quick Links</h1>
            {selector =="logout" ?(<Link  to={"/feed"}><p className="mt-3 font-bold text-sm  md:text-lg text-white hover:underline hover:text-red-500">Home</p></Link>):(<Link  to={"/login"}><p className="mt-3 font-bold text-sm  md:text-lg text-white  hover:text-red-500">Home</p></Link>)}
            {selector =="logout" ?(<Link to={"/connections"}> <p className="mt-3  font-bold text-sm  md:text-lg text-white hover:underline hover:text-red-500">Your Friends</p></Link>):(<Link to={"/login"}> <p className="mt-3  font-bold text-sm  md:text-lg text-white hover:underline hover:text-red-500">Your Friends</p></Link>)}
            {selector =="logout" ?(<Link to={"/connectionrequest"}><p className="mt-3  font-bold text-sm  md:text-lg text-white  hover:text-red-500">Friend Request</p></Link>):(<Link to={"/login"}><p className=" hover:underline hover:text-red-500 mt-3  font-bold text-sm  md:text-lg text-white">Friend Request</p></Link>)}
                <Link to={"/about"}><p className="mt-3 hover:underline hover:text-red-500 font-bold text-sm  md:text-lg text-white">About Us</p></Link>
                <Link to={"/contact"}><p className="mt-3 hover:underline hover:text-red-500 font-bold text-sm  md:text-lg text-white mb-1">Contact</p></Link>
            </div>
            <div>
                <h1 className="text-green-500 font-bold text-md md:text-xl  " >Socials</h1>
                <Link to={"https://github.com/Dibya-majumdar/"}><p className="mt-3 font-bold text-sm  md:text-lg text-white  hover:text-red-500 hover:underline">Github</p></Link>
                <Link to={"https://www.linkedin.com/in/dibya-majumdar-3879102a2/"}><p className="mt-3  font-bold text-sm  md:text-lg text-white  hover:text-red-500 hover:underline">LinkedIn</p></Link>
            </div>
            {/* <div>
                <h1 className="text-green-500 font-bold text-md md:text-xl">Contact Info</h1>
                 <p className="mt-3 font-bold text-xsm  md:text-lg text-white ">Gmail: DevBuddy2025@gmail.com</p> 
            </div> */}
            <div>
                <h1 className="text-green-500 font-bold text-md md:text-xl ">Legal</h1>
               <Link to={"/privacyPolicy"}> <p className="mt-3  font-bold text-sm  md:text-lg text-white  hover:text-red-500 hover:underline">Privacy Policy</p></Link>
               <Link to={"/terms"}><p className="mt-3  font-bold text-sm  md:text-lg text-white  hover:text-red-500 hover:underline"> Terms of Service</p></Link>
            </div>
        </div>
        <div id="copyright" className="flex justify-center">
            <p className="  font-bold text-sm md:text-xl text-white mt-10  mb-3  hover:text-green-500 hover:underline">© 2025 DevBuddy. All rights reserved.</p>
        </div>


       </div>
        </>       
    )
}
export default Footer