import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MyMeds from './components/MyMeds'
import Reminder from './components/Reminder'
import Pharmacies from './components/Pharmacies'
import Profile from './components/Profile'
import Logout from './components/Logout'

function App(){
  return (
    <div>
      <Logo/>
      <Navbar/>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/my-meds' element={<MyMeds/>}/>
        <Route path='/reminders' element={<Reminder/>}/>
        <Route path='/pharmacies' element={<Pharmacies/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>

    </div>
  )
}

export default App