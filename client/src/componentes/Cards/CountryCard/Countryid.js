//import { Link } from 'react-router-dom'
import { useState } from 'react';

import Formulario from '../../Activity/Formulario';
import './CountryId.css'

export default function CountryCardId(props){
    const{name, continent,id,capital,subRegion,area,population,activities,img}=props
const [mostrarForm,setmostrarForm]=useState(false)



  
return(
<div className='global-id'>
   <div className='contenedor-id'>  
   <div className="card-id">
   <div className='img-id'>
                <img src={img} className='bandera' alt="muestra" />     
                </div>
        <div className="card__details-id">
        <div className="name-id">ID:</div>
            <p className='p-id'>{id}</p>
            <div className="name-id">Nombre:</div>
            <p className='p-id'>{name}</p>
            <div className="name-id">Continente:</div>
            <p className='p-id'>{continent}</p>
            <div className="name-id">Capital:</div>
            <p className='p-id'>{capital}</p>
            <div className="name-id">Sub region:</div>
            <p className='p-id'>{subRegion}</p>
            <div className="name-id">Area:</div>
            <p className='p-id'>{area} KM<sup>2</sup></p>
            <div className="name-id">Poblacion:</div>
            <p className='p-id'>{population}</p>
            <div className="name-id">Actividades:</div>
            {Array.isArray(activities)?<>
            {activities.map(e=> <li key={e.id}>{e.name}</li>)}
            <p onClick={()=>setmostrarForm(true)} className='more-id'>Agregar mas actividades</p>
            </>:
            <p onClick={()=>setmostrarForm(true)} className='more-id'>Agregar Actividades</p>}       
      </div>
   </div>
    </div>
        {mostrarForm?<div className='formulario-id'><p className='cerrar-id' onClick={()=>setmostrarForm(false)}>⮾</p><Formulario pais={name} id={id}/></div>:''}
  
   </div>
)
}