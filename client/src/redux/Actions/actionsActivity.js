import axios from 'axios'

export const GET_ALL_ACTIVITIES='GET_ALL_ACTIVITIES'
export const POST_ACTIVITY='POST_ALL_ACTIVITIES'
export const GET_ACTIVITY_BY_TIPO='GET_ACTIVITY_BY_TIPO'
export const POST_COUNTRY_ACTIVITY='POST_COUNTRY_ACTIVITY'
export const GET_ALL_COUNTRIES_BY_CONTINENT_FORM='GET_ALL_COUNTRIES_BY_CONTINENT_FORM'
export const DELETE_COUNTRY_ACTIVITY='DELETE_COUNTRY_ACTIVITY'
export const PUT_ACTIVITY='PUT_ACTIVITY'

export const getAllActivities=(page=0,size=2)=>{
    return async function (dispatch){
        return await axios.get(`/activity?page=${page}&size=${size}`)
        .then(data=>{
            dispatch({type: GET_ALL_ACTIVITIES,
            payload:data.data
            })
        })
    }
}

export const postActivities=(tipo,name,difficulty,duration,season,countryId)=>{
    return async function (dispatch){
        return axios.post(`/activity`,{
            tipo:tipo,
            name:name,
            difficulty:difficulty,
            duration:duration,
            season:season,
            countryId:countryId
            })
        .then(data=>{
            dispatch({type: POST_ACTIVITY,
            payload:data.data
            })
        })
    }
}
export const getActivityByTipo=(valor,page,size)=>{
    return async function (dispatch){
        return axios.get(`/activity/${valor}?&page=${page}&size=${size}`)
        .then(data=>{
            dispatch({type: GET_ACTIVITY_BY_TIPO,
            payload:data.data})
        })
    }
}

export const postCountryActivity=(countryId,activityId)=>{
    return async function (dispatch){
        return axios.post('/activity/AC',{
          countryId:countryId,
          activityId:activityId
            })
        .then(data=>{
            dispatch({type: POST_COUNTRY_ACTIVITY,
            payload:data.data
            })
        })
    }
}

export const getCountryByContinent=(valor,page=0,size=250)=>{
    return async function(dispatch){
        return axios.get(`/country/continent?continent=${valor}&page=${page}&size=${size}`)
        .then(data=>{
            dispatch({type: GET_ALL_COUNTRIES_BY_CONTINENT_FORM,
            payload:data.data})
        })
    }
}
export const deleteCountryActivity=(countryId,activityId)=>{
    return async function (dispatch){
        return axios.delete('/activity/AC',{data:{
            countryId:countryId,
            activityId:activityId
              }})
        .then(data=>{
            dispatch({type: DELETE_COUNTRY_ACTIVITY,
            payload:data.data
            })
        })
    }
}

export const updateActivity=(tipo,name,difficulty,duration,season,activityId)=>{
    return async function (dispatch){
        return axios.put(`/activity/${activityId}`,{
            tipo:tipo,
            name:name,
            difficulty:difficulty,
            duration:duration,
            season:season,
            
            })
        .then(data=>{
            dispatch({type: PUT_ACTIVITY,
            payload:data.data
            })
        })
    }
}

export const deleteActivity=(activityId)=>{
    return async function (dispatch){
        return axios.delete(`/activity/${activityId}`)
        .then(data=>{
            dispatch({type: PUT_ACTIVITY,
            payload:data.data
            })
        })
    }
}