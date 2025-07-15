# Documentación de Arquitectura de Views

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Arquitectura](https://img.shields.io/badge/Arquitectura-Basada%20en%20Features-blue?style=for-the-badge)
![Estado](https://img.shields.io/badge/Estado-Desarrollo-orange?style=for-the-badge)
![Mantenibilidad](https://img.shields.io/badge/Mantenibilidad-Alta-brightgreen?style=for-the-badge)

## 📋 Registro de Desarrollo Cronológico

### **Fase 1: Configuración Inicial del Proyecto**
#### **[config] Inicialización del Proyecto**
- **Fecha**: Diciembre 2024
- **Cambios realizados**:
  - Configuración inicial de React + Vite
  - Setup de dependencias principales
  - Estructura de carpetas base
- **Archivos modificados**:
  - `package.json` - Dependencias del proyecto
  - `vite.config.js` - Configuración de Vite
  - `index.html` - Archivo HTML principal
- **Impacto**: Establece la base técnica del proyecto
- **¿Por qué?**: Necesario para comenzar el desarrollo con herramientas modernas

---

### **Fase 2: Arquitectura y Estructura de Componentes**
#### **[feat] Sistema de Views y Componentes**
- **Fecha**: Diciembre 2024 - Enero 2025
- **Cambios realizados**:
  - Implementación del patrón Feature-Based Architecture
  - Creación de 7 views principales
  - Hook personalizado por feature
  - Separación de datos en archivos JSON
- **Archivos modificados**:
  - `src/views/` - Estructura completa de views
  - Patrón: `Feature.jsx` + `featureData.json` + `useFeature.js`
- **Impacto**: Arquitectura escalable y mantenible
- **¿Por qué?**: Organización clara y reutilización de código

#### **[style] Implementación de Estilos Base**
- **Fecha**: Enero 2025
- **Cambios realizados**:
  - Integración de Bootstrap 5
  - Estilos CSS personalizados
  - Componentes de UI responsivos
- **Archivos modificados**:
  - `public/assets/css/` - Archivos CSS
  - `src/index.css` - Estilos globales
- **Impacto**: Interfaz visual coherente y profesional
- **¿Por qué?**: Necesario para una experiencia de usuario óptima

---

### **Fase 3: Funcionalidades Core**
#### **[feat] Funcionalidad 1: Sistema de Autenticación**
- **Fecha**: Enero 2025
- **Cambios realizados**:
  - Login y registro de usuarios
  - Integración con Firebase Auth
  - Manejo de estados de usuario
- **Archivos modificados**:
  - `src/views/auth/` - Componentes de autenticación
  - `src/services/authService.js` - Servicio de autenticación
  - `src/redux/features/auth/` - Redux slices
- **Impacto**: Sistema de usuarios funcional
- **¿Por qué?**: Requerido para acceso a funcionalidades protegidas

#### **[feat] Funcionalidad 2: Homepage y Visualización de Vehículos**
- **Fecha**: Enero 2025
- **Cambios realizados**:
  - Hero section con carousel
  - Grid de vehículos
  - Filtros de búsqueda
- **Archivos modificados**:
  - `src/views/home/` - Componentes de homepage
  - `src/components/search/` - Componentes de búsqueda
  - `src/redux/features/home/` - Estado de homepage
- **Impacto**: Punto de entrada atractivo y funcional
- **¿Por qué?**: Primera impresión para usuarios y navegación de inventario

#### **[feat] Funcionalidad 3: Detalle de Vehículos y Sistema de Ofertas**
- **Fecha**: Enero 2025
- **Cambios realizados**:
  - Página de detalle completa
  - Sistema de ofertas en tiempo real
  - Galería de imágenes
  - Historial de ofertas
- **Archivos modificados**:
  - `src/views/detail/` - Componentes de detalle
  - `src/components/auction/` - Componentes de subasta
  - `src/redux/features/auction/` - Estado de subastas
- **Impacto**: Funcionalidad core de subasta
- **¿Por qué?**: Elemento central del modelo de negocio

#### **[feat] Funcionalidad 4: Perfil de Usuario**
- **Fecha**: Enero 2025
- **Cambios realizados**:
  - Dashboard de usuario
  - Gestión de favoritos
  - Historial de transacciones
  - Configuración de perfil
- **Archivos modificados**:
  - `src/views/profile/` - Componentes de perfil
  - `src/components/` - Componentes auxiliares
  - `src/redux/features/profile/` - Estado de perfil
- **Impacto**: Experiencia personalizada para usuarios
- **¿Por qué?**: Gestión de datos personales y actividad

#### **[feat] Funcionalidad 5: Sistema de Venta**
- **Fecha**: Febrero 2025
- **Cambios realizados**:
  - Formulario multi-paso
  - Carga de imágenes
  - Validación de datos
- **Archivos modificados**:
  - `src/views/sell/` - Componentes de venta
  - `src/components/upload/` - Componentes de carga
  - `src/redux/features/sell/` - Estado de venta
- **Impacto**: Permite a usuarios vender vehículos
- **¿Por qué?**: Lado vendedor del marketplace

#### **[feat] Funcionalidad 6: Sistema de Contacto**
- **Fecha**: Febrero 2025
- **Cambios realizados**:
  - Formulario de contacto
  - Mapa de ubicación
  - Información de contacto
- **Archivos modificados**:
  - `src/views/contact/` - Componentes de contacto
  - `src/services/` - Servicios de envío
- **Impacto**: Canal de comunicación con usuarios
- **¿Por qué?**: Soporte y atención al cliente

#### **[feat] Funcionalidad 7: Página About**
- **Fecha**: Febrero 2025
- **Cambios realizados**:
  - Información corporativa
  - Sección de servicios
  - FAQ y partners
- **Archivos modificados**:
  - `src/views/about/` - Componentes informativos
- **Impacto**: Información corporativa y confianza
- **¿Por qué?**: Credibilidad y transparencia

---

### **Fase 4: Optimizaciones y Mejoras**
#### **[refactor] Extracción de Textos Hardcodeados**
- **Fecha**: Julio 2025
- **Cambios realizados**:
  - Migración de textos a archivos JSON
  - Preparación para internacionalización
  - Mantenibilidad mejorada
- **Archivos modificados**:
  - 7 archivos JSX modificados
  - 7 archivos JSON de datos actualizados
- **Impacto**: Código más limpio y escalable
- **¿Por qué?**: Facilita mantenimiento y futuras traducciones

#### **[style] Sistema de Paletas de Colores**
- **Fecha**: Julio 2025
- **Cambios realizados**:
  - Sistema de temas dinámicos
  - Variables CSS centralizadas
  - Controlador JavaScript para cambio de temas
- **Archivos modificados**:
  - `public/assets/css/color-palettes.css` - Nuevo archivo
  - `public/assets/css/theme-controller.js` - Nuevo archivo
  - `index.html` - Integración de archivos
- **Impacto**: Personalización visual y consistencia
- **¿Por qué?**: Mejora la experiencia de usuario y branding

#### **[config] Configuración de Herramientas**
- **Fecha**: Julio 2025
- **Cambios realizados**:
  - Configuración de ESLint
  - Setup de Vercel para deploy
  - Configuración de Git
- **Archivos modificados**:
  - `eslint.config.js` - Reglas de linting
  - `vercel.json` - Configuración de deploy
  - `.gitignore` - Archivos excluidos
- **Impacto**: Calidad de código y deploy automatizado
- **¿Por qué?**: Mejores prácticas de desarrollo y CI/CD

---

### **Próximos Pasos en Desarrollo**

#### **[feat] Funcionalidad 8: Sistema de Pagos**
- **Pendiente**: Integración con pasarelas de pago
- **Archivos a modificar**: `src/components/payment/`
- **Impacto**: Completar flujo de transacciones

#### **[feat] Funcionalidad 9: Sistema de Notificaciones**
- **Pendiente**: Notificaciones push y email
- **Archivos a modificar**: `src/services/notifications/`
- **Impacto**: Comunicación proactiva con usuarios

#### **[refactor] Optimización de Performance**
- **Pendiente**: Lazy loading y code splitting
- **Archivos a modificar**: Router y components
- **Impacto**: Mejor rendimiento de la aplicación

#### **[chore] Testing y Documentación**
- **Pendiente**: Tests unitarios y documentación técnica
- **Archivos a modificar**: `__tests__/` y `docs/`
- **Impacto**: Calidad y mantenibilidad del código

## Estructura de Directorios

```
src/views/
├── about/
│   ├── About.jsx
│   ├── AboutSection/
│   │   ├── AboutSection.jsx
│   │   ├── aboutSectionData.json
│   │   └── useAboutSection.js
│   ├── CounterSection/
│   │   ├── CounterSection.jsx
│   │   ├── counterSectionData.json
│   │   └── useCounterSection.js
│   ├── FaqSection/
│   │   ├── FaqSection.jsx
│   │   ├── faqData.json
│   │   └── useFaqSection.js
│   ├── HeroSection/
│   │   ├── HeroSection.jsx
│   │   ├── heroData.json
│   │   └── useHeroSection.js
│   ├── PartnerSection/
│   │   ├── PartnerSection.jsx
│   │   ├── partnerData.json
│   │   └── usePartnerSection.js
│   └── ServiceSection/
│       ├── ServiceSection.jsx
│       ├── serviceData.json
│       └── useServiceSection.js
├── auth/
│   ├── Auth.jsx
│   ├── LoginSection/
│   │   ├── LoginSection.jsx
│   │   ├── loginSectionData.json
│   │   └── useLoginSection.js
│   └── RegisterSection/
│       ├── RegisterSection.jsx
│       ├── registerSectionData.json
│       └── useRegisterSection.js
├── contact/
│   ├── Contact.jsx
│   ├── ContactForm/
│   │   ├── ContactForm.jsx
│   │   ├── contactFormData.json
│   │   └── useContactForm.js
│   ├── ContactHeader/
│   │   ├── ContactHeader.jsx
│   │   ├── contactHeaderData.json
│   │   └── useContactHeader.js
│   ├── ContactInfo/
│   │   ├── ContactInfo.jsx
│   │   ├── contactInfoData.json
│   │   └── useContactInfo.js
│   ├── ContactMap/
│   │   ├── ContactMap.jsx
│   │   ├── contactMapData.json
│   │   └── useContactMap.js
│   └── HeroSection/
│       ├── HeroSection.jsx
│       ├── heroData.json
│       └── useHeroSection.js
├── detail/
│   ├── Detail.jsx
│   ├── detailData.json
│   ├── useDetail.js
│   ├── BiddingHistory/
│   │   ├── BiddingHistory.jsx
│   │   ├── biddingHistoryData.json
│   │   └── useBiddingHistory.js
│   ├── CarComments/
│   │   ├── CarComments.jsx
│   │   ├── carCommentsData.json
│   │   └── useCarComments.js
│   ├── CarImages/
│   │   ├── CarImages.jsx
│   │   └── useCarImages.js
│   ├── CarInfo/
│   │   ├── CarInfo.jsx
│   │   ├── useCarInfo.js
│   │   └── BiddingInterface/
│   │       └── BiddingInterface.jsx
│   ├── CarTabs/
│   │   ├── CarTabs.jsx
│   │   └── useCarTabs.js
│   ├── RelatedCars/
│   │   ├── RelatedCars.jsx
│   │   └── useRelatedCars.js
│   └── hooks/
│       └── useCarDetail.js
├── home/
│   ├── Home.jsx
│   ├── CarArea/
│   │   ├── CarArea.jsx
│   │   ├── carAreaData.json
│   │   └── useCarArea.js
│   └── HeroSection/
│       ├── HeroSection.jsx
│       ├── heroData.json
│       └── useHeroSection.js
├── profile/
│   ├── Profile.jsx
│   ├── BillingInfoPage.jsx
│   ├── FavoritesPage.jsx
│   ├── MyListingsPage.jsx
│   ├── ProfileSettingsPage.jsx
│   ├── TransactionsPage.jsx
│   ├── BillingInfo/
│   │   ├── BillingInfo.jsx
│   │   ├── billingInfoData.json
│   │   └── useBillingInfo.js
│   ├── Favorites/
│   │   ├── Favorites.jsx
│   │   ├── favoritesData.json
│   │   └── useFavorites.js
│   ├── MyListings/
│   │   ├── MyListings.jsx
│   │   ├── myListingsData.json
│   │   └── useMyListings.js
│   ├── ProfileInfo/
│   │   ├── ProfileInfo.jsx
│   │   ├── profileInfoData.json
│   │   └── useProfileInfo.js
│   ├── ProfileLayout/
│   │   ├── ProfileLayout.jsx
│   │   ├── profileLayoutData.json
│   │   └── useProfileLayout.js
│   ├── ProfileSettings/
│   │   ├── ProfileSettings.jsx
│   │   ├── profileSettingsData.json
│   │   └── useProfileSettings.js
│   ├── ProfileSidebar/
│   │   ├── ProfileSidebar.jsx
│   │   ├── profileSidebarData.json
│   │   └── useProfileSidebar.js
│   └── Transactions/
│       ├── Transactions.jsx
│       ├── transactionsData.json
│       └── useTransactions.js
├── sell/
│   ├── Sell.jsx
│   ├── HeroSection/
│   │   ├── HeroSection.jsx
│   │   ├── heroData.json
│   │   └── useHeroSection.js
│   ├── SellConfirmation/
│   │   ├── SellConfirmation.jsx
│   │   ├── sellConfirmationData.json
│   │   └── useSellConfirmation.js
│   └── SellWizard/
│       ├── SellWizard.jsx
│       ├── sellWizardData.json
│       ├── useSellWizard.js
│       ├── CarInfo/
│       │   ├── CarInfo.jsx
│       │   ├── carInfoData.json
│       │   └── useCarInfo.js
│       ├── PersonalInfo/
│       │   ├── PersonalInfo.jsx
│       │   ├── personalInfoData.json
│       │   └── usePersonalInfo.js
│       └── PhotosInfo/
│           ├── PhotosInfo.jsx
│           ├── photosInfoData.json
│           └── usePhotosInfo.js
└── mocks.js
```

## Descripción de Views

### 1. **Home** - Página Principal
- **Ruta**: `/`
- **Propósito**: Página de inicio con hero section y área de vehículos destacados
- **Secciones**: 
  - `HeroSection` - Carousel principal con vehículos destacados
  - `CarArea` - Grid de vehículos disponibles en subasta
- **Características**: Punto de entrada principal, búsqueda rápida, vehículos destacados

### 2. **About** - Acerca de Nosotros
- **Ruta**: `/about`
- **Propósito**: Información corporativa y servicios de la empresa
- **Secciones**:
  - `HeroSection` - Banner principal
  - `AboutSection` - Historia y misión de la empresa
  - `ServiceSection` - Servicios ofrecidos
  - `CounterSection` - Estadísticas y logros
  - `PartnerSection` - Socios y alianzas
  - `FaqSection` - Preguntas frecuentes
- **Características**: Contenido estático, información corporativa

### 3. **Auth** - Autenticación
- **Ruta**: `/auth`
- **Propósito**: Sistema de login y registro de usuarios
- **Secciones**:
  - `LoginSection` - Formulario de inicio de sesión
  - `RegisterSection` - Formulario de registro
- **Características**: Validación de formularios, integración con Redux, autenticación Firebase

### 4. **Contact** - Contacto
- **Ruta**: `/contact`
- **Propósito**: Información de contacto y formulario de consultas
- **Secciones**:
  - `HeroSection` - Banner de contacto
  - `ContactHeader` - Información principal
  - `ContactInfo` - Datos de contacto (teléfono, email, dirección)
  - `ContactMap` - Mapa de ubicación
  - `ContactForm` - Formulario de contacto
- **Características**: Formulario funcional, información de contacto, mapa interactivo

### 5. **Detail** - Detalle de Vehículo
- **Ruta**: `/detail/:id`
- **Propósito**: Página individual de cada vehículo en subasta
- **Arquitectura**: Una sola página con múltiples secciones
- **Secciones**:
  - `CarImages` - Galería de imágenes del vehículo
  - `CarInfo` - Información básica y sistema de ofertas
  - `CarTabs` - Tabs con descripción, info adicional, comentarios, historial de ofertas
  - `BiddingHistory` - Historial completo de ofertas
  - `RelatedCars` - Vehículos relacionados
- **Hook Compartido**: `useCarDetail.js` - Maneja datos del vehículo, loading, error
- **Características**: Sistema de ofertas en tiempo real, comentarios, especificaciones técnicas

### 6. **Profile** - Perfil de Usuario
- **Ruta Base**: `/profile`
- **Propósito**: Dashboard del usuario con múltiples funcionalidades
- **Arquitectura**: Múltiples páginas con layout compartido
- **Páginas**:
  - `Profile.jsx` - Dashboard principal (`/profile`)
  - `ProfileSettingsPage.jsx` - Configuración de perfil (`/profile/settings`)
  - `FavoritesPage.jsx` - Vehículos favoritos (`/profile/favorites`)
  - `MyListingsPage.jsx` - Mis vehículos publicados (`/profile/listings`)
  - `BillingInfoPage.jsx` - Información de facturación (`/profile/billing`)
  - `TransactionsPage.jsx` - Historial de transacciones (`/profile/transactions`)
- **Layout Compartido**: `ProfileLayout.jsx` y `ProfileSidebar.jsx`
- **Características**: Navegación por pestañas, gestión de perfil, historial de actividades

### 7. **Sell** - Vender Vehículo
- **Ruta**: `/sell`
- **Propósito**: Proceso de publicación de vehículos para subasta
- **Secciones**:
  - `HeroSection` - Banner de venta
  - `SellWizard` - Formulario multi-paso para publicar vehículo
    - `PersonalInfo` - Información personal del vendedor
    - `CarInfo` - Especificaciones del vehículo
    - `PhotosInfo` - Carga de imágenes
  - `SellConfirmation` - Confirmación de publicación
- **Características**: Formulario multi-paso, validación, carga de archivos

## Organización por Features

### Patrón de Organización

Cada feature sigue el siguiente patrón de organización:

```
feature/
├── Feature.jsx                # Componente principal
├── featureData.json          # Datos de configuración (opcional)
├── useFeature.js            # Hook personalizado (opcional)
└── SubSection/              # Subsecciones específicas
    ├── SubSection.jsx
    ├── subSectionData.json
    └── useSubSection.js
```

### Tipos de Archivos por Feature

| Tipo | Extensión | Propósito |
|------|-----------|-----------|
| Componente Principal | `.jsx` | Punto de entrada de la feature |
| Subsección | `.jsx` | Componentes específicos de la feature |
| Datos | `.json` | Configuración estática y contenido |
| Hook | `.js` | Lógica de negocio y estado |
| Página | `Page.jsx` | Páginas específicas del perfil |

### Features Principales

#### 1. About (6 secciones)
- AboutSection
- CounterSection
- FaqSection
- HeroSection
- PartnerSection
- ServiceSection

#### 2. Auth (2 secciones)
- LoginSection
- RegisterSection

#### 3. Contact (5 secciones)
- ContactForm
- ContactHeader
- ContactInfo
- ContactMap
- HeroSection

#### 4. Detail (6 secciones + hooks)
- BiddingHistory
- CarComments
- CarImages
- CarInfo (con BiddingInterface)
- CarTabs
- RelatedCars
- hooks/ (hooks compartidos)

#### 5. Home (2 secciones)
- CarArea
- HeroSection

#### 6. Profile (7 secciones + 6 páginas)
- BillingInfo
- Favorites
- MyListings
- ProfileInfo
- ProfileLayout
- ProfileSettings
- ProfileSidebar
- Transactions

#### 7. Sell (3 secciones)
- HeroSection
- SellConfirmation
- SellWizard (con 3 pasos)

### Estructura de Datos

Cada subsección que requiere datos estáticos incluye:
- `componentData.json` - Configuración y contenido
- `useComponent.js` - Hook para manejo de lógica
- `Component.jsx` - Componente de presentación

### Casos Especiales

#### Detail Feature
- Incluye carpeta `hooks/` para hooks compartidos
- `BiddingInterface` como subcomponente anidado

#### Profile Feature
- Páginas individuales: `BillingInfoPage.jsx`, `FavoritesPage.jsx`, etc.
- Componente principal `Profile.jsx`

#### SellWizard
- Formulario multi-paso con 3 secciones:
  - CarInfo
  - PersonalInfo
  - PhotosInfo

---

<div align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![Arquitectura](https://img.shields.io/badge/Patrón-Basado%20en%20Features-blue?style=flat-square)
![Hooks](https://img.shields.io/badge/Hooks-Personalizados-green?style=flat-square)
![Datos](https://img.shields.io/badge/Datos-Configuración%20JSON-orange?style=flat-square)

</div>