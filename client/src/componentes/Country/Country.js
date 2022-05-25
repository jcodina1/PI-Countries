import React from "react";
import { Link } from "react-router-dom";
export default function Country(){
    return(
        <div>
            <h1>Hola Aqui vemos los paises</h1>
            <Link to='/home'>Home</Link>
        </div>
    )
}