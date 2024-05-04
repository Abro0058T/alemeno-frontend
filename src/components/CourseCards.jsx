import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCourse } from '../api/user'
function CourseCards({data}) {
  const dispatch=useDispatch()
  const handleEnroll=(courseId)=>{
    dispatch(addCourse({courseId,userId:'6635dbe9f355aac47bf57a18'}))
  }

  return (
    <>
          <Link   to={`/course/${data?._id}`} >
        <div className=' border w-92 rounded-md p-2 relative flex my-4'>
        <img src={data?.thumbnail} alt="CourseImage"  width={"30%"}/>
        <div className='mx-2'>
        <p className='truncate whitespace-nowrap overflow-hidden text-sm text-left'>{data?.name}</p>
        <p className='text-sm text-left'>{data?.duration}</p>
        <h4 className='text-sm text-left'>{data?.description}</h4>
        {/* </div>
        <div className=' justify-between mx-2'> */}
        <p className='text-sm text-left'>{data?.instructor}</p>
        <p className='text-sm text-left'>{data?.location}</p>
        </div>
        <h2 className='absolute top-1 right-1 bg-green-500 p-0.5 text-white rounded-md'>{data?.status}</h2>
        <button onClick={(e)=>{
          e.preventDefault()
          e.stopPropagation()
          handleEnroll(data?._id)
        }} className='absolute z-2 bottom-1 right-1 bg-green-500 p-2 rounded text-white '>Enroll</button>
    </div>
        </Link>
        </>
  )
}

export default CourseCards