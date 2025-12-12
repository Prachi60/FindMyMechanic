import React from 'react'
import Header from './component/Header/Header'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from "../src/pages/Home/Home"


const App = () => {
  return (
    <>
   {/* <Header/> */}
   <Routes>
    <Route path='/'element={<Home/>}/>
   </Routes>
    </>
  )
}

export default App