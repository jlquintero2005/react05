import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const Inicio = () => {

   const {datos} = useContext(UserContext);
    return (
    <div>
         <h1 className='m-3'>Pagina Principal </h1>        
    <table className="table table-striped">
         <thead>
            <tr>
            <th scope="col">#</th>           
            <th scope="col">Nombre</th>  
            <th scope="col">Correo</th>           
            </tr>
        </thead> 
         <tbody>
          {
              datos.map(dat => (
                <tr key={dat.id}>
                <td >{dat.id}</td>
                <td>{dat.nam}</td>  
                <td>{dat.correo}</td>        
                </tr> 
              ))
          }
          
                    
        </tbody> 
        </table>

    </div>
  )
}
