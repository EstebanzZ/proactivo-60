import { Link } from 'react-router-dom'
import bgHero from '../assets/background-hero.png'

const shortcuts = [
  {
    to: '/ejercicios',
    title: 'Ejercicios',
    description: "ejercicios sencillos y seguros que te ayudarán a mejorar tu movilidad, equilibrio y fuerza. Puedes realizarlos en casa, a tu ritmo y de forma segura.",
  },
  {
    to: '/autocuidado',
    title: 'Autocuidado',
    description: 'El autocuidado es importante para mantener tu bienestar. Aquí encontrarás recomendaciones prácticas para cuidar tu cuerpo y tu salud todos los días.',
  },
  {
    to: '/prevencion-caidas',
    title: 'Prevencion de caidas',
    description: 'Las caídas pueden prevenirse con pequeños cambios en tu entorno y hábitos diarios.',
  },
  {
    to: '/educacion-salud',
    title: 'Educacion en salud',
    description: 'Aquí encontrarás información sencilla sobre el cuidado del cuerpo, la postura y la prevención de molestias.',
  },
]

function Home() {
  return (
    <section className="grid gap-4 overflow-x-hidden sm:gap-6 mb-12">
      <article
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0">
          <div className="pointer-events-none h-full w-full backdrop-blur-[3px]" />
        </div>

        

        <div className="absolute left-4 bottom-24 z-10 sm:left-12 sm:bottom-24">
            <h2
              className="m-0 -mb-3 text-[2.5rem] font-primary font-bold text-white sm:text-[2rem]"
              
            >
              Bienvenido a 
            </h2>
            <h1
              className="m-0 text-[3rem] font-primary font-extrabold text-accent-green sm:text-[3.5rem]"
            >
              ProActivo 60
            </h1>
            <p
              className="m-0 max-w-xs text-[1.5rem] leading-relaxed font-secondary font-regular text-white sm:max-w-md"
              
            >
              Movilidad y bienestar para una vida plena
            </p>
        </div>
      </article>

      <section
        className="m-2 px-4 py-5 sm:px-7 sm:py-3 sm:pt-1"
        aria-labelledby="secciones-principales"
      >
        <h3
          id="secciones-principales"
          className="mb-2 text-[1.5rem] font-primary font-bold text-dark-green sm:text-[2rem]"
        >
          Explora nuestras secciones
        </h3>
        <p className='text-[1.2rem] font-secondary text-black leading-relaxed sm:text-[1.3rem]'> 
          Tu guía para una vida más activa y segura. Te ofrecemos información sencilla y consejos útiles diseñados específicamente para acompañarte en tu proceso de salud, eliminando barreras y priorizando tu comodidad.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {shortcuts.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="grid min-h-28 gap-1.5 rounded-2xl border border-soft-green/30 bg-accent-green p-4 no-underline transition hover:-translate-y-0.5 hover:border-soft-green"
            >
              <span
                className="text-[1.22rem] font-primary font-bold text-dark-green"
              >
                {item.title}
              </span>
              <span className="text-[1rem] font-secondary leading-relaxed text-black">{item.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Home