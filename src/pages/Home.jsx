import { Link } from 'react-router-dom'
import bgHero from '../assets/background-hero.png'

const shortcuts = [
  {
    to: '/ejercicios',
    title: 'Ejercicios',
    description: 'Rutinas guiadas para mejorar movilidad, fuerza y equilibrio.',
  },
  {
    to: '/autocuidado',
    title: 'Autocuidado',
    description: 'Habitos diarios para cuidar articulaciones, postura y energia.',
  },
  {
    to: '/prevencion-caidas',
    title: 'Prevencion de caidas',
    description: 'Estrategias practicas para moverte con seguridad dentro y fuera de casa.',
  },
  {
    to: '/educacion-salud',
    title: 'Educacion en salud',
    description: 'Informacion clara para tomar decisiones saludables y prevenir lesiones.',
  },
]

function Home() {
  return (
    <section className="grid gap-4 sm:gap-6">
      <article
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
        }}
      >


        <div className="absolute inset-0 ">
          <div className="pointer-events-none h-full w-full backdrop-blur-xs" />
        </div>

        

        <div className="absolute left-4 bottom-25 sm:left-12 sm:bottom-24 z-10 ">
            <h2
              className="m-0 -mb-3 text-[2.5rem] font-primary font-bold text-white sm:text-[2rem]"
              
            >
              Bienvenido a 
            </h2>
            <h1
              className="m-0 text-[3rem] font-primary font-extrabold text-white sm:text-[3.5rem]"
            >
              ProActivo 60
            </h1>
            <p
              className="m-0 max-w-xs text-[1.5rem] leading-relaxed font-secondary font-regular text-black sm:max-w-md"
              
            >
              Movilidad y bienestar para una vida plena
            </p>
        </div>
      </article>

      <section
        className="m-8 px-4 py-5 sm:px-7 sm:py-7"
        aria-labelledby="secciones-principales"
      >
        <h3
          id="secciones-principales"
          className="m-0 text-[1.4rem] font-Montserrat font-bold text-dark-green sm:text-[1.8rem]"
        >
          Explora nuestras secciones
        </h3>
        <p> 
          Tu guía para una vida más activa y segura. Te ofrecemos información sencilla y consejos útiles diseñados específicamente para acompañarte en tu proceso de salud, eliminando barreras y priorizando tu comodidad.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {shortcuts.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="grid min-h-28 gap-1.5 rounded-2xl border border-[#e3ece4] bg-white p-4 no-underline transition hover:-translate-y-0.5 hover:border-[#8bb792]"
            >
              <span
                className="text-[1.22rem]"
              >
                {item.title}
              </span>
              <span className="text-[1rem] leading-relaxed text-[#4f3f32]">{item.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Home