import React from 'react'
import Signin from './pages/Signin'
import UserDashboard from './pages/UserDashboard';
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/userdashboard' element={<UserDashboard />} />
    </Routes>
  )
}
