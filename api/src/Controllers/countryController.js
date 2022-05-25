const axios= require('axios')
const{Op}= require('sequelize')

const {Country,Activity}= require('../db.js')

async function getAllCountries(req,res,next){
    const {name}=req.query
    try{
    if(!name) {
        const colombia= await Country.findByPk('COL')
        if(!colombia){
            const CountriesResponse= await axios("https://restcountries.com/v3/all")
            let dataCountriesArr= CountriesResponse.data
            dataCountriesArr= dataCountriesArr.map((country)=>{
            
                    if(country.capital){
                        return {
                        id: country.cca3,
                        name:country.name.common,
                        img:country.flags[0],
                        continent:country.continents[0],
                        capital:country.capital[0],
                        subRegion:country.subregion,
                        area:country.area,
                        population:country.population
                    }
                }else{
                    return {
                        id: country.cca3,
                        name:country.name.common,
                        img:country.flags[0],
                        continent:country.continents[0],
                        capital:'No tiene capital',
                        subRegion:country.subregion,
                        area:country.area,
                        population:country.population
                    }
                }
                })
                console.log('Obtenido de API');
            await Country.bulkCreate(dataCountriesArr)
            res.send(dataCountriesArr)
        }else{
            console.log('Traido de la Db');
            let Mcountries= await Country.findAll()
            res.send(Mcountries)
            
        }
    }else{
        const pais= await Country.findAll({
            where:{name:{[Op.iLike]:`%${name}%`}}
        })
        
        if (!pais[0]) res.status(404).send(`El Pais ${name} No Se encuentra`)
        else res.send(pais)
        } 

    }catch(error){
        next(error)
    }
}
async function getCountryById(req,res,next){
    const{idPais}=req.params
    try {
      const pais=await  Country.findOne({
        where: {id:{[Op.iLike]:`%${idPais}`}},
        include: Activity
    })
    res.send(pais)
    } catch (error) {
        next(error)
    }
}


module.exports={
    getAllCountries,
    getCountryById,
    
}