const { Router } = require('express');
const { postActivities, postActivity, getActivity } = require('../Controllers/activityController');

const router = Router();
router.get('/',getActivity)
router.post('/',postActivity)
module.exports=router