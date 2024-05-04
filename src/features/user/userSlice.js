import {createSlice} from "@reduxjs/toolkit"
import { getUserDetails ,addCourse, marksAsComplete} from "../../api/user.js";


const initialState={
    userData:{},
    loading:false,
    data:null,
    isError:false,
    message:null
}

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        resetMessages:(state)=>{
            state.isError=false,
            state.message=null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getUserDetails.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getUserDetails.fulfilled,(state,action)=>{
            state.loading=false;
            state.userData=action.payload
        });
        builder.addCase(getUserDetails.rejected,(state,action)=>{
            state.loading=false;
            state.isError=true;
        });
        builder.addCase(addCourse.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(addCourse.fulfilled,(state,action)=>{
            state.loading=false;
            state.userData=action.payload.data
            state.message=action.payload.message
        });
        builder.addCase(addCourse.rejected,(state,action)=>{
            state.loading=false;
            state.isError=true;
        });
        builder.addCase(marksAsComplete.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(marksAsComplete.fulfilled,(state,action)=>{
            state.loading=false;
            state.userData=action.payload.data
            state.message=action.payload.message
        });
        builder.addCase(marksAsComplete.rejected,(state,action)=>{
            state.loading=false;
            state.isError=true;
        });
    }
})

export const {resetMessages}=userSlice.actions

export default userSlice.reducer
