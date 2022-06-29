import React from 'react'
import { ItemList } from './ItemList'

export const List = ({todo,handleToogle,handleDelete}) => {
  return (
    <ul className='list-group'>
            {
                todo.map( (tod,i)=> (
                   <ItemList key={tod.id} tod={tod} i={i} handleToogle={handleToogle} handleDelete={handleDelete}      />
                ))    
            }       
      </ul>

  )
}
