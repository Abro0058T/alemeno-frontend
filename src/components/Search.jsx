import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCourse } from '../api/course'
import { useNavigate } from 'react-router-dom'

function Search() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [search, setSearch] = useState("")
    const handleSearch=()=>{
      dispatch(searchCourse(search.toLowerCase()))
      navigate("/courses",{replace:true})
    }
  return (
    <div className='flex justify-center sm:w-[70vw] w-[100vw] '>
        <input type="text" className='border p-2 border-gray-400 sm:w-[40vw]  w-[70vw] rounded-md' placeholder='Search courses or insutructor' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button className='mx-2 bg-purple-400 p-2  text-white rounded-md' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search