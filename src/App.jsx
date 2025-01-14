import { useState } from 'react'
import './App.css'
import "./index.css"
import Header from './Components/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App