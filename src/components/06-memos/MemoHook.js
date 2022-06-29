import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/efects.css'


export const MemoHook = () => {

  const {counter,increment} =  useCounter(100);
  const [show, setShow] = useState(true);


 const memoProcesoPesado =  useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div> 
      <h1>Memo Hook:<small>{counter}</small> </h1>
      <hr />
      <button onClick={increment} className="btn btn-primary" type="button">Sumar</button>
      <button onClick={()=> setShow(!show) } className="btn btn-outline-success" type="button">Hide/Show {JSON.stringify(show)}</button>
     <p> {memoProcesoPesado}</p>
    </div>
  )
 

}
