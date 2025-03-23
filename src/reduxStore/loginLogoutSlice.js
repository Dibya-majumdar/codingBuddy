import { createSlice } from "@reduxjs/toolkit";

const loginLogoutSlice=createSlice({
    name:"loginLogout",
    initialState:"login",
    reducers:{
        change:(state,action)=>{
            return "logout";
        },
        notchange:()=>{
            return "login";
        }
    }
})

export default loginLogoutSlice.reducer;
export const{change,notchange}=loginLogoutSlice.actions;