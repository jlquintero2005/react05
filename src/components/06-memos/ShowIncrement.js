import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
  console.log('hola mundo');
    return (
    <button onClick={()=> {
        increment(5);
    }} className="btn btn-primary" type="button">Button</button>
  )
})