import axios from "axios"

// const API_URL = "http://34.199.164.237:8080";
const API_URL= "http://localhost:8080";
//post

const Post=async(url,data)=>{
let token = localStorage.getItem("token");
    try{
        const response = await axios.post(`${API_URL}/${url}`,data,{
            headers: { Authorization: token },
          })
        return response.data
    }catch(err){
       throw err.response.data
    }
}

const Put=async(url,data)=>{
    let token = localStorage.getItem("token");
    try{
        const response = await axios.put(`${API_URL}/${url}`,data,{
            headers: { Authorization: token },
          })
        return response.data
    }catch(err){
       throw err.response.data
    }
}

const Delete=async(url,data)=>{
    let token = localStorage.getItem("token");
    try{
        const response = await axios.delete(`${API_URL}/${url}`,data,{
            headers: { Authorization: token },
          })
        return response.data
    }catch(err){
       throw err.response.data
    }
}

const Get=async (url,data)=>{
    let token = localStorage.getItem("token");
    console.log(token,"token")
    try{
        const response = await axios.get(`${API_URL}/${url}`,data
        ,{
            headers: { Authorization: token },
          })
        return response.data
    }catch(err){
       throw err.response.data
    }
}

const Patch=async(url,data)=>{
    let token = localStorage.getItem("token");
    try{
        const response = await axios.patch(`${API_URL}/${url}`,data,{
            headers: { Authorization: token },
          })
        return response.data
    }catch(err){
       throw err.response.data
    }
}


export {
    Patch,
    Post,
    Put,
    Delete,
    Get
}