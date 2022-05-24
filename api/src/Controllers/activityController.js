const axios= require('axios')
const{Op}= require('sequelize')
const { v4: uuidv4 } = require('uuid');

const {Country,Activity}= require('../db.js')
async function getActivity(req,res,next){
    try {
        const ver =await Activity.findAll()
        res.send(ver)
    } catch (error) {
        next(error)
    }
}
async function postActivity(req,res,next){
const {name,difficulty,duration,season}= req.body
try {
   const hola= await Activity.create({
        id:uuidv4(),
        name:name,
        difficulty:difficulty,
        duration:duration,
        season:season
    })
    
    
    res.send(`Se creo la actividad ${name}`)
} catch (error) {
    next(error)
}
}

module.exports={
    getActivity,
    postActivity
}