const axios= require('axios')
const{Op}= require('sequelize')

const {Country,Activity}= require('../db.js')

const getPagination = (page, size) => {
    const limit = size ? size : 9;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  };
  const getPagingData = (data, page, limit,filtro,valor) => {
    const { count: totalItems, rows: Countries } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit); 
    page>totalPages?page=totalPages:totalPages   
    return { totalItems, Countries, totalPages, currentPage, filtro,valor };
  };
async function getAllCountries(req,res,next){
    const {page,size}=req.query
    const {limit,offset}= getPagination(page,size)
    try{
    
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
                        population:(country.population)
                        
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
            let pais= await Country.findAndCountAll({limit:limit,offset:offset})
            datos=getPagingData(pais,page,limit)
            res.send(datos)
        }else{
            console.log('Traido de la Db');
            let pais= await Country.findAndCountAll({limit:limit,offset:offset})
            datos=getPagingData(pais,page,limit)
            res.send(datos)
        
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

async function getByName(req,res,next){
    const {name}=req.params
    try {
        if(name){
            const pais= await Country.findAll({
                where:{name:{[Op.iLike]:`%${name}%`}},
                order:[['id','ASC']]
            })
            
            if (!pais[0]) res.status(404).send(`El Pais ${name} No Se encuentra`)
            else res.send(pais)
        }
    } catch (error) {
        next(error)
    }
}

async function getByContinent(req,res,next){
    
    const {continent,page,size}=req.query
    const {limit,offset}= getPagination(page,size)
     try {
        if(continent){
            const continente= await Country.findAndCountAll({
                where:{continent:{[Op.iLike]:`%${continent}%`}},
                order:[['id','ASC']],
                limit:limit,
                offset:offset
            })
            datos=getPagingData(continente,page,limit,'continent',continent)
            res.send(datos)
        }
     } catch (error) {
         next(error)
     }
}

async function orderAlpha(req,res,next){
    
    const {orderAlpha,page,size}=req.query
    
    const {limit,offset}= getPagination(page,size)
     try {
        if (orderAlpha ==='AZ') {
            let A_ZOrder= await Country.findAndCountAll({ 
                order:[['name','ASC']],
                limit:limit,
                offset:offset
            })
            datos=getPagingData(A_ZOrder,page,limit,'orderAlpha',orderAlpha)
            res.send(datos)
            
        }else if (orderAlpha ==='ZA') {
            let Z_AOrder= await Country.findAndCountAll({ 
                order:[['name','DESC']],
                limit:limit,
                offset:offset
            })
            datos=getPagingData(Z_AOrder,page,limit,'orderAlpha',orderAlpha)
            res.send(datos)
        }
     } catch (error) {
         next(error)
     }
}

async function orderbypopulation(req,res,next){
    const{population,page,size}=req.query
    const {limit,offset}= getPagination(page,size)
    try {
    
        if(population==='mayor'){
            const pais=await  Country.findAndCountAll({
            
                
                order:[ ['population','DESC']],
                limit:limit,
                offset:offset
            })
            datos=getPagingData(pais,page,limit,'population',population)
            res.send(datos)
        }else if(population==='menor'){
            const pais=await  Country.findAndCountAll({
                
                order:[['population','ASC']],
                limit:limit,
                offset:offset
            })
            datos=getPagingData(pais,page,limit,'population',population)
            res.send(datos)
        }     
}catch (error) {
        next(error)
    }
}



module.exports={
    getAllCountries,
    getCountryById,
    getByName,
    getByContinent,
    orderAlpha,
    orderbypopulation,
    getPagingData,
    getPagination

    
}