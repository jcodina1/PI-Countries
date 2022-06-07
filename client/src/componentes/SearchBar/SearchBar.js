import React, {   useState } from "react";
import './SearchBar.css'

import { useDispatch } from "react-redux";
import {  getCountryByName } from "../../redux/Actions/actionsCountry";


export default function SearchBar() {

const [Country,setCountry]= useState('')

const dispatch=useDispatch()


const handleInputChange = (e) => {
  e.preventDefault();
  setCountry(e.target.value)
  dispatch(getCountryByName(Country))
}

const onSubmit=(e) => {
  e.preventDefault();
  setCountry('')
  
}


//console.log(Country);



  return (
    <div className="container-search ">       
    <form onSubmit={onSubmit} >
      <input
        type="text"
        placeholder="Busca un pais..."      
        className='input-searchBar'
        value={Country}
        onChange={(e)=>handleInputChange(e)}
      />
      
      <input type='submit' value='🔎' className="btn-searchbar" />
      
    </form>
   </div>
  );
}