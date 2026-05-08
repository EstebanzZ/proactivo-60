import { useState } from 'react'
import BackHomeButton from '../components/BackHomeButton'
import dia1Ej1 from '../assets/ejercicios/dia1-1.png'
import dia1Ej2 from '../assets/ejercicios/dia1-2.png'
import dia1Ej3 from '../assets/ejercicios/dia1-3.png'
import dia1Ej4 from '../assets/ejercicios/dia1-4.png'
import dia2Ej1 from '../assets/ejercicios/dia2-1.png'
import dia2Ej2 from '../assets/ejercicios/dia2-2.png'
import dia2Ej3 from '../assets/ejercicios/dia2-3.png'
import dia2Ej4 from '../assets/ejercicios/dia2-4.png'
import dia3Ej1 from '../assets/ejercicios/dia3-1.png'
import dia3Ej2 from '../assets/ejercicios/dia3-2.png'
import dia3Ej3 from '../assets/ejercicios/dia3-3.png'
import dia3Ej4 from '../assets/ejercicios/dia3-4.png'
import dia4Ej1 from '../assets/ejercicios/dia4-1.jpeg'
import dia4Ej2 from '../assets/ejercicios/dia4-2.jpeg'
import dia4Ej3 from '../assets/ejercicios/dia4-3.jpeg'
import dia4Ej4 from '../assets/ejercicios/dia4-4.jpeg'
import dia5Ej1 from '../assets/ejercicios/dia5-1.jpeg'
import dia5Ej2 from '../assets/ejercicios/dia5-2.jpeg'
import dia5Ej3 from '../assets/ejercicios/dia5-3.jpeg'
import dia5Ej4 from '../assets/ejercicios/dia5-4.jpeg'

const dias = [
  {
    dia: 1,
    titulo: 'Fuerza y movilidad',
    ejercicios: [
      {
        orden: 1,
        nombre: 'Marcha sentado: 2 minutos',
        paso1: 'Siéntese en una silla con la espalda recta.',
        paso2: 'Levante las rodillas de forma alterna simulando una marcha.', // Corregido según el nombre del ejercicio
        imagen: dia1Ej1,
      },
      {
        orden: 2,
        nombre: 'Elevación de brazos: 10 repeticiones ',
        paso1: 'Levantar ambos brazos hacia arriba estirándolos bien.',
        paso2: 'Bajarlos lentamente hasta la posición inicial.',
        imagen: dia1Ej2,
      },
      {
        orden: 3,
        nombre: 'Extensión de piernas sentado: 10 repeticiones por cada lado',
        paso1: 'Extender una pierna y mantenerla recta durante 3 segundos.',
        paso2: 'Alternar ambas piernas controlando el descenso.',
        imagen: dia1Ej3,
      },
      {
        orden: 4,
        nombre: 'Apretar pelota: 10 repeticiones por cada mano',
        paso1: 'Sostener una pelota suave y apretarla con la mano.',
        paso2: 'Mantener durante 5 segundos y luego relajar.',
        imagen: dia1Ej4,
      },
    ],
  },
  {
    dia: 2,
    titulo: 'Equilibrio y coordinación',
    ejercicios: [
      {
        orden: 1,
        nombre: 'Levantarse y sentarse: 8 repeticiones',
        paso1: 'Siéntese en la silla y coloque los pies firmes en el suelo.',
        paso2: 'Levántese con cuidado usando apoyo si es necesario.',
        imagen: dia2Ej1,
      },
      {
        orden: 2,
        nombre: 'Balance lateral: Repetir durante 2 minutos',
        paso1: 'Póngase de pie sujetándose del respaldo de una silla.',
        paso2: 'Mueva el peso del cuerpo de un lado a otro suavemente.',
        imagen: dia2Ej2,
      },
      {
        orden: 3,
        nombre: 'Caminata en línea recta: 3 minutos',
        paso1: 'Ubique una línea imaginaria en el suelo frente a usted.',
        paso2: 'Dé pasos cortos siguiendo la línea manteniendo el equilibrio.',
        imagen: dia2Ej3,
      },
      {
        orden: 4,
        nombre: 'Toque de hombros: 15 repeticiones',
        paso1: 'Tocar el hombro izquierdo con la mano derecha.',
        paso2: 'Tocar el hombro derecho con la mano izquierda de forma alterna.',
        imagen: dia2Ej4,
      },
    ],
  },
  {
    dia: 3,
    titulo: 'Flexibilidad y relajación',
    ejercicios: [
      {
        orden: 1,
        nombre: 'Rotacion de cuello: 5 repeticiones por cada lado',
        paso1: 'Girar suavemente la cabeza hacia el lado derecho.',
        paso2: 'Regresar al centro y girar suavemente hacia el lado izquierdo.',
        imagen: dia3Ej1,
      },
      {
        orden: 2,
        nombre: 'Estiramiento de brazos: 15 segundos por cada lado',
        paso1: 'Extender un brazo al frente cruzando el pecho.',
        paso2: 'Sostenerlo con la otra mano aplicando una ligera presión.',
        imagen: dia3Ej2,
      },
      {
        orden: 3,
        nombre: 'Flexion lateral del tronco sentado: 10 repeticiones por cada lado',
        paso1: 'Siéntese con la espalda recta y manos en la cintura.',
        paso2: 'Inclinar el torso suavemente hacia un lado y luego hacia el otro.',
        imagen: dia3Ej3,
      },
      {
        orden: 4,
        nombre: 'Respiración profunda: 5 minutos',
        paso1: 'Siéntese cómodo y lleve la atención a la postura y al cuello.',
        paso2: 'Inhale profundamente por la nariz y exhale despacio por la boca.',
        imagen: dia3Ej4,
      },
    ],

  },
  {
    dia: 4,
    titulo: 'Postura y control',
    ejercicios: [
      {
        orden: 1,
        nombre: 'Estiramiento de brazos',
        paso1: 'Parate o sientate con la espalda recta',
        paso2: 'Estira los brazos al frente y estiralos suavemente durante unos segundos',
        imagen: dia4Ej1,
      },
      {
        orden: 2,
        nombre: 'Levantarse y sentarse de la silla: 8 repeticiones',
        paso1: 'Siéntese en una silla con la espalda recta y los pies apoyados en el suelo.',
        paso2: 'Levantate lentamente sin usar las manos y vuelve a sentarte despacio.',
        imagen: dia4Ej2,
      },
      {
        orden: 3,
        nombre: 'Elevaciones de talones',
        paso1: 'De pie, sostente en una silla.',
        paso2: 'Eleva los talones quedando en puntas.',
        imagen: dia4Ej3,
      },
      {
        orden: 4,
        nombre: 'Caminar en linea recta (Talon a punta)',
        paso1: 'Coloca un pie delante del otro tocando talon con punta, manteniendo la mirada al frente.',
        paso2: 'Avanza repitiendo lo mismo lentamente, ayudandote con los brazos para equilibrarte.',
        imagen: dia4Ej4,
      },
    ],
  },
  {
    dia: 5,
    titulo: 'Resistencia y condicion',
    ejercicios: [
      {
        orden: 1,
        nombre: 'Mantenerse en un solo pie',
        paso1: 'Parate detras de una silla y sujetala.',
        paso2: 'Levante un pie y manten el equilibrio de 10 a 20 segundos.',
        imagen: dia5Ej1,
      },
      {
        orden: 2,
        nombre: 'Elevacion de piernas (Sentado)',
        paso1: 'Sientate recto en una silla con los pies apoyados.',
        paso2: 'Levanta una pierna estirada, baja y cambia de lado.',
        imagen: dia5Ej2,
      },
      {
        orden: 3,
        nombre: 'Flexion de brazos (Con botella)',
        paso1: 'Sujeta una botella en cada mano con los brazos extendidos a los lados del cuerpo.',
        paso2: 'Flexiona los brazos hacia los hombros y baja lentamente, repitiendo el movimiento.',
        imagen: dia5Ej3,
      },
      {
        orden: 4,
        nombre: 'Empuje contra la pared',
        paso1: 'Apoya las manos a la pared a la altura del pecho.',
        paso2: 'Flexiona los brazos acercandote a la pared y luego empuja para volver.',
        imagen: dia5Ej4,
      },
    ],
  },

];

