import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () => {


    return (
        <div className="navbar">
                     
            
                <Link className="item-nav-home" to="/home">HOME</Link>
                <Link className="item-nav" to='/activity'>Actividad</Link>               
                
                        
                           
        </div>
    )
}

