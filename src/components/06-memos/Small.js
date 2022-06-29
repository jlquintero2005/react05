
//el memo memoriza algo, en este caso solo renderiza este componente si cambia el state del value
import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('probando');
  return (    
        <small>{value}</small>   
  )
})
