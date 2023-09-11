// React
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages
import Login from './pages/Login/Login'
import CreateEmployee from '../src/pages/CreateEmployee/CreateEmployee'
import ManageEmployees from '../src/pages/ManageEmployees/ManageEmployees'
import Error404 from '../src/pages/404/404'
// Component
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/creation-employee" element={<CreateEmployee />} />
        <Route path="/manage-employees" element={<ManageEmployees />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
