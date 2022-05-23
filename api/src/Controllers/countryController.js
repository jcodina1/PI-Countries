const axios= require('axios')
const Country= require('../db.js')
async function getAllCountries(req,res,next){
    try{
        let dataCountries= await axios.get("https=//restcountries.com/v3/all")
        
        res.send(dataCountries)
    }catch(error){
        next(error)
    }
}
//async function


module.exports={
    getAllCountries

}