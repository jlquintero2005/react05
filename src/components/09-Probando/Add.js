import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useForm } from '../../hooks/useForm';

export const Add = ({handleAddNew}) => {

    const [{desc},handleInputChange,reset] = useForm ({desc:''});


    const {counter,increment} = useCounter();
    const handleSubmit= (e)=>{
      e.preventDefault();
      if(desc.trim().length <=1 ){
          return ;
      }
      const t2 = {
        id: new Date().getTime(), 
        desc: desc,
        done: false
    }
       handleAddNew(t2);
       reset(); 
       increment();        
    }      

  return (
        <form className='form-group' onSubmit={handleSubmit}>
                <h5>Agregar Nuevos Elementos</h5>
                <hr/>
                <input type="text" name="desc" value={desc} onChange={handleInputChange} className="form-control" placeholder="Aprender" />
              
                <button type="submit" name="" id="" className="btn btn-primary btn-block mt-2" >
                Agregar </button>  
                <hr />
                <h2>Cantidad de Eventos: {counter}</h2>                             
        </form>
  )
}
