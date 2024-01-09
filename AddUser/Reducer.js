import {ADD_USER,GET_USER,DELETE_USER } from "./Type"

//Initial State
const InitialState={
    users:[]
}
export const Reducer =(state=InitialState,action)=>{
    switch (action.type) {
        case ADD_USER:return{
            users:[...state.users,action.payload]
            // users:[...state.users,{name:action.payload.name,age:action.payload.age,address:action.payload.address,gender:action.payload.gender}]
        }
        case DELETE_USER:return{
            users:state.users.filter((obj)=>{
                // console.log("Obj. Name:",action.payload)
                return(obj.id!=action.payload)
            })
        }
        default:return state
    }
}