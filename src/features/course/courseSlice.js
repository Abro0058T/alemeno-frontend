import {createSlice} from "@reduxjs/toolkit"
import { fetchCourse, getCourseData, searchCourse } from "../../api/course";


const initialState={
    course:[],
    loading:false,
    data:null,
    isError:false,
    singleCourse:{}
}

const courseSlice=createSlice({
    name:'course',
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchCourse.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(fetchCourse.fulfilled,(state,action)=>{
            state.loading=false;
            state.course=action.payload;
            
        });
        builder.addCase(fetchCourse.rejected,(state,action)=>{
            state.loading=false;
            state.isError=true;
        });
        builder.addCase(searchCourse.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(searchCourse.fulfilled,(state,action)=>{
            state.loading=false;
            state.course=action.payload;
            
        });
        builder.addCase(searchCourse.rejected,(state,action)=>{
            state.loading=false;
            state.isError=true;
        });
        builder.addCase(getCourseData.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getCourseData.fulfilled,(state,action)=>{
            state.loading=false;
            state.singleCourse=action.payload;
            
        });
        builder.addCase(getCourseData.rejected,(state,action)=>{
            state.loading=false;
            state.isError=true;
        });

    }
})

// export const {addCourse}=courseSlice.actions

export default courseSlice.reducer
