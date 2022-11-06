import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'
import News from '../pages/News'
import Login from '../pages/Login'
import PrivateRouter from './PrivateRouter'
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes path='/' element={<PrivateRouter/>}>
            <Route path='/' element={<News/>}/>
        </Routes>
        <Route path="login" element={<Login/>}/>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
// eyup@ittalentturkey.com