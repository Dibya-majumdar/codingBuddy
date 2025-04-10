import { createSlice } from "@reduxjs/toolkit";

const adminSlice=createSlice({
    name:"Admin",
    initialState:false,
    reducers:{
        adminOn:(state,action)=>{
            return action.payload;
        },
        adminOff:()=>{
            return false;
        }
    }
})

export default adminSlice.reducer;
export  const{adminOn,adminOff}= adminSlice.actions;