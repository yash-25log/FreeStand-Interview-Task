const mongoose = require('mongoose');
const {REGISTER_LABOUR, FETCH_LABOUR} = require('../services/labour.service');


async function registerLabour(req, res){
    try {
        const data = await REGISTER_LABOUR(req.body)
        return res.status(200).json({message: "Labour registered successfully", data: data})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

async function fetchLabour(req, res){
    try {
        const data = await FETCH_LABOUR(req.query)
        return res.status(200).json({message: "Labour fetched successfully", data: data})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

module.exports = {registerLabour, fetchLabour}