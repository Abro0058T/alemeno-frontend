import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import Home from './components/Home'
import CourseDetails from './components/courseDetails/CourseDetails'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/" element={<Dashboard/>}/>
      <Route path='course/:courseId' element={<CourseDetails/>}/>
      <Route path='courses' element={<Courses/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
