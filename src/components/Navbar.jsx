import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/ejercicios', label: 'Ejercicios' },
  { to: '/autocuidado', label: 'Autocuidado' },
  { to: '/prevencion-caidas', label: 'Prevencion de caidas' },
  { to: '/educacion-salud', label: 'Educacion en salud' },
]

function Navbar({ visible = false }) {
  const baseClasses =
    'mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-3 py-3 sm:px-5';
  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        visible
          ? 'top-0 opacity-100 pointer-events-auto bg-white/95 border-b border-[#e3ece4] backdrop-blur-sm'
          : 'top-0 opacity-0 pointer-events-none'
      }`}
    >
      <div className={baseClasses}>
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo de ProActivo 60"
            className="h-10 w-10 shrink-0 rounded-full object-contain"
          />
          <h1 className="m-0 text-[1.05rem] leading-tight sm:text-[1.2rem]">
            ProActivo 60
          </h1>
        </div>

        <nav aria-label="Navegacion principal" className="-mx-1 overflow-x-auto pb-1">
          <ul className="m-0 flex min-w-max list-none gap-2 px-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'inline-flex min-h-11 items-center rounded-full border px-4 text-[0.98rem] font-extrabold transition',
                      isActive
                        ? 'border-[#8bb792] bg-[#8bb792] text-white'
                        : 'border-[#e3ece4] bg-white text-[#4f3f32] hover:border-[#8bb792] hover:text-[#2f180b]',
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