const { Router } = require('express');
const { getAllCountries,  getCountryById, orderbypopulation, getByName, getByContinent, orderAlpha } = require('../Controllers/countryController');


const router = Router();
router.get('/', getAllCountries)
router.get('/name/:name',getByName)
router.get('/continent',getByContinent)
router.get('/orderAlpha',orderAlpha)
router.get('/population',orderbypopulation)
router.get('/:idPais', getCountryById)
module.exports=router