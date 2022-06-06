const { Router } = require('express');
const {  postActivity, getActivity, getActivityByTipo } = require('../Controllers/activityController');

const router = Router();
router.get('/',getActivity)
router.get('/:tipo',getActivityByTipo)
router.post('/',postActivity)
module.exports=router