import { POST_DATA, POST_DETAILS } from './actionTypes';

const initial = {
    auth:false,
    data:[],
    usersdetail:[]
}
export const payReducer=(state=initial,action)=>{
    switch(action.type){
        case POST_DATA:{
            return {...state,
                data:[...state.data,action.payload],
                auth:true}
        }
        case POST_DETAILS:{
            return {...state,
                usersdetail:[...state.usersdetail,action.payload]}
        }
        default:{
            return state;
        }
    }
}