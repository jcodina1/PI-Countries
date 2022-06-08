import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const Navbar = () => {
    const mensaje= useSelector(state=>state.mensaje)


    return (
        <>
        <div className="navbar">
                     
            
                     <Link className="item-nav-home" to="/home">HOME</Link>
                     <Link className="item-nav" to='/activity'>Actividad</Link>               
                     
                             
                                
             </div>
             {mensaje?<h1 className='mensaje'>{mensaje.Msg}</h1>:''}
        </>
    )
}

