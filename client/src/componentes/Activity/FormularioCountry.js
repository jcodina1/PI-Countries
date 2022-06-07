import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postCountryActivity } from '../../redux/Actions/actionsActivity';
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
        e.preventDefault() 
        dispatch(postCountryActivity(countries,id))
        window.location.reload()
    }
    console.log(id);
    return(
        <>
        <form onSubmit={(e)=>handleOnSubmit(e)}>
  <div className="input-left">
  <select
                className='input-form'
                name='continente ' 
                onChange={(e)=>handeChangeContinent(e)}
                defaultValue=''
                >
                <option value='' >Selecciona un continente</option>
                {continentes.map(e=><option key={e} value={e}>{e}</option>)}
                
                
                </select>
                </div>
                <div className="input-right">
          <select
                className='input-form'
                name='countries' 
                onChange={(e)=>handeChangeCountries(e)}
                defaultValue=''
                >
                <option value='' >Select an option</option>
                    {pais.map(e => <option key={e.id} value={e.id}  >{e.name}</option>)}
                </select></div>
                {countries.map(e=><li key={e}>{e}</li>)}
                <input className="form_button" name="submit" type="submit" value="Enviar" />
</form></>
    )
}