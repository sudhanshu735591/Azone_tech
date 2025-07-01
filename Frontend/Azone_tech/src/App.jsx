import { useState } from 'react'
import './App.css'
import "./index.css"
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Career from './components/Career';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/career' element={<Career/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App