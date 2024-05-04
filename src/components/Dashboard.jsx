import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCourseCard from './UserCourseCard.jsx'
import { getUserDetails } from '../api/user.js'
import { resetMessages } from '../features/user/userSlice.js'
import Loader from '../utils/Loader.jsx'



function Dashboard() {
   const {loading ,userData,isError,message}=useSelector((state)=>state.user)
    const dispatch=useDispatch()
  if(message){
    alert(message)
    dispatch(resetMessages())
  }
  if(isError){
    alert("Error performing the action please try again")
    dispatch(resetMessages())
  }
  useEffect(()=>{
    dispatch(getUserDetails('6635dbe9f355aac47bf57a18'))

    return()=>{
      dispatch(resetMessages())
    }
  },[])
  return (
   <>
   {
      loading?<Loader/>:(
    <div className=' '>
      <div className='flex justify-between flex-wrap m-2'>
      <h3 className='text-gray-500 text-sm my-1'>Name :-{userData?.name} </h3>
      <h3 className='text-gray-500 text-sm my-1'>College:- {userData?.collage} </h3>
      <h3 className='text-gray-500 text-sm my-1'>Date of Joining:-{userData?.createdAt?.split("T")[0]}</h3>
      </div>
      <div className=' justify-center gap-4'>
         {
           userData?.courses?.length>0 && userData?.courses?.map(course=>(
        <UserCourseCard key={course._id} onClick={(e)=>{handleCourseClick(e)}} data={course} />
            ))
         }
      </div>
    </div>
      )
   }
   </>
  )
}

export default Dashboard