import { useSelector } from "react-redux";
import CountryCard from "../Cards/CountryCard/CountryCard";
import './Countries.css'



export default function Countries() {
    var paises= useSelector(state=>state.countries)
    if(paises){
        return (
            <div className='cards'>
                {paises.map(p =><CountryCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    img={p.img}
                    continent={p.continent}
                    />
                )}
            </div>
        );
    } else {
        return(
            <div>Sin ciudades</div>
        )
    }
}