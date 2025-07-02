# Documentación Técnica
### Índice
- [Estructura de Directorios](#estructura-de-directorios)
- [Sistema de Enrutamiento](#sistema-de-enrutamiento)
- [Integración CSS](#integración-css)
---
## Stack Tecnológico
```javascript
{
  "react": "19.1.0",              
  "react-dom": "19.1.0",          
  "react-router-dom": "7.6.3",    
  "vite": "7.0.0",                
  "framer-motion": "12.23.0",     
  "swiper": "11.2.10"             
}
```



## Estructura de Directorios

```
src/
├── components/
│   ├── layout/          
│   │   ├── header.jsx   
│   │   └── footer.jsx   
│   ├── sections/        
│   │   ├── heroslider.jsx      
│   │   ├── findcarform.jsx     
│   │   ├── cararea.jsx         
│   │   ├── counterarea.jsx     
│   │   ├── faqarea.jsx         
│   │   └── testimonialarea.jsx 
│   └── ui/              
│       ├── breadcrumb.jsx      
│       ├── carsidebar.jsx      
│       └── scrolltop.jsx       
├── pages/               
│   ├── home.jsx         
│   ├── cars.jsx         
│   ├── about.jsx        
│   ├── contact.jsx      
│   └── services.jsx     
├── app.jsx              
├── app.css              
├── index.css            
└── main.jsx             
```

## Categorización de Componentes

| Tipo | Propósito | Ejemplos |
|------|-----------|----------|
| **layout** | estructura y navegación | header, footer |
| **pages** | componentes de ruta | home, cars, about |
| **sections** | bloques de contenido | heroSlider, aboutArea |
| **ui** | elementos reutilizables | breadCrumb, scrollTop |


## Sistema de Enrutamiento

```javascript
import { routes, route } from 'react-router-dom';

<routes>
  <route path="/" element={<home />} />
  <route path="/about" element={<about />} />
  <route path="/cars" element={<cars />} />
  <route path="/contact" element={<contact />} />
  <route path="/services" element={<services />} />
</routes>
```

## Route
```
pages/
├── home.jsx               route: /
├── about.jsx              route: /about  
├── cars.jsx               route: /cars
├── contact.jsx            route: /contact
└── services.jsx           route: /services
```

## Integración CSS

```css
@import url('/assets/css/bootstrap.min.css');
@import url('/assets/css/all-fontawesome.min.css');
@import url('/assets/css/animate.min.css');
@import url('/assets/css/magnific-popup.min.css');
@import url('/assets/css/owl.carousel.min.css');
@import url('/assets/css/jquery-ui.min.css');
@import url('/assets/css/jquery.timepicker.min.css');
@import url('/assets/css/style.css');
```