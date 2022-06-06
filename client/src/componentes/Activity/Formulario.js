import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActivities } from '../../redux/Actions/actionsActivity';
import { getCountries } from '../../redux/Actions/actionsCountry';
import './Activity.css'

export default function Formulario(){
    const dispatch=useDispatch()
    const pais=useSelector(state=>state.countries)
    const actividad=useSelector(state=>state.activity)
    console.log(actividad);
  const [errors, setErrors] = React.useState({});
  const [input,setInput]=React.useState({
    tipo:'',
    name:'',
    dificultad:0,
    duracion:0,
    temporada:'',
    
  })
const [countries,setCountries]=useState([])
const continentes=['africa','europe','south America','north America','asia','Antarctica']
const handeChangeContinent=(e)=>{
  dispatch(getCountries('continent',e.target.value,0,250))
}
const handeChangeCountries=(e)=>{
  setCountries([...countries,e.target.value])
}
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
    const handleOnSubmit=(e)=>{
        e.preventDefault() 
        dispatch(postActivities(input.tipo,input.name,input.dificultad,input.duracion,input.temporada,countries))
        window.location.reload()
    }
console.log(input,countries);

//console.log(errors)

    return(
    
      <div className="cardb">
          <div className="card__headerb">
            <h3>Agragar Actividad</h3>            
          </div>
        <div className="card__bodyb">
        <form className='form' onSubmit={(e)=>handleOnSubmit(e)}>
            {/* TIPO */}
          {errors && errors.tipo && (<p className="danger">{errors.tipo}</p>)}
          <label className="label">Tipo de Actividad:</label><br/>
          <input
          className='input'
          type='text'
          name="tipo"
          placeholder="Tipo de actividad"
          value={input.tipo}
          onChange={(e)=>handleInputChange(e)}
          /><br/>

          {/* NAME */}
          <label className="label">Nombre de la Actividad:</label><br/>
          {errors && errors.name && (<p className="danger">{errors.name}</p>
          )}
          <input
          className='input'
          type='text'
          name="name"
          placeholder="Nombre de la actividad"
          value={input.name}
          onChange={(e)=>handleInputChange(e)}
          /> <br/>

          {/* DIFICULTAD */}          
          <label className="label">Dificultad:</label><br/>
          {errors && errors.dificultad && (<p className="danger">{errors.dificultad}</p>)}
          <input
          className='input'
          type='range'
          min='1'
          max='5'
          name="dificultad"
          placeholder="Dificultad"
          value={input.dificultad}
          onChange={(e)=>handleInputChange(e)}
          /><br/>
          
          {/* DURACION */}
          <label className="label">Duracion:</label><br/>
          {errors && errors.duracion && (<p className="danger">{errors.duracion}</p>)}
          <input
          className='input'
          type='text'
         
          name="duracion"
          placeholder="Dificultad"
          value={input.duracion}
          onChange={(e)=>handleInputChange(e)}
          /><br/>

          {/* temporada */}
          <label className="label">Teporada:</label><br/>
          {errors && errors.temporada && (<p className="danger">{errors.temporada}</p>)}
          <input
          className='input'
          type='text'
          name="temporada"
          placeholder="temporada"
          value={input.temporada}
          onChange={(e)=>handleInputChange(e)}
          /><br/>

  <div className='select'>
  <select
                className='select'
                name='continente ' 
                onChange={(e)=>handeChangeContinent(e)}
                defaultValue=''
                >
                <option value='' >Selecciona un contient</option>
                {continentes.map(e=><option key={e} value={e}>{e}</option>)}
                
                
                </select>
          <select
                className='select'
                name='countries' 
                onChange={(e)=>handeChangeCountries(e)}
                defaultValue=''
                >
                <option value='' >Select an option</option>
                    {pais.map(e => <option key={e.id} value={e.id}  >{e.name}</option>)}
                </select>
  </div>
               {countries.map(e=><li key={e}>{e}</li>)}
                
          
          <input className="submit" name="submit" type="submit" value="Enviar" disabled={Object.keys(errors).length===0?false:true}/>
        </form>   
    </div>
    </div>
    
    )}
    export function validate(input) {
      let errors = {};
      if (!input.tipo) {
        errors.tipo = 'Debeespicificar el tipo de actividad';
      }
      if (!input.name) {
        errors.name = 'Debe escribir el nombre ';
      } 
      if (!input.dificultad) {
        errors.dificultad = 'Recuerda Seleccionar la dificultad';
      }else if(/[^1-5]/.test(input.dificultad)){
          errors.dificultad='La dificultad debe estar en un rago de 1-5'
        }
      if (!input.duracion ) {
        errors.duracion = 'Recuerda escribir la duracion ';
      }else if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(input.duracion)){
        errors.duracion='La duracion debe escribirse con el formato HH:MM ejemplo'
      }
      if (!input.temporada) {
        errors.temporada = 'Elegir la temporda ';
      } 
     
    
      return errors;
    };