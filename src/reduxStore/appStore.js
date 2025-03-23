import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice" //you can take any name in the place of userReducer but remember plac eit in reducer obj of appstore
import loginReducer from "./loginLogoutSlice";



const appStore=configureStore({
    reducer:{
        user:userReducer, 
        login:loginReducer,  
    }
})
export default appStore;
 
//so we have configureStore->provider->createSlice->connectSliceToStore->