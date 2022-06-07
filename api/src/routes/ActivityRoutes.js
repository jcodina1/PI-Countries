const { Router } = require('express');
const {  postActivity, getActivity, getActivityByTipo, postCountryActivity } = require('../Controllers/activityController');

const router = Router();
router.get('/',getActivity)
router.get('/:tipo',getActivityByTipo)
router.post('/',postActivity)
router.post('/AC',postCountryActivity)
module.exports=router