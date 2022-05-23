const axios= require('axios')
const Country= require('../db.js')
async function getAllCountries(req,res,next){
    try{
        let dataCountries= await axios("https://restcountries.com/v3/all")
        
        res.send(dataCountries.data)
    }catch(error){
        next(error)
    }
}
async function postAllCountries(req,res,next){
    const {cca3,name, flags,continents,capital,subregion,area,population}=req.body
    try {
        res.send(cca3,name, flags,continents,capital,subregion,area,population)
    } catch (error) {
        next(error)
    }
}


module.exports={
    getAllCountries

}