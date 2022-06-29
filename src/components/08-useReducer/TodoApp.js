import React, { useEffect, useReducer } from 'react'

import './styles.css'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {
  
    const init = () => {
        //este metodo si no encuentra valor inicial en el localstorage devuelve arreglo vacio
       return JSON.parse(localStorage.getItem('todos')) || []
       
          //  return [{
    //     id: new Date().getTime(), 
    //     desc: 'Aprender React',
    //     done: false
    //  }]  
    };
  //  const [todos,dispatch] = useReducer(todoReducer, initialState);
    const [todos,dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
       localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);
    
  const handleDelete = (id)=> {
    const action ={
        type: 'delete',
        payload: id
    }
    dispatch(action); 
  }

  //tachar los todos con el underline
  const handleToggle = (id) => {
       //otra forma de hacerlo mas rapido
       dispatch ({
           type: 'toggle',
           payload: id
       })
 }

    const handleAddTodo =(newTodo) => {
       dispatch({
            type: 'add',
            payload: newTodo              
       })
    }

 

  return (
    <div>
        <h1>Todo App: {todos.length}</h1>
        <hr />
       <div className='row'>
           <div className='col-7 ' >
               <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}   />
           </div>
           <div className='col-5' >
               
                <TodoAdd handleAddTodo={handleAddTodo}  />
            </div>  

       </div>
        
        
    </div>
  )
}
