import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteActivity, deleteCountryActivity, getAllActivities, updateActivity } from '../../../redux/Actions/actionsActivity.js'
import { validate } from '../../Activity/Formulario.js'
import  FormularioCountry  from '../../Activity/FormularioCountry.js'
import './activityCard.css'

export default function ActivitiyCard({id,tipo,name,difficulty,season,countries,duration}){
   
const [mostrarForm,setmostrarForm]=useState(false)
const[editar,setEditar]=useState(false)
const dispatch=useDispatch()
const [errors, setErrors] = useState({});
const [input,setInput]=useState({
        name:name,
        tipo:tipo,
        dificultad:difficulty,
        duracion:duration,
        temporada:season,
        
        
        })
const temporadas=['Verano', 'Otoño', 'Invierno', 'Primavera']
const tipoAct=['Rural', 'Gastronimico','Cultural','Musical', 'Deportivo','Maritimo','Extremo','Negocios','Urbano','Educativo','Social','Religioso','Lujo']
const handleInputChange=(e)=>{
        setInput({
        ...input,
        [e.target.name]: e.target.value
        })
        setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
        }));
        
        }

if(editar){
        return(
                <>
                <div className='formycard'>
                <div className="contenedor-activity">
          
        <div className="card_detail-actv">
        <div className="name-actv">Name:</div>
         {errors && errors.name ? (<p className="danger"> {errors.name}</p>):''}
          <input
          className='input-form-edit'
          type='text'
          name="name"
          placeholder="Nombre de la actividad"
          
          value={input.name}
          onChange={(e)=>handleInputChange(e)}
          />    
        <div className="name-actv">ID:</div>
        <p className="p-actv">{id}</p>
        <div className="name-actv">Tipo:</div>
        {errors && errors.tipo ? (<p className="danger"> {errors.tipo}</p>):''}
      
          
      <select
           className='input-form-edit'
           name="tipo" 
           
           onChange={(e)=>handleInputChange(e)}
           
           value={input.tipo}
           >
           
               {tipoAct.map(e => <option key={e} value={e}  >{e}</option>)}
           </select>         
           <div className="name-actv">Dificuldad:</div>
           {errors && errors.dificultad ? (<p className="danger"> {errors.dificultad}</p>):''}
          <input
          className='input-form-edit'
          type='number'
          
          name="dificultad"
         
          
          value={input.dificultad}
          onChange={(e)=>handleInputChange(e)}
          />
           <div className="name-actv">Season:</div>
           <select
                className='input-form-edit'
                name='temporada' 
                onChange={(e)=>handleInputChange(e)}
               
                value={input.temporada}
                >
                
               {temporadas.map(e=> <option key={e} value={e}>{e}</option>)}
                </select>
           <div className="name-actv">Duracion:</div>
           {errors && errors.duracion ? (<p className="danger"> {errors.duracion}</p>):''}
          <input
          className='input-form-edit'
          type='text'          
          name="duracion" 
          value={input.duracion}
          onChange={(e)=>handleInputChange(e)}
          />  
           
           
          <div className='update-cancel'>
          <p onClick={()=>{
                new Promise((resolve)=>{
                        resolve(dispatch(updateActivity(input.tipo,input.name,input.dificultad,input.duracion,input.temporada,id)))
                   }).then(()=>{setEditar(false)}).then(()=>{dispatch(getAllActivities())})     
                }} className='update'>Actualizar</p>
        <p className='cancel-edit' onClick={()=>{setEditar(false)}}>Cancel</p>
          </div>
           
        
        </div>
        
        </div>    
        
                </div>
        </>
            
        )
        }else if(!editar){
              return(
                <>
                <div className='formycard'>
                <div className="contenedor-activity">        
        <div className='edit'><p className='cerrar' onClick={
                ()=>{
                        new Promise((resolve)=>{
                                resolve(dispatch(deleteActivity(id)))
                           }).then(()=>{setEditar(false)}).then(()=>{dispatch(getAllActivities())})
                }
        }>⮾</p><p className='p-editar' onClick={()=>setEditar(true)}>Editar</p></div>
        <div className="titulo-actividad">{name}</div>
        <div className="card_detail-actv">
        <div className="name-actv">ID:</div>
           <p className="p-actv">{id}</p>
        <div className="name-actv">Tipo:</div>
           <p  className="p-actv">{tipo}</p>           
           <div className="name-actv">Dificuldad:</div>
           <p className="p-actv">{difficulty}</p>
           <div className="name-actv">Season:</div>
           <p className="p-actv">{season}</p>
           <div className="name-actv">Duracion:</div>
           <p className="p-actv">{duration} Min</p>
           <div className="name-actv">Countries:</div>
           <div className='lista'>
           {countries.map(e=><div className='item' key={e.id}><p className='deleteCoun' onClick={ ()=>{
                new Promise((resolve)=>{
                        resolve(dispatch(deleteCountryActivity(e.id,id)))
                   }).then(()=>{dispatch(getAllActivities())})    
                }}>⮾</p><li >{e.name}</li></div>)}
           </div>
           <p onClick={()=>setmostrarForm(true)} className='more-id'>Agregar mas paises</p>
           
        
        </div>
        
        </div>
        {mostrarForm?<div className='form-cerrar'><p className='cerrar' onClick={()=>setmostrarForm(false)}>⮾</p><FormularioCountry id={id}/> </div>:''}
        
                </div>
        </>
              )
        }
  }