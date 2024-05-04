const labour_db = require('../models/labour.model')
const mongoose = require('mongoose')

async function REGISTER_LABOUR(data){
    
    try {
        const labour = await labour_db.create(data);
        return labour

    } catch (error) {
        throw new Error(error.message)
    }
    

}

async function FETCH_LABOUR(data){
    try {
        const {skill, x , y , radius} = data;


        if (!x || !y || !radius || !skill) {
            return res.status(400).json({ error: 'Missing parameters' });
        }
    
        const userX = parseFloat(x);
        const userY = parseFloat(y);
        const searchRadius = parseFloat(radius);

        const nearbyLabour = await labour_db.find({
            skill: skill,
            'location.x': { $gte: userX - searchRadius, $lte: userX + searchRadius },
            'location.y': { $gte: userY - searchRadius, $lte: userY + searchRadius }
        });
    
        return nearbyLabour
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports ={ REGISTER_LABOUR, FETCH_LABOUR}