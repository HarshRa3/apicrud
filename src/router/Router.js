import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignUp from '../components/SignUp'
import Admin from '../pages/Admin/Admin'
import User from '../pages/User/User'
import SignIn from '../components/SignIn'
import AddPoll from '../pages/AddPoll/AddPoll'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/userPoll' element={<User/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path='/addPoll' element={<AddPoll/>}/>
    </Routes>
  )
}

export default Router
