import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getUserDetails=createAsyncThunk('getUserDetails',async(id)=>{
    try{
        const user=await axios.get(`http://localhost:8000/v1/user/${id}`)
  
        return user.data
    }catch(error){
      
        throw new Error("Error fetcing the data pplease try again after sometime ")
    }
})

export const addCourse=createAsyncThunk('addCourse',async(data)=>{
    try{
        const user=await axios.post(`http://localhost:8000/v1/user/enroll?courseId=${data?.courseId}&userId=${data?.userId}`)
        return user.data
    }catch(error){
        throw new Error("Error adding new course ")
    }
})

export const marksAsComplete=createAsyncThunk("markAsComplete",async(data)=>{
    try{
        const markComplete=await axios.post(`http://localhost:8000/v1/user/markComplete?courseId=${data?.courseId}&userId=${data?.userId}`)
           return markComplete.data
    }catch(error){
        throw new Error("Error markiong complete")
    }
})