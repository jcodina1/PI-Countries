const { Router } = require('express');
const {  postActivity, getActivity, getActivityByTipo, postCountryActivity, deleteActivity, updateActivity, deleteCountryActivity } = require('../Controllers/activityController');

const router = Router();
router.get('/',getActivity)
router.get('/:tipo',getActivityByTipo)
router.post('/',postActivity)
router.post('/AC',postCountryActivity)
router.delete('/AC',deleteCountryActivity)
router.delete('/:activityId',deleteActivity)
router.put('/:activityId',updateActivity)
module.exports=router