import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Route } from 'react-router'
import { Routes } from 'react-router'
import Root from './pages/Root'
import About from './pages/About'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Services from './pages/Services'
import Contact from './pages/Contact'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Root/>} >
        <Route path="" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="resume" element={<Resume/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
