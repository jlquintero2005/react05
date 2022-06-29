import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/efects.css';
import { useCounter } from '../../hooks/useCounter';


export const MultipleCustomHook = () => {
   
    const {counter, increment}  =   useCounter(1); 
    const {loading,data} = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`);
    //esto significa q si data no es null entonces desectructure el valor de data.
    
   const {id,name} = !!data && data;
return (
    <div>
        <h1>Custom Hooks!!!!</h1>
        <hr />
        {
            //operador ternario 
            loading 
            ? 
            (
              <div className="alert alert-info text-center">
                Loading ....               
              </div>              
            )
            :
            (
               <blockquote className='blockquote text-right'>
                 <p className='mb-0'>{id}</p>
                 <footer className="blockquote-footer">{name}</footer>
               </blockquote>
            )
        }
   <button onClick={increment} type="button" className="btn btn-primary">Siguiente</button>
    
    </div>
  )
}
