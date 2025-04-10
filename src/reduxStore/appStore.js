import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice" //you can take any name in the place of userReducer but remember plac eit in reducer obj of appstore
import loginReducer from "./loginLogoutSlice";
import feedReducer from "./feedSlice";
import FriendReducer from "./friendsSlice";
import frdRequestReducer from "./frdRequestSlice";
import adminReducer from "./adminSlice";



const appStore=configureStore({
    reducer:{
        user:userReducer, 
        login:loginReducer, 
        feed:feedReducer,  //feed:{initialState:null} after dispatch an action the initialState will change will new value. 
        friend:FriendReducer,
        frdRequest:frdRequestReducer,
        admin:adminReducer
    }
})
export default appStore;
 
//so we have configureStore->provider->createSlice->connectSliceToStore->