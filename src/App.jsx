import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Home from './components/home/home';
import About from './components/about/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Hackathon from './components/Hackathon/Hackathon';
import Research from './components/Research/Research';
import Contact from './components/contact/Contact';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />           
            <Route path='/services' element={<Services />} />  
            <Route path='/projects' element={<Projects />} />  
            <Route path='/experience' element={<Experience />} /> 
            <Route path='/certificates' element={<Certificates />} />        
            <Route path='/hackathon' element={<Hackathon />} />        
            <Route path='/research' element={<Research />} />        
        </Routes>
    </BrowserRouter>
  )
}

export default App
