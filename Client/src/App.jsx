import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
export default function App() {
  return (

     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/projects" element={<Project/>}/>


     </Routes>
     
     </BrowserRouter>
  )
}
