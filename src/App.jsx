import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollTop from './components/ui/ScrollTop';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import Services from './pages/Services';
// Puedes agregar más imports de páginas aquí

function App() {
  return (
    <div className="App">
      {/* Preloader */}
      <div className="preloader">
        <div className="loader-ripple">
          <div></div>
          <div></div>
        </div>
      </div>

      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/* Agrega más rutas según tus páginas */}
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;