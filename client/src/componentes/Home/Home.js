import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Hola Esta es home</h1>
            <Link to='/activity'>Actividad</Link>
            <br></br>
            <Link to='/country'>Pais</Link>
        </div>
    )
}
