import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import appStore from "./reduxStore/appStore";
import { Provider } from "react-redux";
import Profile from "./components/Profile";
import FriendList from "./components/FriendsList";
import FriendRequest from "./components/FriendRequest";
import Banner from "./components/Banner";
const App=()=>{


  return (
     <>
   <Provider store={appStore}>
 <BrowserRouter basename="/">
 <Routes>
    <Route path="/" element={<Body/>}>
    <Route path="/" element={<Banner/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/feed" element={<Feed/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/connections" element={<FriendList/>}></Route>
      <Route path="/connectionrequest" element={<FriendRequest/>}></Route>
    </Route>
    
 </Routes>
 </BrowserRouter>
 </Provider>
    </>
    );
  
};
export default App;