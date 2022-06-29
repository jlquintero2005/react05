import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description},handleInputChange,reset] = useForm({
        description: '' //este valor se tiene q llamar igual al name en el input de text
    }); 

    const handleSubmit = (e)=> {
      e.preventDefault();
      if(description.trim().length <= 1){
          return ;
      }
     const newTodo ={
          id: new Date().getTime(), 
          desc: description,
          done: false
     }       
     handleAddTodo(newTodo);
     reset();
     } 




  return (
      <>
    <h4 >Agregar Todo</h4>
    <hr />
    <form onSubmit={handleSubmit}>
                    <input type="text" className='form-control' name="description" 
                    placeholder="aprender..." value={description}
                    autoComplete='off' onChange={handleInputChange}    />
                    <button className="btn btn-outline-primary mt-1 btn-block" 
                    type="submit">Button</button>               
   </form>
   </>
  )
}
