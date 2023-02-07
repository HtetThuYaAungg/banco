import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import './App.css'
import Details from './pages/Details';
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/first' element={<FirstPage />} />
      <Route path='/second' element={<SecondPage />} />
      
      <Route path='/third' element={<ThirdPage />}>
       
      </Route>
     <Route path='/third/:id' element={<Details />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App