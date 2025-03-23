import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import appStore from "./reduxStore/appStore";
import { Provider } from "react-redux";
const App=()=>{


  return (
     <>
   <Provider store={appStore}>
 <BrowserRouter basename="/">
 <Routes>
    <Route path="/" element={<Body/>}>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/feed" element={<Feed/>}></Route>
      <Route path="/profile" element={"profile page"}></Route>
    </Route>
    
 </Routes>
 </BrowserRouter>
 </Provider>
    </>
    );
  
};
export default App;