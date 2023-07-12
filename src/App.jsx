import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/user/:id" element={<Home />} />
        <Route path="/user/:id/CreateEmployee" element={<CreateEmployee />} />
        <Route path="/user/:id/ListEmployee" element={<ListEmployees />} /> */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
