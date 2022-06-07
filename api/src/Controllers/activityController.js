const axios= require('axios')
const{Op}= require('sequelize')


const {Country,Activity}= require('../db.js')
async function getActivity(req,res,next){
    
    try {
        const ver =await Activity.findAll({
            include:Country           
        })
        
        res.send(ver)
    } catch (error) {
        next(error)
    }
}
async function postActivity(req,res,next){
const {tipo,name,difficulty,duration,season,countryId}= req.body
try {
    const [crearActividad,creada]=await Activity.findOrCreate({
        where:{name:{[Op.iLike]:`%${name}%`}},
        defaults:{
        tipo:tipo,
        name:name,
        difficulty:difficulty,
        duration:duration,
        season:season}
    })
        if (creada===true) {
            let pais=await Country.findAll({where:{id:countryId}})
            crearActividad.addCountry(pais)
                const ver= await Activity.findByPk(crearActividad.id)
            res.send(ver)    
        }else res.send('La Actividad ya esta creada')
    //res.send(crearActividad)
} catch (error) {
    next(error)
}
}



async function getActivityByTipo(req,res,next){
    const {tipo}=req.params
    try {
        if(tipo){
            const pais= await Country.findAll({
                include:[{
                    model:Activity,
                    where:{tipo:{[Op.iLike]:`%${tipo}%`}},
                }],
                order:[['id','ASC']],
                
            })
            
            if (!pais[0]) res.status(404).send(`El Pais ${tipo} No Se encuentra`)
            else res.send(pais)
        }
    } catch (error) {
        next(error)
    }
}

async function postCountryActivity(req,res,next){
    const{countryId,activityId}=req.body
    try {
        let pais=await Country.findAll({where:{id:{[Op.iLike]:`%${countryId}%`}}})
        const actividad= await Activity.findByPk(activityId)
        const resultado=await actividad.addCountry(pais)
        res.send('se añadio el pais')
    } catch (error) {
        next(error)
    }
}

module.exports={
    getActivity,
    postActivity,
    getActivityByTipo,
    postCountryActivity
}