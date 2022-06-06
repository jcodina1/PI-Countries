import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllActivities } from "../../redux/Actions/actionsActivity";
import { getCountries } from "../../redux/Actions/actionsCountry";

import Countries from "../Country/Countries";

import { FilterNav } from "../FilterNav/FilterNav.js";
import './Home.css'

import { Navbar} from "../Navbar/NavBar";
import { Paginacion } from "../Paginacion/paginacion";
import SearchBar from "../SearchBar/SearchBar";



export default function Home(){
    const dispatch=useDispatch()
    
useEffect(()=>{

    dispatch(getCountries(0,9))
    dispatch(getAllActivities())


},[dispatch])


    return(
        <div className="contenedor-home">
            <Navbar />
           <div className="botones">
            <FilterNav/>
            <SearchBar />
              
            </div>
            <div className="cards">
            <Countries />
            <Paginacion />
           </div>

        </div>
    )
   }

