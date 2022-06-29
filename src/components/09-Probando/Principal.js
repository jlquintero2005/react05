import React,{useEffect, useReducer, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Add } from './Add'
import { List } from './List'
import { Modal } from './Modal'
import { RenderForm } from './RenderForm'
import './style.css'

export const Principal = () => {
  
  const Initial = () => {
        return JSON.parse(localStorage.getItem('Datos')) || [];
  }      
 const [todo, dispatch] = useReducer(RenderForm, [] , Initial);
 //este metodo escucha mientras no cambie el todo no hace nada, si cambia modifa los valores en el localstorage
  useEffect(() => {
   localStorage.setItem('Datos',JSON.stringify(todo))
  }, [todo])
  
 const handleAddNew = (dato)=> {       
    dispatch({
        type: 'add',
        payload: dato
    })
 }

const handleDelete = (id)=> {
    dispatch({
        type: 'delete',
        payload: id
    })  
}
const handleToogle = (id) => {
    dispatch({
        type: 'togle',
        payload: id
    })   
}



  return (
    <div>
       <h4>Pagina Principal: {todo.length}</h4>
       <hr />
      <div className='row'>
          <div className='col-8'>
            <List  handleDelete={handleDelete} handleToogle={handleToogle} todo={todo}  />
          </div>
          <div className='col-4'>
            <Add  handleAddNew={handleAddNew}  />
          </div>
      </div>    
       
       
      <Modal handleAddNew={handleAddNew}/>  
     
      <button  className="btn btn-primary" data-target="#modal1" data-toggle="modal" type="button">Modal</button>
      
    </div>
  )
}