function Ejercicios() {
  const [openDay, setOpenDay] = useState(null)

  const toggleDay = (dayNumber) => {
    setOpenDay(openDay === dayNumber ? null : dayNumber)
  }

  return (
    <>
      <section className="max-w-5xl mx-auto mt-18 px-4 py-6 sm:px-7 sm:py-8 sm:mt-18 mb-12">
        <h2 className="m-0 text-[1.8rem] leading-tight text-dark-green font-primary font-bold sm:text-[2.2rem]">
          Ejercicios
        </h2>

        <p className="mt-3 max-w-3xl text-[1.05rem] leading-relaxed text-black font-secondary sm:text-[1.1rem]">
          Descubre rutinas guiadas diseñadas específicamente para mejorar tu movilidad, fuerza y equilibrio. Cada día presenta ejercicios progresivos que puedes realizar cómodamente, adaptados a tu ritmo y necesidades. Sigue los pasos detallados y disfruta de los beneficios de mantenerte activo.
        </p>

        <div className="mt-10 space-y-4">
          {dias.map((dia) => (
            <div key={dia.dia} className="border border-soft-green rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleDay(dia.dia)}
                className="w-full p-6 flex items-center justify-between bg-white hover:bg-soft-green transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-[1.25rem] font-primary text-dark-green font-bold leading-relaxed sm:text-[1.5rem]">
                    Día {dia.dia}
                  </h3>
                  <h4 className="text-[1rem] font-primary text-dark-green font-semibold mt-2">
                    {dia.titulo}
                  </h4>
                </div>
                <span className="text-dark-green text-[1.5rem] font-bold">
                  {openDay === dia.dia ? '−' : '+'}
                </span>
              </button>

              {openDay === dia.dia && (
                <div className="p-6 bg-white border-t border-soft-green space-y-6">
                  {dia.ejercicios.map((ejercicio) => (
                    <div key={ejercicio.orden} className="p-4">
                      <div className="mb-4 text-center">
                        <p className="text-[1.1rem] font-secondary text-dark-green leading-relaxed sm:text-[1.2rem]">
                          <strong>{ejercicio.orden}. {ejercicio.nombre}</strong>
                        </p>
                      </div>

                      <div className="flex justify-center mb-6">
                        <img
                          src={ejercicio.imagen}
                          alt={`Día ${dia.dia} ejercicio ${ejercicio.orden}`}
                          className="w-full max-w-md"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                          <p className="text-[0.95rem] font-secondary text-black leading-relaxed">
                            <strong>Paso 1:</strong> {ejercicio.paso1}
                          </p>
                        </div>

                        {ejercicio.paso2 ? (
                          <div className="text-center">
                            <p className="text-[0.95rem] font-secondary text-black leading-relaxed">
                              <strong>Paso 2:</strong> {ejercicio.paso2}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <BackHomeButton />
    </>
  )
}

export default Ejercicios