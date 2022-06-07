import { GET_ALL_ACTIVITIES, POST_ACTIVITY, GET_ACTIVITY_BY_TIPO, POST_COUNTRY_ACTIVITY } from "../Actions/actionsActivity";
import {  GET_ALL_COUNTRIES,
     GET_ALL_COUNTRIES_BY_CONTINENT,
      GET_COUNTRY_BY_ID,
      GET_COUNTRY_BY_NAME,       
       ORDER_ALPHA,
        ORDER_BY_POPULATION,
        } from "../Actions/actionsCountry";

const initialState = {
  countries:[],
  country:{},
  paginasTotales:0,
  paginaActual:0,
  filtro:'no se ha selecionado',
  valorFiltro:'no se ha selecionado',
  activities:[],
  activity:{}
       
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_COUNTRIES:

        return{
            ...state,
            countries:action.payload.Countries,
            paginasTotales:Math.ceil(action.payload.totalItems/10)-1,
            paginaActual:action.payload.currentPage,
            filtro:'no se ha selecionado',
            valorFiltro:'no se ha selecionado'
            
        }
    case GET_COUNTRY_BY_ID:
        return{
            ...state,
            country:action.payload,
            
            
        }
    case GET_COUNTRY_BY_NAME:
        return{
            ...state,
            countries:action.payload
        }
    case GET_ALL_COUNTRIES_BY_CONTINENT:
        return{
            ...state,
            countries:action.payload.Countries,
            paginasTotales:Math.ceil(action.payload.totalItems/10)-1,
            paginaActual:action.payload.currentPage,
            filtro:action.payload.filtro,
            valorFiltro: action.payload.valor
        }
    case ORDER_ALPHA:
            return{
                ...state,
                countries:action.payload.Countries,
                paginasTotales:Math.ceil(action.payload.totalItems/10)-1,
                paginaActual:action.payload.currentPage,
                filtro:action.payload.filtro,
                valorFiltro: action.payload.valor
        }
    
    case ORDER_BY_POPULATION:
            return{
            ...state,
            countries:action.payload.Countries,
            paginasTotales:Math.ceil(action.payload.totalItems/10)-1,
            paginaActual:action.payload.currentPage,
            filtro:action.payload.filtro,
            valorFiltro: action.payload.valor
        }
    case GET_ALL_ACTIVITIES:
            return{
            ...state,
            activities:action.payload
        }
    case POST_ACTIVITY:
            return{
            ...state,
            activity:action.payload
        }
    case GET_ACTIVITY_BY_TIPO:
            return{
            ...state,
            countries:action.payload,
            filtro:'Actividades',
            
            
        }
        case POST_COUNTRY_ACTIVITY:
            return{
            ...state,
            activity:{},  
        }
    default: return {...state}

};
};

export default rootReducer;