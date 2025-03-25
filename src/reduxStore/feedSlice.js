import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:"feedSlice",
    initialState:null,
    reducers:{
        addFeedData:(state,action)=>{
            return action.payload;
        },
        removeFeedData:()=>{
            return null;
        }
    }
})
export default feedSlice.reducer;
export const{addFeedData,removeFeedData}=feedSlice.actions;