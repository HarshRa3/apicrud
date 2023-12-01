import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignUp from '../components/SignUp'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}

export default Router
