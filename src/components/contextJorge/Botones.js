import React from 'react'
import { Link } from 'react-router-dom'

export const Botones = () => {
  return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to='' >Menu Principal</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link activeclassname="active" className="nav-link" to='/' >Inicio </Link>
                <Link activeclassname="active" className="nav-link" to='autenticar'>Autenticar</Link>
                <Link activeclassname="active" className="nav-link" to='acerca'>Acerca de </Link>               
            </div>
            </div> 
    </nav>
  )
}
