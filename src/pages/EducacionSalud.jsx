import BackHomeButton from '../components/BackHomeButton'

function EducacionSalud() {
  return (
     <>
      <section className=" max-w-5xl mx-auto mt-18 px-4 py-6 sm:px-7 sm:py-8 sm:mt-18 mb-12">
        <div className="">
          <h2
            className="m-0 text-[1.8rem] leading-tight text-dark-green font-primary font-bold sm:text-[2.2rem]"
          >
            Educacion en salud
          </h2>

          <p className=" mt-3 max-w-3xl text-[1.05rem] leading-relaxed text-black font-secondary sm:text-[1.1rem]">
            Conocer sobre tu salud te permite cuidarte mejor y prevenir problemas. La información clara y sencilla es 
            clave para mejorar tu bienestar.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-soft-green/70 bg-[#f8fbf8] p-5 sm:p-6">
          <h3 className="text-center text-[1.15rem] font-primary font-bold text-dark-green sm:text-[1.25rem]">
            Recomendaciones
          </h3>

          <ul className="mt-4 list-disc space-y-3 pl-6 text-[1rem] leading-relaxed text-black font-secondary sm:text-[1.05rem]">
            <li>
              Mantén una buena postura al sentarte y al caminar.
            </li>
            <li>
              Evita cargar objetos pesados de forma incorrecta.
            </li>
            <li>
             Escucha tu cuerpo y descansa si sientes dolor.
            </li>
            <li>
              Consulta a un profesional de salud cuando sea necesario.
            </li> 
            <li>
              La actividad física ayuda a mantener tu cuerpo activo y fuerte.
            </li>                     
          </ul>
        </div>
      </section>
      <BackHomeButton />
    </>
  )
}

export default EducacionSalud