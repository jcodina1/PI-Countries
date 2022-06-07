import { Link } from 'react-router-dom'
import './CountryCard.css'
export default function CountryCard(props){
    const{name, continent, img,id}=props
return(
    
       

    <div className="card">
        <div className='img'>
    <img src={img} alt="muestra"  className='bandera'/>     
        </div>
        <div className="card__details">
        <div className="name">ID:</div>
            <p className='p'>{id}</p>
            <div className="name">Nombre:</div>
            <p className='p'>{name}</p>
            <div className="name">Continente:</div>
            <p className='p'>{continent}</p>
            
            <Link to={`/country/${id}`}  className='more'>Mas informacion</Link>
        </div>
    </div>

)
}