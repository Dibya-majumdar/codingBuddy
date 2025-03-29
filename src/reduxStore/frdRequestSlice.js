import { createSlice } from "@reduxjs/toolkit";


const fredRequestSlice=createSlice({
    name:"FriendRequestSlice",
    initialState:null,
    reducers:{
        requestComes:(state,action)=>{
            return action.payload;
        },
       
    }
});
export default fredRequestSlice.reducer;
export const{requestComes}=fredRequestSlice.actions;