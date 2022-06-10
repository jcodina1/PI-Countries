import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities, getCountryByContinent, postActivities } from '../../redux/Actions/actionsActivity';
//import { getCountries } from '../../redux/Actions/actionsCountry';
import './Formulario.css'

export default function Formulario(props){
    const dispatch=useDispatch()
    const pais=useSelector(state=>state.countries)
    const [errors, setErrors] = React.useState({});
    const [input,setInput]=React.useState({
      tipo:'',
      name:'',
      dificultad:'',
      duracion:'',
      temporada:'',
      
      
    })
const temporadas=['Verano', 'Otoño', 'Invierno', 'Primavera']
const [countries,setCountries]=useState([])
const continentes=['africa','europe','south America','north America','asia','Antarctica']
const type=['Rural', 'Gastronimico','Cultural','Musical', 'Deportivo','Maritimo','Extremo','Negocios','Urbano','Educativo','Social','Religioso','Lujo']
const handeChangeContinent=(e)=>{
  dispatch(getCountryByContinent(e.target.value,0,250))
}
const eliminarC=(pais)=>{
  countries.splice(countries.indexOf(pais),1)
  setCountries([...countries])
}
const handeChangeCountries=(e)=>{
  setCountries([...countries,e.target.value])
  setErrors(validate({
    ...countries,...input,
    [e.target.name]: e.target.value
  }));
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
      dispatch(getAllActivities(0,2))
      // //window.location.reload()
    }


    return(
    
      <div className="container-form">
  <h1 className='titulo'>&bull; Agregar Actividad&bull;</h1>
  <div className="underline">
  </div>
        
        <form className='form' onSubmit={(e)=>handleOnSubmit(e)}>
          <div className='input-text'>
            {/* TIPO */}
          <div className="input-left">
          {errors && errors.tipo ? (<p className="danger"> {errors.tipo}</p>):''}
      
          
           <select
                className='input-form'
                name="tipo" 
                onChange={(e)=>handleInputChange(e)}
                defaultValue={1}
                >
                <option value={1} >Seleccione un pais</option>
                    {type.map(e => <option key={e.id} value={e.id}  >{e.name}</option>)}
                </select>
          {/* DIFICULTAD */}  
          {errors && errors.dificultad ? (<p className="danger"> {errors.dificultad}</p>):''}
          <input
          className='input-form'
          type='number'
          
          name="dificultad"
          placeholder="Dificultad"
          value={input.dificultad}
          onChange={(e)=>handleInputChange(e)}
          />
             
    </div>

          {/* NAME */}
         
           <div className="input-right">
          {errors && errors.name ? (<p className="danger"> {errors.name}</p>):''}
          <input
          className='input-form'
          type='text'
          name="name"
          placeholder="Nombre de la actividad"
          value={input.name}
          onChange={(e)=>handleInputChange(e)}
          />
          {/* DURACION */}
                   
          {errors && errors.duracion ? (<p className="danger"> {errors.duracion}</p>):''}
          <input
          className='input-form'
          type='text'          
          name="duracion"
          placeholder="Duracion"
          value={input.duracion}
          onChange={(e)=>handleInputChange(e)}
          />

                 
          
          
          
          </div></div>

          {/* temporada */}          
        <div className='temporada'>
        {errors && errors.temporada ? (<p className="danger"> {errors.temporada}</p>):''}
        <select
                className='input-form'
                name='temporada' 
                onChange={(e)=>handleInputChange(e)}
                value={input.temporada}
                >
                <option value={1}  >Select an option</option>
               {temporadas.map(e=> <option key={e} value={e}>{e}</option>)}
                </select>
          
        </div>

 {!props.pais?<><div className='selctectylist'>
  <div className="input-left">
  {errors && errors.countries ? (<p className="danger"> {errors.countries}</p>):''}
  <select
                className='input-form'
                name='continente ' 
                onChange={(e)=>handeChangeContinent(e)}
                
                >
                <option value={1} >Selecciona un continente</option>
                {continentes.map(e=><option key={e} value={e}>{e}</option>)}
                
                
                </select>
                </div>
                <div className="input-right">
          <select
                className='input-form'
                name='countries' 
                onChange={(e)=>handeChangeCountries(e)}
                defaultValue={1}
                >
                <option value={1} >Seleccione un pais</option>
                    {pais.map(e => <option key={e.id} value={e.id}  >{e.name}</option>)}
                </select></div>
 </div>
              <div className='lista'>{countries.map(c=><div  key={c} className='item'><p className='' onClick={()=>eliminarC(c)}>⮾</p><li className='' >{c}</li></div>)}</div></>
                :<div className='selctectylist'>
                  <select
                className='input-form'
                name='countries' 
                onChange={(e)=>handeChangeCountries(e)}
               value={countries[0]}
                >
                <option value={1} >Select an option</option>
                <option key={props.id}  value={props.id}>{props.pais}</option>
                </select>
                <div className='lista'>{countries.map(c=><div className='item' key={c}><p className='' onClick={()=>eliminarC(c)}>⮾</p><li className='' >{c}</li></div>)}</div>
                </div>}
                
          
          <input className="form_button" name="submit" type="submit" value="Enviar" disabled={Object.keys(errors).length===0?false:true}/>
        </form>  
        
        
        
    
    </div>
    
    )}
    export function validate(input) {
      let errors = {};
      
      if (!input.tipo) {
        errors.tipo = 'Falta el tipo de actividad';
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
      if (!input.countries) {
        errors.countries = 'Elegir el pais ';
      } 
   
    
      return errors;
    };
    