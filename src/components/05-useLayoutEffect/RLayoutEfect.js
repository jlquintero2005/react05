import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
//import '../02-useEffect/efects.css';
import { useCounter } from '../../hooks/useCounter';
import './layaout.css'
export const RLayoutEfect = () => {

    const {counter, increment}  =   useCounter(1); 
    const {data} = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`);

    //esto significa q si data no es null entonces desectructure el valor de data.    
   const {name} = !!data && data;
   const [witd, setWitd] = useState({});

   const pTag = useRef ();
   useLayoutEffect(() => {
    setWitd(pTag.current.getBoundingClientRect());    
   }, [name])
  
return (
    <div>
        <h1>Custom Hooks!!!!</h1>
        <hr />         
              <blockquote className='blockquote text-right'>
                 <p ref={pTag} className='mb-0'>{name}</p>                               
              </blockquote>
              <pre> {JSON.stringify(witd, null, 3)}</pre>  
        
   <button onClick={increment} type="button" className="btn btn-primary">Siguiente</button>
    
    </div>
  )
}