import { createSlice } from "@reduxjs/toolkit";


const fredRequestSlice=createSlice({
    name:"FriendRequestSlice",
    initialState:null,
    reducers:{
        requestComes:(state,action)=>{
            return action.payload;
        },
        removeFrd:(state,action)=>{
            const data=state.filter((val)=>val._id !=action.payload);
            return data;
        }
       
    }
});
export default fredRequestSlice.reducer;
export const{requestComes,removeFrd}=fredRequestSlice.actions;