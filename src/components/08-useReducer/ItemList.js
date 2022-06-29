import React from 'react'

export const ItemList = ({to,i,handleToggle,handleDelete}) => {
  return (
    <div>
         <li key={to.id} className="list-group-item" >
            <p className= {`${to.done ? 'complete' : 'uncomplete'}`} 
            onClick={()=>handleToggle(to.id)}>{i+1}. {to.desc} </p>               
            <button className="btn btn-danger" 
            type="button" onClick={()=>handleDelete(to.id)}>Borrar</button>
         </li>

    </div>
  )
}
