import BackHomeButton from '../components/BackHomeButton'

function PrevencionCaidas() {
  return (
     <>
      <section className=" max-w-5xl mx-auto mt-18 px-4 py-6 sm:px-7 sm:py-8 sm:mt-18 mb-12">
        <div className="">
          <h2
            className="m-0 text-[1.8rem] leading-tight text-dark-green font-primary font-bold sm:text-[2.2rem]"
          >
            Prevencion de caidas
          </h2>

          <p className=" mt-3 max-w-3xl text-[1.05rem] leading-relaxed text-black font-secondary sm:text-[1.1rem]">
            Las caídas son uno de los principales riesgos en adultos mayores, pero pueden prevenirse con hábitos adecuados 
            y un entorno seguro.

          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-soft-green/70 bg-[#f8fbf8] p-5 sm:p-6">
          <h3 className="text-center text-[1.15rem] font-primary font-bold text-dark-green sm:text-[1.25rem]">
            Recomendaciones
          </h3>

          <ul className="mt-4 list-disc space-y-3 pl-6 text-[1rem] leading-relaxed text-black font-secondary sm:text-[1.05rem]">
            <li>
              Mantén los espacios libres de objetos en el piso.

            </li>
            <li>
              Usa calzado cómodo y antideslizante.
            </li>
            <li>
             Evita caminar en pisos mojados o resbalosos.
            </li>
            <li>
              Mantén buena iluminación en todas las áreas de la casa.
            </li> 
            <li>
              Utiliza pasamanos o apoyos si es necesario.
            </li>
            <li>
              Levántate lentamente para evitar mareos.
            </li>                       
          </ul>
        </div>
      </section>
      <BackHomeButton />
    </>
  )
}

export default PrevencionCaidas