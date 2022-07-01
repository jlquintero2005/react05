import React, { useState } from 'react'
import { Rutas } from './Rutas'
import { UserContext } from './UserContext'

export const Main = () => {
    const [datos, setDatos] = useState([]);
  return (    
          <UserContext.Provider value={{datos,setDatos}} >
                <Rutas />
          </UserContext.Provider>         
  )
}
