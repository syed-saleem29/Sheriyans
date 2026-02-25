import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Products'
import Navbar from './components/Navbar'
import RandomAnything from './pages/RandomAnything'
import AnyCourses from './pages/AnyCourses'
import CourseDetail from './pages/CourseDetail'
import Mens from './pages/Mens'
import Women from './pages/Women'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/product' element={<Product/>}  />
        <Route path='/Courses' element={<RandomAnything/>}  />

        {/* Nested Routes */}
        <Route path='/product/mens' element={<Mens/>}  />
        <Route path='/product/womens' element={<Women/>}  />

        {/* Dynamic Routes */}
        <Route path='/about/:id' element={<RandomAnything/>}  />
        <Route path='/Courses/:id' element={<AnyCourses/>}  />

        {/* Nested Dynamic Routes */}
        <Route path='/Courses/:id/details' element={<CourseDetail/>}  />

        {/* Not Found Page */}
        <Route path='/*'  element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App