import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/Actions/actionsCountry";
import imagen from '../../assets/VAyR.gif'

import { Navbar } from "../Navbar/NavBar";
import CountryCardId from "../Cards/CountryCard/Countryid";
export default function Country(){
    const{idPais}=useParams()
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getCountryById(idPais))
    },[idPais,dispatch])
    const country= useSelector(state=>state.country)
    
    if(country&&country.activities){
        return(
            <>
            <Navbar/>
            
                
                   <CountryCardId                
                        key={country.id}
                        id={country.id}
                        name={country.name}  
                        img={country.img}              
                        continent={country.continent}
                        subRegion={country.subRegion}
                        capital={country.capital}
                        area={new Intl.NumberFormat('es-MX').format(country.area)}
                        population={new Intl.NumberFormat('es-MX').format(country.population)}
                        activities={country.activities.length===0?'No Hay Actividades':country.activities}           
                    />
                  
                
            </>
        )
    }else{
        return( <div className="load"><img src={imagen} alt='cargando' /></div>
        
        )
    }
    
}