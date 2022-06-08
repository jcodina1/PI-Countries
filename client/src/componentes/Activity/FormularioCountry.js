import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities, postCountryActivity } from '../../redux/Actions/actionsActivity';
import { getCountries } from "../../redux/Actions/actionsCountry";

export default function FormularioCountry({id}){
    const pais=useSelector(state=>state.countries)
    const dispatch=useDispatch()    
    const [countries,setCountries]=useState([])
    const continentes=['africa','europe','south America','north America','asia','Antarctica']
    const handeChangeContinent=(e)=>{
        dispatch(getCountries('continent',e.target.value,0,250))
      }
      const handeChangeCountries=(e)=>{
        setCountries([...countries,e.target.value])
      }
      const handleOnSubmit=(e)=>{
        
        dispatch(postCountryActivity(countries,id))
        dispatch(getAllActivities(0,2))
        window.location.reload()
    }
    const eliminarC=(pais)=>{
      countries.splice(countries.indexOf(pais),1)
      setCountries([...countries])
    }
    return(
        <>
        <form className='form-paises' onSubmit={(e)=>handleOnSubmit(e)}>
        
  <select
                className='input-form'
                name='continente ' 
                onChange={(e)=>handeChangeContinent(e)}
                defaultValue=''
                >
                <option value='' >Selecciona un continente</option>
                
                
                {continentes.map(e=><option key={e} value={e}>{e}</option>)}
                </select>
                
          <select
                className='input-form'
                name='countries' 
                onChange={(e)=>handeChangeCountries(e)}
                defaultValue=''
                >
                <option value='' >Select an option</option>
                    {pais.map(e => <option key={e.id} value={e.id}  >{e.name}</option>)}
                </select>
                <div className='lista'>{countries.map(c=><li className='' key={c}>{c}<p className='' onClick={()=>eliminarC(c)}>⮾</p></li>)}</div>
                <input className="form_button" name="submit" type="submit" value="Enviar" />
</form></>
    )
}