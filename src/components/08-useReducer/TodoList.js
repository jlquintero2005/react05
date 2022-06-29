import React from 'react'
import { ItemList } from './ItemList'

export const TodoList = ({todos,handleDelete,handleToggle}) => {
  return (
    <div>
            <ul className='list-group list-group-flush'>
                {
                    todos.map((to,i) => (
                      <ItemList key={to.id} to={to} i={i} handleDelete={handleDelete} handleToggle={handleToggle}   />
                     ))
                }
            </ul>



    </div>
  )
}
