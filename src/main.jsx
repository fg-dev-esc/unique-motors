import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Función para cargar scripts dinámicamente
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Cargar todas las librerías JavaScript necesarias
const loadAllScripts = async () => {
  try {
    // Cargar jQuery primero (requerido por otras librerías)
    await loadScript('/assets/js/jquery-3.6.0.min.js');
    
    // Cargar el resto de librerías
    await Promise.all([
      loadScript('/assets/js/modernizr.min.js'),
      loadScript('/assets/js/bootstrap.bundle.min.js'),
      loadScript('/assets/js/imagesloaded.pkgd.min.js'),
      loadScript('/assets/js/jquery.magnific-popup.min.js'),
      loadScript('/assets/js/isotope.pkgd.min.js'),
      loadScript('/assets/js/jquery.appear.min.js'),
      loadScript('/assets/js/jquery.easing.min.js'),
      loadScript('/assets/js/owl.carousel.min.js'),
      loadScript('/assets/js/counter-up.js'),
      loadScript('/assets/js/jquery-ui.min.js'),
      loadScript('/assets/js/jquery.timepicker.min.js'),
      loadScript('/assets/js/wow.min.js')
    ]);
    
    // Cargar el script principal al final
    await loadScript('/assets/js/main.js');
    
    console.log('Todas las librerías cargadas correctamente');
  } catch (error) {
    console.error('Error cargando librerías:', error);
  }
};

// Crear el root una sola vez
const root = ReactDOM.createRoot(document.getElementById('root'));

// Inicializar la aplicación
loadAllScripts().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
});

// Si hay problemas con las librerías, cargar la app de todos modos
setTimeout(() => {
  const rootElement = document.getElementById('root');
  if (!rootElement.hasChildNodes()) {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}, 3000);