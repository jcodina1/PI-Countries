import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landingpage from '../componentes/landingpage/Landingpage';
import Home from '../componentes/Home/Home.js';
import Activity from '../componentes/Activity/Activity';
import Country from '../componentes/Country/Country';


export default function AppRouter() {
return (
    <div>
    <Routes>
        
        <Route path="/" element={<Landingpage />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/country/:idPais' element={<Country />}/>
        <Route path='/activity' element={<Activity />}/>
        


    </Routes>
    </div>
)
}