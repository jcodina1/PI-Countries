
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/Actions/actionsCountry";
import './paginacion.css'
import {  getAllActivities } from "../../redux/Actions/actionsActivity";

export const Paginacion =()=>{
    
    const dispatch=useDispatch()
    
    const {paginaActual,paginasTotales,filtro,valorFiltro} = useSelector((state) => state);
    //console.log('FILTRO: '+filtro,'VALORFILTRO: '+valorFiltro);
    
    const next=(filtro,valorFiltro,paginaActual)=>{
        if(filtro==='all_activities') dispatch(getAllActivities(paginaActual+1,2))
        else dispatch(getCountries(filtro,valorFiltro,paginaActual+1,10))
        
    }
    const prevPage=(filtro,valorFiltro,paginaActual)=>{
        if(filtro==='all_activities') dispatch(getAllActivities(paginaActual-1,2))
        else dispatch(getCountries(filtro,valorFiltro,paginaActual-1,10))
         
        
    }
    const firstPage=(filtro,valorFiltro,paginaActual)=>{
        if(filtro==='all_activities') dispatch(getAllActivities(paginaActual,2))
        else dispatch(getCountries(filtro,valorFiltro,paginaActual,9))
        
    }
    const lastPage=(filtro,valorFiltro,paginaActual)=>{
        if(filtro==='all_activities') dispatch(getAllActivities(paginaActual,2))
        else dispatch(getCountries(filtro,valorFiltro,paginaActual,10))
       
    }
    
    return(
        <div className="container-pagination">
        <div className="pagination">
            
        {paginaActual===0?'': <p  className="lista-pg-extremos" onClick={()=>firstPage(filtro,valorFiltro,0)} > Inicio</p>}  
          {paginasTotales<3?'':paginaActual-1<0?'':<p className="lista-pg" onClick={()=>prevPage(filtro,valorFiltro,paginaActual)} >◀</p> }  
        
        <p   className="active"> {paginaActual===0?'Inicio':paginaActual}</p>
        {(paginaActual+1>=paginasTotales?'':<p className="lista-pg" onClick={()=>next(filtro,valorFiltro,paginaActual)} > ▶  </p>)} 
        
        {paginaActual===paginasTotales?'':<p className="lista-pg-extremos" onClick={()=>lastPage(filtro,valorFiltro,paginasTotales)} >FINAL</p>}
        </div>
        </div>

       
    )
}
