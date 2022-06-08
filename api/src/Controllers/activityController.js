const axios= require('axios')
const{Op}= require('sequelize')


const {Country,Activity}= require('../db.js');
const { getPagingData } = require('./countryController.js');

const getPagination = (page, size) => {
    const limit = size ? size : 2;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  };

const getPagingDataAc = (data, page, limit,filtro) => {
    const { count: totalItems, rows: Actividades } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit); 
    page>totalPages?page=totalPages:totalPages   
    return { totalItems, Actividades, totalPages, currentPage, filtro};
  };
async function getActivity(req,res,next){
    const {page,size}=req.query
    const {limit,offset}= getPagination(page,size)
    try {
        const ver =await Activity.findAndCountAll({
            order:[['id','DESC']],
            limit:limit,offset:offset,
            include:Country           
        })
        
        datos=getPagingDataAc(ver,page,limit,'all_activities',null)
            res.send(datos)
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
        }else res.send({Msg:'La Actividad ya esta creada'})
    //res.send(crearActividad)
} catch (error) {
    next(error)
}
}



async function getActivityByTipo(req,res,next){
    const {tipo}=req.params
    const {page,size}=req.query
    const {limit,offset}= getPagination(page,size)
    try {
        if(tipo){
            const pais= await Country.findAndCountAll({
                include:[{
                    model:Activity,
                    where:{tipo:{[Op.iLike]:`%${tipo}`}},
                }],
                order:[['id','ASC']],
                limit:limit,
                offset:offset
            })
            
            datos=getPagingData(pais,page,limit,'activity',tipo)
            res.status(200).send(datos)
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
        res.status(200).send('se añadio el pais')
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