
import { API_FAIL, API_REQUEST, API_SUCCESS } from "../constants/apiConstants";


export const apiReducer = (state =[],action)=>{

switch(action.type){
   case API_REQUEST:
    return{
        loading:true,
        isAuthenticated:false,
    };
    case API_SUCCESS:
        return {
            ...state,
            loading:false,
            isAuthenticated:true,
            data:action.payload,

        }
    case API_FAIL:
        return {
            ...state,
            loading:true,
            isAuthenticated:true,
            error:action.payload,

        };
        
    default:
        return state;

}


}