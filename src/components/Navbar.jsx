import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold tracking-tight">Macargo</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#industries" className="hover:text-white">Industries</a>
          <a href="#network" className="hover:text-white">Network</a>
          <a href="#why" className="hover:text-white">Why Us</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg text-blue-100 hover:bg-white/10" aria-label="Open menu">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
