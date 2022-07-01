import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
 
   const {setUser} = useContext(UserContext);
    const n1 ={
      id: '01',
      nombre: 'Jorge Luis',
      email: 'jlquin@gmail.com'
    }
  return (
    <div>
      <h1>Datos del usuario</h1>
      <hr />
      <button onClick={()=> setUser(n1)} className="btn btn-info" type="button">Enviar Datos</button>
    </div>
  )
}
