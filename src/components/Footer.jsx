import React from "react";

const Footer=()=>{

    return(
        <>
       <div id="Footer" className="w-full bg-[#1D232A] flex flex-col bottom-0 ">
        <div id="main" className="flex h-60 justify-around pt-5  ">
            <div >
                <h1 className="text-green-500 font-bold text-xl">Company Name</h1>
                <p className="mt-3 font-bold text-lg text-white">DevBuddy</p>
                <p className="mt-3  font-bold text-lg text-white">“Code. Connect. Collaborate.”</p>
            </div>
            <div >
            <h1 className="text-green-500 font-bold text-xl">Quick Links</h1>
                <p className="mt-3 font-bold text-lg text-white">Home</p>
                <p className="mt-3  font-bold text-lg text-white">Find Partner</p>
                <p className="mt-3  font-bold text-lg text-white">Chatroom</p>
                <p className="mt-3  font-bold text-lg text-white">About Us</p>
                <p className="mt-3  font-bold text-lg text-white">Contact</p>
            </div>
            <div>
                <h1 className="text-green-500 font-bold text-xl" >Socials</h1>
                <p className="mt-3 font-bold text-lg text-white">Github</p>
                <p className="mt-3  font-bold text-lg text-white">LinkedIn</p>
            </div>
            <div>
                <h1 className="text-green-500 font-bold text-xl">Contact Info</h1>
                <p className="mt-3 font-bold text-lg text-white">Gmail: DevBuddy2025@gmail.com</p>
            </div>
            <div>
                <h1 className="text-green-500 font-bold text-xl">Legal</h1>
                <p className="mt-3  font-bold text-lg text-white">Privacy Policy</p>
                <p className="mt-3  font-bold text-lg text-white"> Terms of Service</p>
            </div>
        </div>
        <div id="copyright" className="flex justify-center">
            <p className="  font-bold text-sm text-white mt-10  mb-3">© 2025 DevBuddy. All rights reserved.</p>
        </div>


       </div>
        </>       
    )
}
export default Footer