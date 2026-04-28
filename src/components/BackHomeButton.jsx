import { Link } from 'react-router-dom'

function BackHomeButton() {
  return (
    <Link
      to="/"
      className="fixed bottom-4 right-4 z-30 inline-flex min-h-12 items-center rounded-full border border-[#8bb792] bg-[#8bb792] px-5 text-base font-extrabold text-white shadow-lg shadow-[#8bb792]/25 transition hover:bg-[#769f7d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f180b]"
      aria-label="Volver a la pagina de inicio"
    >
      Volver al inicio
    </Link>
  )
}

export default BackHomeButton