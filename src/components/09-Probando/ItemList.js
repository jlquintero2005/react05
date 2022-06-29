import React from 'react'

export const ItemList = ({tod,i,handleToogle,handleDelete}) => {
  return (
    <li key={tod.id} className={`${ i>=2 ? 'list-group-item list-group-item-primary' : 'list-group-item list-group-item-danger'  }`}> 
        <div className='row dis'>
            <div className='col-4'>
                    <p className={`${tod.done ? 'marcado' : 'desmarcado'}`} 
                    onClick={()=>handleToogle(tod.id)}>{i+1 }. {tod.desc}</p>   
            </div>
                <div className='col-4'> 
                <button className='btn btn-danger' onClick={()=>handleDelete(tod.id)}> Borrar</button>                        
                </div>    
        </div>              
   </li>
  )
}
