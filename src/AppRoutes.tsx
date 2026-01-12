import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import ChoosePokemon from './pages/ChoosePokemon'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose-pokemon" element={<ChoosePokemon />} />


      </Routes>
    </Router>
  )
}

export default AppRoutes
