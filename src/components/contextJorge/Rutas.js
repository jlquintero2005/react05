import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,    
    Navigate
  } from "react-router-dom";
import { Acerca } from './Acerca';
import { Autenticar } from './Autenticar';
import { Botones } from './Botones';
import { Inicio } from './Inicio';
export const Rutas = () => {
  return (
    <Router>
        <div>
            <Botones />
            <Routes> 
                <Route path='/' element={<Inicio/>}>Inicio </Route>
                <Route path='/autenticar' element={<Autenticar/>}>Autenticar </Route>
                <Route path='/acerca' element={<Acerca/>}>Acerca de </Route>
                <Route path='*' element={<Navigate to='/' />}  />    
            </Routes>
        </div>
    </Router>
  )
}
