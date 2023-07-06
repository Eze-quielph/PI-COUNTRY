import axios from 'axios';

export const GET_USERS = "GET_USERS"


export const getUsers = ()=>{
    return async function(dispatch){
        const {data} = await axios(`http://localhost:3001/countries`)
    }
}