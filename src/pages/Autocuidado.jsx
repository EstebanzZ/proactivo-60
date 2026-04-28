import BackHomeButton from '../components/BackHomeButton'

function Autocuidado() {
  return (
    <>
      <section className=" max-w-5xl mx-auto mt-18 px-4 py-6 sm:px-7 sm:py-8 sm:mt-18 mb-12">
        <div className="">
          <h2
            className="m-0 text-[1.8rem] leading-tight text-dark-green font-primary font-bold sm:text-[2.2rem]"
          >
            Autocuidado
          </h2>

          <p className=" mt-3 max-w-3xl text-[1.05rem] leading-relaxed text-black font-secondary sm:text-[1.1rem]">
            El autocuidado es fundamental para mantener una buena salud y calidad de vida. Realizar  
            pequeñas acciones todos los días puede ayudarte a sentirte mejor y prevenir enfermedades.

          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-soft-green/70 bg-[#f8fbf8] p-5 sm:p-6">
          <h3 className="text-center text-[1.15rem] font-primary font-bold text-dark-green sm:text-[1.25rem]">
            Recomendaciones
          </h3>

          <ul className="mt-4 list-disc space-y-3 pl-6 text-[1rem] leading-relaxed text-black font-secondary sm:text-[1.05rem]">
            <li>
              Mantenga una postura erguida durante las actividades diarias y haga pausas para
              moverse con tranquilidad.
            </li>
            <li>
              Bebe suficiente agua durante el día.
            </li>
            <li>
              Lleva una alimentación balanceada con frutas y verduras.
            </li>
            <li>
              Duerme bien y descansa lo necesario.
            </li> 
            <li>
              Realiza actividad física suave todos los días.
            </li>
            <li>
              Evita el estrés y busca actividades que te relajen. 
            </li>                       
          </ul>
        </div>
      </section>
      <BackHomeButton />
    </>
  )
}

export default Autocuidado