import React from 'react'
import loading from "../assets/Loading.gif"
function Loader() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        <img src={loading} alt="loading..."  />
    </div>
  )
}

export default Loader