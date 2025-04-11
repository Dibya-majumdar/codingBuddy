import React from "react";
const ToastCard=({val1})=>{

    return(
        <>
        <div className="flex justify-center  ">
        <div className="fixed top-16 text-white bg-green-500 p-3 text-md  font-semibold lg:font-bold lg:text-xl  rounded-md   left-1/2 transform -translate-x-1/2 shadow-md">{val1}...</div>
        </div>
      
        </>
    )
}
export default ToastCard;



