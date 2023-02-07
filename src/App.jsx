import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import './App.css'
import Guard from './components/Guard'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <Guard><Dashboard /></Guard>
            } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
