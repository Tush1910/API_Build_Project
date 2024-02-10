import React from 'react'
import './App.css'
import Home from './Component/Home'
import NavBar from './Component/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserList from './Component/UserList'
import CompanyList from './Component/CompanyList'
import ClientForm from './Component/ClientFrom'

const App = () => {
  return (
    <React.Fragment>
      <NavBar/>
        <React.Fragment>
          <Routes>
            <Route path='/' element={<Navigate to={'home'} />}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/home/userlist' element={<UserList/>}/>
            <Route path='/home/companylist' element={<CompanyList/>}/>
            <Route path='/home/clientform' element={<ClientForm/>}/>
          </Routes>
        </React.Fragment>
    </React.Fragment>
  )
}

export default App

