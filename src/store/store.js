import {configureStore} from '@reduxjs/toolkit'
import courseReducer from '../features/course/courseSlice'
import userReducer from "../features/user/userSlice"


export const store=configureStore({
    reducer:{
        course:courseReducer,
        user:userReducer
    },
})