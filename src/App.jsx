import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import Network from './components/Network'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Network />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
