import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../components/SignIn'
import HomePage from '../pages/HomePage'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn/>} />
    </Routes>
  )
}

export default Router
