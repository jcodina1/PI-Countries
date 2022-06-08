import { useState } from 'react'
import  FormularioCountry  from '../../Activity/FormularioCountry.js'
import './activityCard.css'

export default function ActivitiyCard({id,tipo,name,difficulty,season,countries}){
   
  const [mostrarForm,setmostrarForm]=useState(false)
return(
    
        <>
        <div className='formycard'>
        <div className="contenedor-activity">
<div className="titulo-actividad">{name}</div>
<div className="card_detail-actv">
<div className="name-actv">Tipo:</div>
   <p  className="p-actv">{tipo}</p>
   <div className="name-actv">ID:</div>
   <p className="p-actv">{id}</p>
   <div className="name-actv">Dificuldad:</div>
   <p className="p-actv">{difficulty}</p>
   <div className="name-actv">Season:</div>
   <p className="p-actv">{season}</p>
   <div className="name-actv">Countries:</div>
   {countries.map(e=><li key={e.id}>{e.name}</li>)}
   <p onClick={()=>setmostrarForm(true)} className='more-id'>Agregar mas paises</p>
   

</div>

</div>
{mostrarForm?<div className='form-cerrar'><p className='cerrar' onClick={()=>setmostrarForm(false)}>⮾</p><FormularioCountry id={id}/> </div>:''}

        </div>
</>
    
)
}