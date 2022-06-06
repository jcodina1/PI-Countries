//import { Link } from 'react-router-dom'
import './CountryId.css'

export default function CountryCardId(props){
    const{name, continent,id,capital,subRegion,area,population,activities}=props
console.log(activities);



  
return(

   <>
   
    
      
        <div className="card__details-id">
        <div className="name-id">ID:</div>
            <p>{id}</p>
            <div className="name-id">Nombre:</div>
            <p>{name}</p>
            <div className="name-id">Continente:</div>
            <p>{continent}</p>
            <div className="name-id">Capital:</div>
            <p>{capital}</p>
            <div className="name-id">Sub region:</div>
            <p>{subRegion}</p>
            <div className="name-id">Area:</div>
            <p>{area} KM<sup>2</sup></p>
            <div className="name-id">Poblacion:</div>
            <p>{population}</p>
            <div className="name-id">Actividades:</div>
            <p>{}</p>
        
      
    </div>
  
  
   </>

)
}