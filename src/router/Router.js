import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignUp from '../components/SignUp'
import Admin from '../pages/Admin/Admin'
import User from '../pages/User/User'
import SignIn from '../components/SignIn'
import AddPoll from '../pages/AddPoll/AddPoll'
import AddOption from '../pages/AddOption/AddOption'
import EditTitle from '../pages/EditTitle/EditTitle'
// import EditTitle from '../redux/Slices/EditTitle'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/userPoll' element={<User/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path='/addPoll' element={<AddPoll/>}/>
        <Route path='admin/EditTitle/:editDataId' element={<EditTitle />}> </Route>
        <Route path='admin/AddOption/:optionDataId' element={<AddOption />}> </Route>
    </Routes>
  )
}

export default Router
