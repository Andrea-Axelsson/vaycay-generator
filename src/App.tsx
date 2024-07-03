import Home from './pages/Home'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Destinations from './pages/Destinations'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="destinations" element={<Destinations/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
