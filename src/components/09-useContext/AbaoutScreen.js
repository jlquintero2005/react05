import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AbaoutScreen = () => {

  const {user,setUser} = useContext(UserContext);
  return (
    <div>
        <h1>Hola about screen</h1>
        <h1>{user.nombre}</h1>
        <h2>{user.email}</h2>
        <hr />
        <button onClick={()=> setUser({})} className="btn btn-secondary" type="button">Logout</button>
    </div>
  )
}
