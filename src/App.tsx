import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandPillars from './components/BrandPillars';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="brandpillars">
        <BrandPillars />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
