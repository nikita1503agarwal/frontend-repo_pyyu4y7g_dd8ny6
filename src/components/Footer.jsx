const Footer = () => {
  return (
    <footer className="bg-slate-950 text-blue-100 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold">Macargo</h4>
          <p className="mt-3 text-sm text-blue-200/90">
            Global freight forwarding and logistics. Reliable, compliant, and human.
          </p>
        </div>
        <div>
          <h5 className="text-white font-medium">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>+1 (312) 555-0199</li>
            <li>sales@macargo.com</li>
            <li>operations@macargo.com</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium">Offices</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Chicago (HQ)</li>
            <li>Rotterdam</li>
            <li>Dubai</li>
            <li>Singapore</li>
            <li>Hong Kong</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium">Legal</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white/90" href="#">Terms & Conditions</a></li>
            <li><a className="hover:text-white/90" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white/90" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-blue-300/70">
        © {new Date().getFullYear()} Macargo. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
