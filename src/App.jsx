import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import LoginPage from './Components/LoginSign'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FooterTwo from './Components/FooterTwo'


const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<><LoginPage /> <FooterTwo /></>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

