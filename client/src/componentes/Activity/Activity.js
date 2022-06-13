import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllActivities } from "../../redux/Actions/actionsActivity";
import ActivitiyCard from "../Cards/activityCard/activityCard";
import './Activity.css'
import { Navbar } from "../Navbar/NavBar";
import Formulario from "./Formulario";
import imagen from '../../assets/VAyR.gif'
import { Paginacion } from "../Paginacion/paginacion";

export default function Activity(){
    const dispatch= useDispatch()
    const actividades=useSelector(state=>state.activities)
    
    useEffect(()=>{
    
        
        dispatch(getAllActivities(0,2))
        
        
    },[dispatch])

    
    if(actividades){
        return(
       <>
            <Navbar/>
            <div className="global-activity">
            
             <div className="contenedor-pg">
            <Paginacion/>
                 
           <div className="contenedor-activities">
           {actividades.length===0?<h1>'NO HAY ACTIVIDADES'</h1>:actividades.map(a=><ActivitiyCard
                    key={a.id}
                    id={a.id}
                    tipo={a.tipo}
                    name={a.name}
                    difficulty={a.difficulty}
                    season={a.season}
                    countries={a.countries}
                    duration={a.duration}
                    />)}
           </div>
            </div>
                    <div className='formulario-actv'>
                    <Formulario />

                    </div>
                </div>            
        </>
    )
}else{
    return(
        <div className="load">
        <img src={imagen} alt='cargando'/>
            </div>
        )
    }
}