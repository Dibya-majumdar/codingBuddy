import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { change } from "../reduxStore/loginLogoutSlice";
import { addUser } from "../reduxStore/userSlice";
import UpdateProfile from "./UpdateProfile";

const Profile=()=>{
  const selector = useSelector((store) => store.user); // Correctly use useSelector at the top level
  const val1 = selector?.data; 
  const [any, setAny] = useState(false);
  const [any2, setAny2] = useState("");

  useEffect(() => {    //written so that after refesh data will not change
   
    if (val1) {
      setAny(true);
      setAny2(val1);
    }
    console.log(selector);
  }, [val1]); 
   
   
  


    return(
        <>
        {any && <UpdateProfile val={any2} />}
        </>
    )
}

export default Profile;