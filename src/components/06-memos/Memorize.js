import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/efects.css'
import { Small } from './Small'

export const Memorize = () => {

  const {counter,increment} =  useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Counter: <Small value={counter} /></h1>
      <hr />
      <button onClick={increment} className="btn btn-primary" type="button">Sumar</button>
      <button onClick={()=> setShow(!show) } className="btn btn-outline-success" type="button">Hide/Show {JSON.stringify(show)}</button>
   
    </div>
  )
 

}
