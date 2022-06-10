import axios from 'axios'

export const GET_ALL_COUNTRIES='GET_ALL_COUNTRIES'
export const GET_COUNTRY_BY_ID='GET_COUNTRY_BY_ID'
export const GET_COUNTRY_BY_NAME='GET_COUNTRY_BY_NAME'
export const GET_ALL_COUNTRIES_BY_CONTINENT='GET_ALL_COUNTRIES_BY_CONTINENT'
export const ORDER_ALPHA='ORDER_ALPHA'
export const ORDER_BY_POPULATION='ORDER_BY_POPULATION'



export const getCountries=(filtro,valor,page=0,size=9)=>{
    

    return async function(dispatch){
        page<0?page=0:filtro==='continent'?axios.get(`http://localhost:3001/country/continent?continent=${valor}&page=${page}&size=${size}`)
        .then(data=>{
            dispatch({type: GET_ALL_COUNTRIES_BY_CONTINENT,
            payload:data.data})
        }):filtro==='orderAlpha'?axios.get(`http://localhost:3001/country/orderAlpha?orderAlpha=${valor}&page=${page}&size=${size}`)
        .then(data=>{
            dispatch({type: ORDER_ALPHA,
            payload:data.data})
        }):filtro==='population'?axios.get(`http://localhost:3001/country/population?population=${valor}&page=${page}&size=${size}`)
        .then(data=>{
            dispatch({type: ORDER_BY_POPULATION,
            payload:data.data})
        }):axios.get(`http://localhost:3001/country?&page=${page}&size=${size}`)
        .then(data=>{
            dispatch({type: GET_ALL_COUNTRIES,
            payload:data.data})
        })
    }

}

export const getCountryById=(idPais)=>{
    return async function (dispatch){
        return axios.get(`http://localhost:3001/country/${idPais}`)
        .then(data=>{
            dispatch({type: GET_COUNTRY_BY_ID,
            payload:data.data})
        })
    }
}
export const getCountryByName=(name)=>{
    return async function (dispatch){
        return axios.get(`http://localhost:3001/country/name/${name}`)
        .then(data=>{
            dispatch({type: GET_COUNTRY_BY_NAME,
            payload:data.data})
        })
    }
}



