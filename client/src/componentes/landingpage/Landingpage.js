
import React, { useEffect } from 'react';

import {Link} from 'react-router-dom'
import './Landingpage.css';
import landingpage1 from './assets/landingpage1.svg';
import landingpage2 from './assets/landingpage2.png';
import { getCountries } from '../../redux/Actions/actionsCountry';
import { getAllActivities } from '../../redux/Actions/actionsActivity';
import { useDispatch } from 'react-redux';

function Landingpage() {
  const dispatch=useDispatch()
    
  useEffect(()=>{
  
      dispatch(getAllActivities(0,30))
      dispatch(getCountries(0,9))
  
  
  },[dispatch])
  return (
    
      <div className='contenedor'>
        <div className='contenedor-textos'>
        <h1 className='titulo-landing'>Entra ahora es momento</h1>
        <h2 className='subtitulo'>de aprender sobre el mundo</h2>
        <h3 className='texto'>sus paises y actividades</h3>
        <Link className='btn' to='/home'>Entra aqui</Link>
        </div>
        <div className='contenedor-imagen'>
          <img src={landingpage1} alt='ilustracion1' className='img1' />
        </div>
        <img src={landingpage2} alt='ilustracion1' className='efecto' />
      </div>

    
  );
}

export default Landingpage;
