import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const Navbar = () => {
    const mensaje= useSelector(state=>state.mensaje)
    const estado= useSelector(state=>state.countries)
    


    return (
        <>
        <div className="navbar">
                     
            
                     <Link className="item-nav-home" to="/home">HOME</Link>
                     <Link className="item-nav" to='/activity'>Actividad</Link>               
                     
                             
                                
             </div>
             {/* {Object.keys(mensaje).length<0?<h1 className='mensaje'>{mensaje.Msg}</h1>:''}
             {estado.length===0?<h1 className='mensaje'>El pais no se encuentra</h1>:''} */}
        </>
    )
}

