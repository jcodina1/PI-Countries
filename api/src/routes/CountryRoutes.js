const { Router } = require('express');
const { getAllCountries,  getCountryById, getByQuery } = require('../Controllers/countryController');


const router = Router();
router.get('/', getAllCountries)
router.get('/:idPais', getCountryById)
module.exports=router