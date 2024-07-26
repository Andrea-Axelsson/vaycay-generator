import Home from './pages/Home'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Destinations from './pages/Destinations'
import SavedTrips from './pages/SavedTrips'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="destinations" element={<Destinations/>}/>
    <Route path="saved-trips" element={<SavedTrips/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
