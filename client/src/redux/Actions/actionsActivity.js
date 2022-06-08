import axios from 'axios'
export const GET_ALL_ACTIVITIES='GET_ALL_ACTIVITIES'
export const POST_ACTIVITY='POST_ALL_ACTIVITIES'
export const GET_ACTIVITY_BY_TIPO='GET_ACTIVITY_BY_TIPO'
export const POST_COUNTRY_ACTIVITY='POST_COUNTRY_ACTIVITY'


export const getAllActivities=(page,size)=>{
    return async function (dispatch){
        return axios.get(`http://localhost:3001/activity?page=${page}&size=${size}`)
        .then(data=>{
            dispatch({type: GET_ALL_ACTIVITIES,
            payload:data.data
            })
        })
    }
}

export const postActivities=(tipo,name,difficulty,duration,season,countryId)=>{
    return async function (dispatch){
        return axios.post(`http://localhost:3001/activity`,{
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
        return axios.get(`http://localhost:3001/activity/${valor}?&page=${page}&size=${size}`)
        .then(data=>{
            dispatch({type: GET_ACTIVITY_BY_TIPO,
            payload:data.data})
        })
    }
}

export const postCountryActivity=(countryId,activityId)=>{
    return async function (dispatch){
        return axios.post('http://localhost:3001/activity/AC',{
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