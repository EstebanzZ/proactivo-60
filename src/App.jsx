import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ejercicios from './pages/Ejercicios'
import Autocuidado from './pages/Autocuidado'
import PrevencionCaidas from './pages/PrevencionCaidas'
import EducacionSalud from './pages/EducacionSalud'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
        <Navbar />
        <ScrollToTop />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ejercicios" element={<Ejercicios />} />
            <Route path="/autocuidado" element={<Autocuidado />} />
            <Route path="/prevencion-caidas" element={<PrevencionCaidas />} />
            <Route path="/educacion-salud" element={<EducacionSalud />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
