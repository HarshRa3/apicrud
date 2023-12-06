import React from 'react'
import SignIn from '../components/SignIn'
import { useLocation } from 'react-router-dom'
const HomePage = () => {
  const location = useLocation()
  console.log(location.state, 'pppppppppppp');
  return (
    <div>
        <SignIn/>
    </div>
  )
}

export default HomePage
