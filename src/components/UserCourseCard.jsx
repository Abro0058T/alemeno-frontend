import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { marksAsComplete } from '../api/user'

function UserCourseCard({data}) {
  const dispatch=useDispatch()
  const handleMarkComplete=()=>{

    dispatch(marksAsComplete({courseId:data?.course?._id,userId:'6635dbe9f355aac47bf57a18'}))
  }
  return (  <>
    <Link   to={`/course/${data?.course?._id}`} >
  <div className=' border p-2 w-92 rounded-md  relative flex my-4'>
  <img src={data?.course?.thumbnail} alt="CourseImage"  width={"30%"}/>
  <div className='mx-2'>
  <p className='truncate whitespace-nowrap overflow-hidden text-sm text-left'>{data?.course?.name}</p>
  <p className='text-sm text-left'>{data?.course?.duration}</p>
  <h4 className='text-sm text-left'>{data?.course?.description}</h4>
  {/* </div>
  <div className=' justify-between mx-2'> */}
  <p className='text-sm text-left'>{data?.course?.instructor}</p>
  <p className='text-sm text-left'>{data?.course?.location}</p>
 <div className='h-2 w-[35vw] border border-green-600 rounded-md'><div className={`h-2 w-[${data?.progress}%] bg-green-400`}>
  </div></div>
   </div>
  <h2 className='absolute top-1 right-1 bg-green-500 p-0.5 text-white rounded-md'>{data?.course?.status}</h2>
  <button onClick={(e)=>{
    e.preventDefault()
    e.stopPropagation()
    handleMarkComplete()
  }} className={`absolute z-2 bottom-1 right-1 ${data?.progress==100?'bg-green-700':'bg-red-500'}  text-white  text-xs p-1 rounded-md`}>{data?.progress==100?"Completed":"Mark As Complete"}</button>
</div>
  </Link>
  </>
  )
}

export default UserCourseCard