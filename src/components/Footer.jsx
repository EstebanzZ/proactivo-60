import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="border-t border-soft-green/20 bg-white h-16">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-center gap-3 px-4">
        <img
          src={logo}
          alt="Logo de ProActivo 60"
          className="h-6 w-6 shrink-0 rounded-full object-contain"
        />
        <p className="m-0 text-[1rem] font-primary font-bold text-dark-green">
          ProActivo 60
        </p>
      </div>
    </footer>
  )
}

export default Footer
