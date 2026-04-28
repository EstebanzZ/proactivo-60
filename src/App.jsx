import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Ejercicios from './pages/Ejercicios'
import Autocuidado from './pages/Autocuidado'
import PrevencionCaidas from './pages/PrevencionCaidas'
import EducacionSalud from './pages/EducacionSalud'

function App() {
  const [navVisible, setNavVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setNavVisible(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar visible={navVisible} />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ejercicios" element={<Ejercicios />} />
            <Route path="/autocuidado" element={<Autocuidado />} />
            <Route path="/prevencion-caidas" element={<PrevencionCaidas />} />
            <Route path="/educacion-salud" element={<EducacionSalud />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
