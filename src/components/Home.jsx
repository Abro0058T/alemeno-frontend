import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCourse } from '../api/course'
import Search from'./Search.jsx'
import { getUserDetails } from '../api/user.js'

function Home() {
  const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(fetchCourse())
    dispatch(getUserDetails("6635dbe9f355aac47bf57a18"))
  },[])
  return (
    <>
    <header  className=' flex w-[100vw] sm:flex-row flex-col justify-between my-2 p-2 gap-2'>
    <nav>
  <ul className='flex justify-start'>
            <li className='bg-purple-400 border-none rounded-md p-2 mx-6 text-white' >
                <Link to="/">
                Dashboard
                </Link>
                </li>
            <li  className='bg-purple-400 border-none rounded-md p-2 text-white' >
                <Link to="courses">
                Courses
                </Link>
            </li>
        </ul>
    </nav>
<Search/>
</header>
<div className=' p-2  w-screen'>
     <Outlet/>
          </div>
</>
  )
}

export default Home