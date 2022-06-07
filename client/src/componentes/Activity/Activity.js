import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllActivities } from "../../redux/Actions/actionsActivity";
import ActivitiyCard from "../Cards/activityCard/activityCard";
import './Activity.css'
import { Navbar } from "../Navbar/NavBar";
import Formulario from "./Formulario";

export default function Activity(){
    const dispatch= useDispatch()
    const actividades=useSelector(state=>state.activities)
    
    useEffect(()=>{
    
        
        dispatch(getAllActivities())
        
        
    },[dispatch])

    
    return(
       <>
            <Navbar/>
        
            <div className="global-activity">
            
             <div className="contenedor-activities">
                 
            {actividades.length===0?<h1>'NO HAY ACTIVIDADES'</h1>:actividades.map(a=><ActivitiyCard
                    key={a.id}
                    id={a.id}
                    tipo={a.tipo}
                    name={a.name}
                    difficulty={a.difficulty}
                    season={a.season}
                    countries={a.countries}
                    />)}
            </div>
                    <div className='formulario-actv'>
                    <Formulario />

                    </div>
                </div>            
        </>
    )
}