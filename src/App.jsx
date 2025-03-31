import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Layout/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Services from './Component/Services';
import Work from './Component/Work';
import Contact from './Component/Contact';
import Footer from './Layout/Footer';

function App() {
  return (
    <Router>
    <div className='bg-[#0e0c1e]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App;
