import axios from "axios";

const token= localStorage.getItem('token')
console.log(token)
export const AuthenticApi=axios.create({
    baseURL:"http://localhost:8080",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:token
    }
})