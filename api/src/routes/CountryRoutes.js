const { Router } = require('express');
const { getAllCountries,postAllCountries } = require('../Controllers/countryController');

const router = Router();
router.get('/',getAllCountries)
router.post('/',postAllCountries)
module.exports=router