import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import CreateEmployee from '../src/pages/CreateEmployee/CreateEmployee'
import ManageEmployees from '../src/pages/ManageEmployees/ManageEmployees'
import Error404 from '../src/pages/404/404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/creation" element={<CreateEmployee />} />
        <Route path="/manage" element={<ManageEmployees />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
