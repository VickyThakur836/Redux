import { ADD_USER,GET_USER,DELETE_USER } from "./Type";
export const AddUser =(user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}
export const GetUser=()=>{
    return{
        type:GET_USER
    }
}
export const DeleteUser =(user)=>{
    return{
        type:DELETE_USER,
        payload:user
    }
}