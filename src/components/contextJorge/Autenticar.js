import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm';
import { UserContext } from './UserContext';

export const Autenticar = () => {
    const {datos,setDatos} = useContext(UserContext);
    const [{id,nam,correo},handleInputChange,reset] =  useForm(
        {
            id:'',
            nam:'',
            correo:''
        });      
    const handleSubmit= (e)=> {        
        e.preventDefault();        
        setDatos([...datos,{
            id: id, 
            nam: nam,
            correo: correo
        }]);
        reset();
    }
  return (    
            <form onSubmit={handleSubmit}>
                <h3 className='mb-4'> Introduce los datos por favor:</h3>
             <label htmlFor="">Entre el Id</label>   <input onChange={handleInputChange} type="text" name="id" value={id} />
             <label htmlFor="">Entre el Nombre</label>  <input onChange={handleInputChange} type="text" name="nam" value={nam} />
             <label htmlFor="">Entre el Correo</label>  <input onChange={handleInputChange} type="text" name="correo" value={correo} />
                <button className="btn btn-primary" type="submit">Agregar Datos</button>
            </form>          
    
  )
}
