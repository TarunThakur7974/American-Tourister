import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import LoginPage from './Components/LoginSign'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FooterTwo from './Components/FooterTwo'
import Cart from './Components/Cart'


const App = () => {

  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<><LoginPage /></>} />
          <Route path="/cart" element={<><Cart /></>} />
        </Routes>
        <FooterTwo />
      </Router>
    </>
  )
}

export default App

