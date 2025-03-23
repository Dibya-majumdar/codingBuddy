import { createSlice } from "@reduxjs/toolkit";


//line->(8)userSlice will get a object which contains reducer(function which combines all the reducer functions stay indide the reducers object ) ,and actions will store here(actions means the name ->addUser,removeUser).so at last we have to export the reducer and actions

 // line->(10)cause we only can get a user thats why at initial state we want null then when get data we will replace it .that's why we take as null as defalut value .it means at firat no value (user) will present

const userSlice=createSlice({  
    name:"user",
    initialState:null, 
    reducers:{
        addUser:(state,action)=>{
            return action.payload;

        },
        removeUser:(state,action)=>{
            return null;

        }
    }

})

export default userSlice.reducer;
export const{addUser,removeUser} =userSlice.actions;