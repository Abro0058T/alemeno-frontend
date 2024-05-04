import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchCourse=createAsyncThunk('fetchCourses',async()=>{try{
   const response=await axios.get("http://localhost:8000/v1/courses/")
   return response.data
}catch(error){
    throw new Error("Error fetching the courses")
   }

})


export const searchCourse=createAsyncThunk('seachCourse',async(query)=>{
    try{
        const searchResult=await axios.get(`http://localhost:8000/v1/courses?query=${query}`)
        return searchResult.data
    }catch(error){
        throw new Error("Error")
    }

})

export const getCourseData=createAsyncThunk("getCourseData",async(data)=>{
    try{
        const searchResult=await axios.get(`http://localhost:8000/v1/courses/course/${data}`)
        return searchResult.data
    }catch(error){
        throw new Error("Error")
    }

})