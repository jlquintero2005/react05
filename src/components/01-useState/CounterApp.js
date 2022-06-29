import React,{useState} from 'react'
import './counter.css';

export const CounterApp = () => {
   const [state, setState] = useState({
       counter1: 10,
       counter2: 20,
       counter3: 30,
       counter4: 40
   });
   const {counter1,counter2} = state;
   const handlePlus = () => {        
    setState({
             ...state,
            counter1: counter1+1,          
         } );
   }
  return (
    <>
       <h1>Counter {counter1}</h1>
       <h1>Counter {counter2}</h1>
      
       <hr />
       {/* //esta forma haces la funcion implicita */}
       <button className='btn btn-warning' onClick={()=> {
          setState({
              //esto lo que hace es que mantiene todo lo del estado y solo 
              //cambia lo que se esta modificando, se llama operador express
              ...state,
              counter2: counter2-1,    
          })

       }}>-1</button>
       {/* //esta forma haces la funcion explicita aparte */}
       <button onClick={handlePlus} className='btn btn-primary'>+</button>
    </>
  )
}
