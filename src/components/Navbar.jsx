import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/ejercicios', label: 'Ejercicios' },
  { to: '/autocuidado', label: 'Autocuidado' },
  { to: '/prevencion-caidas', label: 'Prevencion de caidas' },
  { to: '/educacion-salud', label: 'Educacion en salud' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const baseClasses =
    'mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-3 py-3 sm:px-5';
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b border-soft-green/30 bg-white/95 text-dark-green backdrop-blur-sm"
    >
      <div className={baseClasses}>
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo de ProActivo 60"
            className="h-10 w-10 shrink-0 rounded-full object-contain"
          />
          <h1 className="m-0 text-[1.05rem] leading-tight font-primary font-bold sm:text-[1.2rem]">
            ProActivo 60
          </h1>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-soft-green/40 text-dark-green transition hover:bg-soft-green/10 focus:outline-none focus:ring-2 focus:ring-soft-green/40 md:hidden"
          aria-label="Abrir menu principal"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-dark-green" />
            <span className="h-0.5 w-5 rounded-full bg-dark-green" />
            <span className="h-0.5 w-5 rounded-full bg-dark-green" />
          </span>
        </button>

        <nav aria-label="Navegacion principal" className="hidden md:block">
          <ul className="m-0 flex list-none items-center gap-2 px-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'inline-flex min-h-11 items-center rounded-full border px-4 text-[0.98rem] font-extrabold transition',
                      isActive
                        ? 'border-soft-green bg-soft-green text-white'
                        : 'border-soft-green/25 bg-white text-dark-green hover:border-soft-green hover:bg-soft-green/10',
                    ].join(' ')
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`border-t border-soft-green/20 bg-white md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <nav aria-label="Menu principal desplegable" className="mx-auto max-w-5xl px-3 py-3 sm:px-5">
          <ul className="m-0 grid list-none gap-2 p-0">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'flex min-h-11 items-center rounded-2xl border px-4 text-[0.98rem] font-extrabold transition',
                      isActive
                        ? 'border-soft-green bg-soft-green text-white'
                        : 'border-soft-green/25 bg-white text-dark-green hover:bg-soft-green/10',
                    ].join(' ')
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar