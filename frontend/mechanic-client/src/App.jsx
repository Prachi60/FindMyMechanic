import React from 'react'
import Header from './component/Header/Header'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from "../src/pages/Home/Home"
import Footer from './component/Footer/Footer'
import Login from "../src/pages/Login/Login"
import Register from "../src/pages/Register/Register"
import MechanicDashboard from "./pages/MechanicDashboard";


const App = () => {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/mechanic-dashboard' element={<MechanicDashboard />} />
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App