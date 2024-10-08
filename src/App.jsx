import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import RefundPolicy from './pages/RefundPolicy'
import TermsAndCondition from './pages/TermsAndCondition'
import Teams from './pages/Teams'

function App() {

  return (
    <>
      <div className="tutedude-pages">
        <Routes>
          <Route path="/" element={
            <div className="links">
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/privacy"}>Privacy</Link>
              <Link to={"/teams"}>Teams</Link>
              <Link to={"/refund-policy"}>Refund Policy</Link>
              <Link to={"/terms-condition"}>Terms And Condition</Link>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-condition" element={<TermsAndCondition />} />

        </Routes>
      </div>
    </>
  )
}

export default App
