import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import LoginPage from './Components/LoginSign'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FooterTwo from './Components/FooterTwo'
import Cart from './Components/Cart'
import SignUp from './Components/SignUp'
import ScrollButton from './Components/SmallComponents/ScrollButton'


const App = () => {

  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<><LoginPage /></>} />
          <Route path="/cart" element={<><Cart /></>} />
          <Route path="/signup" element={<><SignUp /></>} />
        </Routes>
        <FooterTwo />
        <ScrollButton />
      </Router>
    </>
  )
}

export default App

