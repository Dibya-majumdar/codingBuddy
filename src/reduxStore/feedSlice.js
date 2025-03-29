import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:"feedSlice",
    initialState:null,
    reducers:{
        addFeedData:(state,action)=>{
            return action.payload;
        },
        removeFeedData:(state,action)=>{
            const data=state.filter((val)=>val._id!=action.payload);
            return data;
        }
    }
})
export default feedSlice.reducer;
export const{addFeedData,removeFeedData}=feedSlice.actions;