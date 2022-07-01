import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { UserContext } from './UserContext'

export const Acerca = () => {

   const [{id},handleInputChange,reset] =  useForm({
     id: ''
   });
  const {datos,setDatos} = useContext(UserContext);

  const handleDelete = (e) => {
    e.preventDefault();
    setDatos( datos.filter(da=> da.id !== id) ); 
    reset();
  }
  
  return (
    <form onSubmit={handleDelete}>
        <h2>Cerrar Sesion</h2>
        <input type="text" onChange={handleInputChange} name="id" value={id} />
        <button  className="btn btn-secondary" type="submit">Cerrar Sesion </button>           
    </form>
  )
}
