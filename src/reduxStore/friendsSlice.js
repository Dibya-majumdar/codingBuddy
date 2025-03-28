import { createSlice } from '@reduxjs/toolkit'

const FriendSlice=createSlice({
    name:"connectionsORfriends",
    initialState:null,
    reducers:{
        addFriendsData:(state,action)=>{
            return action.payload;
        }
    }
})
export default FriendSlice.reducer;
export const{addFriendsData}=FriendSlice.actions;

