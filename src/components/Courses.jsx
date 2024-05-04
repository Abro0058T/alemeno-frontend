import React, { useEffect } from 'react'
import CourseCards from './CourseCards'
import { useDispatch, useSelector } from 'react-redux'
import { resetMessages } from '../features/user/userSlice'
import Loader from '../utils/Loader'



function Courses() {
  const dispatch=useDispatch()
   const {loading ,course,isError}=useSelector((state)=>state.course)
   const {message,userData}=useSelector((state)=>state.user)
  useEffect(()=>{
  },[course])
  if(message){
    alert(message)
    dispatch(resetMessages())

  }
  if(isError){
    alert("Error Performaing the action")
    dispatch(resetMessages())
  }
  return (
   <>
   {/* <Search/> */}
   {
      loading?<Loader/>:(
    <div className='border '>
      <div className='flex justify-between flex-wrap m-2'>
      <h3 className='text-gray-500 text-sm my-1'>Name :- {userData?.name}</h3>
      <h3 className='text-gray-500 text-sm my-1'>College:- {userData?.collage} </h3>
      <h3 className='text-gray-500 text-sm my-1'>Date of Joining-{userData?.createdAt?.split("T")[0]}</h3>
      </div>
      <div className='border border-gray-400  justify-center gap-4 h-[80vh] overflow-y-scroll'>
         {
           course.length>0 && course.map(course=>(
        <CourseCards key={course.id}  data={course} />

            ))
         }
      </div>
    </div>
      )
   }
   </>
  )
}

export default Courses