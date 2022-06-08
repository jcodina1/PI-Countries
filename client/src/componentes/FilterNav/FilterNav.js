


import { useDispatch, useSelector} from "react-redux"
import {  getActivityByTipo } from "../../redux/Actions/actionsActivity"
import { getCountries} from "../../redux/Actions/actionsCountry"
import './FilterNav.css'
export const FilterNav = () => {
    

const dispatch=useDispatch()
const actividades=useSelector(state=>state.activities)
const orderAlpha=(AZ)=>{
    if(AZ==='AZ')dispatch(getCountries('orderAlpha','AZ',0,9))
    else if(AZ==='ZA')dispatch(getCountries('orderAlpha','ZA',0,9))   
}
const continentes=['africa','europe','south America','north America','asia','Antarctica']
const population=(population)=>{
    if(population==='mayor')dispatch(getCountries('population','mayor',0,9))
    else if(population==='menor')dispatch(getCountries('population','menor',0,9))
}

const handeChangeContinent=(e)=>{
  dispatch(getCountries('continent',e.target.value,0,9))
}

const reset=()=>{
    dispatch(getCountries(null,null,0,9))    
}

const activity=(e)=>{
    
    dispatch(getActivityByTipo(e.target.value,0,9))
}

const data=actividades.map(e=>e.tipo)
let result = data.filter((item,index)=>{
    return data.indexOf(item) === index;
  })

    return (
        <div className="filter-nav">
    <div className='filtros-ordenar'>
    <p className="order"  onClick={()=>reset()}>Reset</p>
    <p className="order" onClick={()=>orderAlpha('AZ')}>A-Z</p>
    <p className="order" onClick={()=>orderAlpha('ZA')}>Z-A</p>
    <p className="order" onClick={()=>population('mayor')}>🡹</p>
    <p className="order" onClick={()=>population('menor')}>🡻</p>
    </div>
    <div className="selectores">
   
    <select
                className='select'
                name='continente ' 
                onChange={(e)=>handeChangeContinent(e)}
                defaultValue=''
                >
                <option value='' >Selecciona un continente</option>
                {continentes.map(e=><option key={e} value={e}>{e}</option>)}
                
                
                </select>
   </div> 
    <div>

      <select
                className='select'
                name='actividad' 
                onChange={(e)=>activity(e)}
                defaultValue=''
                >
                <option value='' >Selecciona tipo de actividad</option>
                {result.map(e=><option key={e} value={e}>{e}</option>)}
                
                
                
                </select>
      
    </div>

    
  

        </div>
    )
}