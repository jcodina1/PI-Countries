import axios from 'axios'
export const GET_ALL_ACTIVITIES='GET_ALL_ACTIVITIES'
export const POST_ACTIVITY='POST_ALL_ACTIVITIES'
export const GEL_ACTIVITY_BY_TIPO='GEL_ACTIVITY_BY_TIPO'


export const getAllActivities=()=>{
    return async function (dispatch){
        return axios.get(`http://localhost:3001/activity`)
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
export const getActivityByTipo=(name)=>{
    return async function (dispatch){
        return axios.get(`http://localhost:3001/activity/${name}`)
        .then(data=>{
            dispatch({type: GEL_ACTIVITY_BY_TIPO,
            payload:data.data})
        })
    }
}