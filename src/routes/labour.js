//user -> requires labour(skill, location(x,y)) -radius
//promoter -> registers labour(skill, location)
//labour -> skill, location

//1. Retrieve all labour - user 
//2. Register -  by promoter to labour

const express = require('express');
const router = express.Router();

const { registerLabour, fetchLabour} = require('../controllers/labour.controller');

router.post('/register', registerLabour);
router.get('/getLabour', fetchLabour);

module.exports = router;