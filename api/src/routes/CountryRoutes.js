const { Router } = require('express');
const { getAllCountries } = require('../Controllers/countryController');

const router = Router();
router.get('/',getAllCountries)
module.exports=router