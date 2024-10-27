import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import Signin from "../compontents/Signin";
import Signup from "../compontents/Signup";
import Inventry from "../compontents/Inventry";
import Home from "../compontents/Home";
import Header from "../compontents/Header";
import Dashboard from "../compontents/Dashboard";
import Create from "../compontents/Create";

import Customer from "../compontents/Customer";

function AppRouter() {
    return <Routes>
        <Route path='/Create' element={<>
        <Header/><Create/></>}/>
        <Route path='/dashboard' element={<><Header/><Dashboard/></>}/>
        <Route path='/inventry/:id' element={<><Header/><Inventry/></>}/>
  
        <Route path='/home' element={ <><Header/><Home/></>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/customer' element={<><Header/><Customer/></>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/*' element={<Navigate to = '/'/>}/>

    </Routes>
}
export default AppRouter