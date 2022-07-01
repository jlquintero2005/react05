import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreeen = () => {
 //aqui desesctructuro y obtengo solo el user de esa funcion
const {user} = useContext(UserContext);
return (
    <div>
          <h1>HomeScreeen</h1>
          {/* <pre>{JSON.stringify(user)}</pre> */}
          <h1>Id: {user.id}</h1>
          <h1>Nombre:  {user.nombre}</h1>
          <h1>Email:  {user.email}</h1>
    </div>
  )
}
