import React from 'react'
import {
    BrowserRouter as Router,
    Routes,//este era el switch version vieja
    Route,
    Navigate      
  } from "react-router-dom";

import { AbaoutScreen } from './AbaoutScreen';
import { HomeScreeen } from './HomeScreeen';
import { LoginScreen } from './LoginScreen';
import { Navbar } from './Navbar';

export const AppRouter = () => {
    return (

      <Router >
        <div>
           <Navbar />
           <Routes>
             <Route path='/' element={<HomeScreeen/>} />
             <Route path='/about' element={<AbaoutScreen/>} />
             <Route path='/login' element={<LoginScreen/>} />  
              <Route path='*' element={<Navigate to='/' />} />          
           </Routes>          
        </div>

      </Router>
      );

}
