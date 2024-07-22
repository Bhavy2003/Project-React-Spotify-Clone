
import React from 'react';

import {  Routes, Route } from 'react-router-dom';


import "./App.css";

import Login from "./components/Login/Login";
import Main from "./components/MainCom/Main";
import Signup from './components/Signup/Signup';
import Main1 from './components/MainCom/Main1';
// import Scrolltop from './components/Scrolltop';
// import Scrolltop from './components/Scrolltop';



export default function App() {

  return (
    <>

        <Routes>
         
          <Route path="/" element={<Main/>} />
          {/* <Scrolltop/> */}
          <Route path="/m" element={<Main1/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
  
        </Routes>
    

    </>

  );
}
