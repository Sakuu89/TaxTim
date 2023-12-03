import axios from "axios"
import { POST_DATA, POST_DETAILS } from './actionType'

export const handlepost= (data)=> (dispatch)=>{
   return axios.post(`http://localhost:8080/login`,data).then((res)=>dispatch({type:POST_DATA,payload:res.data}))
}

export const handlepostdetails=(data)=>(dispatch)=>{
    return axios.post(`http://localhost:8080/userdetails`,data).then((res)=>dispatch({type:POST_DETAILS,payload:res.data}))
 }