import { useState } from 'react'
import './App.css'
import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from './component/About';
import Services from './component/Services';
import Home from './component/Home';
import Contact from './component/Contact';
import Career from './component/Career';
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