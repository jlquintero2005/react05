import React, { useEffect,useState } from 'react'
import './efects.css'
import { Message } from './Message';


export const SimpleForm = () => {
  
    const [formstate, setFormstate] = useState({
        name: '',
        email: ''
    });
    const {name,email} = formstate;
 //los corchetes del final son para establecer que se ejecute cuando algoc ambie 
    useEffect(() => {
      // console.log('hey1');         
    },[]);

    useEffect(() => {
      //  console.log('email cambio');         
     },[email]);

    const handleUp =({target})=> {      
       setFormstate({
           ...formstate, 
           [target.name]: target.value
       });
    }
    return (
    <>
    <h1>useEffects </h1>
    <hr />
    <div className="form-group">
        <input type="text" name="name"  className='form-control' 
        placeholder='tu nombre' autoComplete='off' value={name} 
        onChange={handleUp}
        />
    </div>
    <div className="form-group">
        <input type="text" name="email"  className='form-control' 
        placeholder='email@gmail.com' autoComplete='off' value={email} 
        onChange={handleUp}
        />
    </div>
     {/* //si el name existe entonces muestra el componente */}
     {/* {name && <Message />} */}
     {(name==='123') && <Message />}
    </> 
  )
}
