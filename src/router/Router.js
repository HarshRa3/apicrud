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
import Protected from './Protected'
const Router = () => {

  return (
    <Routes>
       <Route path="/" element={<Protected Component={HomePage} />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/admin' element={<Protected Component={Admin} />}/>
        <Route path='/userPoll' element={<Protected Component={User} />}/>
        <Route path="/signIn" element={<Protected Component={SignIn} />}/>
        <Route path='/addPoll' element={<Protected Component={AddPoll} />}/>
        <Route path='admin/EditTitle/:editDataId' element={<Protected Component={EditTitle} />}> </Route>
        <Route path='admin/AddOption/:optionDataId' element={<Protected Component={AddOption} />}> </Route>
    </Routes>
  )
}

export default Router
