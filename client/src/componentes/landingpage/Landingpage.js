
import React from 'react';

import {Link} from 'react-router-dom'
import './Landingpage.css';
import landingpage1 from './assets/landingpage1.svg';
import landingpage2 from './assets/landingpage2.png';

function Landingpage() {
  return (
    
      <div className='contenedor'>
        <div className='contenedor-textos'>
        <h1 className='titulo'>Entra ahora es momento</h1>
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