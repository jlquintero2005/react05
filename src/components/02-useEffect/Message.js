import React, { useEffect, useState } from 'react'

export const Message = () => {
 
    const [corde, setCorde] = useState({x:0,y:0});
    const {x,y} = corde;

 useEffect(() => {

    const MouseMov= (e)=> {
        const cords = {x:e.x, y:e.y};
        setCorde(cords);  
       // const {x,y} = e;
       // setCorde({x:x,y:y});      
        
    }
 window.addEventListener('mousemove',MouseMov);

  /* window.addEventListener('mousemove', (e)=> {
       const {x,y} = e;
       console.log('Eje X: '+x+' / ' + 'Eje Y ' + y);
       const cords = {x:e.x, y:e.y};
       console.log(cords);
   })*/
     return () => {
         //elimina el evento disparado antes
        window.removeEventListener('mousemove',MouseMov);
     };
 }, []);
  
    return (
    <div>
        <h3 >Eres genial</h3>
        <p>X: {x} , Y: {y}</p>
    </div>
  )
}
