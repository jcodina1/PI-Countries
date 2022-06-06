
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/Actions/actionsCountry";
import './paginacion.css'


export const Paginacion =()=>{
    
    const dispatch=useDispatch()
    
    const {paginaActual,paginasTotales,filtro,valorFiltro} = useSelector((state) => state);
    //console.log('FILTRO: '+filtro,'VALORFILTRO: '+valorFiltro);
    
    const next=(filtro,valorFiltro,paginaActual)=>{
        
         dispatch(getCountries(filtro,valorFiltro,paginaActual+1,10))
        
    }
    const prevPage=(filtro,valorFiltro,paginaActual)=>{
         dispatch(getCountries(filtro,valorFiltro,paginaActual-1,10))
        
    }
    const firstPage=(filtro,valorFiltro,paginaActual)=>{
        dispatch(getCountries(filtro,valorFiltro,paginaActual,9))
    }
    const lastPage=(filtro,valorFiltro,paginaActual)=>{
        dispatch(getCountries(filtro,valorFiltro,paginaActual,10))
       
    }
    
    return(
        <div className="container-pagination">
        <ul className="pagination">
            
        <li  className="lista" onClick={()=>firstPage(filtro,valorFiltro,0)} > <p>{paginaActual===0?'':''}</p>  </li>
        <li className="lista" onClick={()=>prevPage(filtro,valorFiltro,paginaActual)} >  {paginaActual-1<0?'':<p>{'<' }</p>}  </li>
        
        <li  className="lista"><p className="active">{paginaActual===0?'Inicio':paginaActual}</p></li>
        <li className="lista" onClick={()=>next(filtro,valorFiltro,paginaActual)} >  {(paginaActual+1>=paginasTotales?'':<p>{'>'}</p>)}  </li>
        
        <li className="lista" onClick={()=>lastPage(filtro,valorFiltro,paginasTotales)} >  <p>{paginaActual===paginasTotales?'':''}</p></li>
        </ul>
        </div>

       
    )
}
