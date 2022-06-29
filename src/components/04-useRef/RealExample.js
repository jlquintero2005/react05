import React,{useState} from 'react'
import '../02-useEffect/efects.css'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

export const RealExample = () => {
 
    const [show, setShow] = useState(false);
 
    return (
    <div>
        <h1>Real Example</h1>
        <hr />
        {/* //if show ==true entonces muestra el componente */}
        {show && <MultipleCustomHook />}
        
        <button            
            className="btn btn-success mt-5" 
            onClick={()=> {
            setShow(!show); //setshow tendra el valor opuesto de show
            }}> Mostrar
        </button>
    </div>
  )
}
