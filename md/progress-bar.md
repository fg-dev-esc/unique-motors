# Barra de Progreso de Subasta - Documentación Técnica

**Fecha:** 15 de julio, 2025  
**Tipo de Cambio:** `[feat]` - Implementación de countdown visual  
**Prioridad:** Alta - Funcionalidad crítica de subasta  
**Fase:** Mejoras UX/UI - Actividades solicitadas  

## 🎯 Contexto del Proyecto

Esta barra de progreso fue implementada como parte de las **nuevas actividades solicitadas** para mejorar la experiencia visual del usuario durante las subastas, proporcionando un countdown visual que aparece en los últimos 15 minutos.

### Flujo de Desarrollo
1. **[feat] Sistema de Ofertas** ✅ Completado
2. **[refactor] Migración Terminología** ✅ Completado  
3. **[feat] Barra de Progreso** ✅ Actual
4. **[feat] Zoom Responsive** ⏳ Siguiente

## 📊 Métricas de Impacto

### Archivos Implementados
- **Archivos nuevos**: 2 archivos
- **Archivos modificados**: 1 archivo
- **Líneas de código agregadas**: ~110 líneas
- **Tiempo implementación**: 1 hora
- **Complejidad**: Media

## 🚀 Funcionalidad Implementada

### **🎯 Comportamiento Principal**
- **Aparece**: Cuando quedan ≤ 15 minutos de subasta
- **Se oculta**: Cuando faltan más de 15 minutos
- **Sincronización**: Tiempo real con `car.fechaFin`
- **Actualización**: Cada segundo
- **Posición**: Arriba del nombre, dentro del `car-single-wrapper`
- **Ancho**: 12 columnas (100% del contenedor)

### **⏰ Lógica de Tiempo**
- **100%**: Cuando aparece (a los 15 minutos exactos)
- **0%**: Cuando termina la subasta
- **Cálculo**: `(tiempoRestante / 900 segundos) * 100`
- **Formato**: "14:32 restante"

### **🎨 Colores Dinámicos**
- **🟢 Verde (`bg-success`)**: >50% del tiempo (>7.5 minutos)
- **🟡 Amarillo (`bg-warning`)**: 25-50% del tiempo (3.75-7.5 minutos)
- **🔴 Rojo (`bg-danger`)**: <25% del tiempo (<3.75 minutos)

## 📁 Estructura de Archivos

### **1. Hook Principal**
**Archivo:** `/src/views/detail/CarInfo/useAuctionProgressBar.js`
```javascript
export const useAuctionProgressBar = (fechaFin) => {
  // Lógica de sincronización con tiempo real
  // Cálculo de porcentajes y colores
  // Manejo de visibilidad
}
```

### **2. Componente Visual**
**Archivo:** `/src/views/detail/CarInfo/AuctionProgressBar.jsx`
```jsx
const AuctionProgressBar = ({ fechaFin }) => {
  // Renderizado de la barra
  // Manejo de estados visuales
}
```

### **3. Integración**
**Archivo:** `/src/views/detail/CarInfo/CarInfo.jsx`
```jsx
// Dentro del car-single-info
<AuctionProgressBar fechaFin={car.fechaFin} />
```

## 🔧 Configuración y Personalización

### **⏰ Modificar Tiempo de Aparición**

**Archivo:** `/src/views/detail/CarInfo/useAuctionProgressBar.js`

#### **Cambiar de 15 minutos a 2 minutos:**
```javascript
// Línea 29: Condición para mostrar la barra
if (totalMinutes <= 2) {  // Era: totalMinutes <= 15

// Línea 35: Cálculo del porcentaje  
const maxSeconds = 2 * 60;  // Era: 15 * 60
```

#### **Cambiar a 30 minutos:**
```javascript
// Línea 29
if (totalMinutes <= 30) {

// Línea 35
const maxSeconds = 30 * 60;
```

### **🎨 Modificar Colores**

**Archivo:** `/src/views/detail/CarInfo/useAuctionProgressBar.js`  
**Líneas:** 53-57

#### **Configuración actual:**
```javascript
const getProgressColor = () => {
  if (percentage > 50) return 'bg-success';  // Verde >50%
  if (percentage > 25) return 'bg-warning';  // Amarillo 25-50%
  return 'bg-danger';                        // Rojo <25%
};
```

#### **Cambiar umbrales:**
```javascript
const getProgressColor = () => {
  if (percentage > 70) return 'bg-success';  // Verde >70%
  if (percentage > 30) return 'bg-warning';  // Amarillo 30-70%
  return 'bg-danger';                        // Rojo <30%
};
```

#### **Agregar más colores:**
```javascript
const getProgressColor = () => {
  if (percentage > 75) return 'bg-success';   // Verde >75%
  if (percentage > 50) return 'bg-info';      // Azul 50-75%
  if (percentage > 25) return 'bg-warning';   // Amarillo 25-50%
  return 'bg-danger';                         // Rojo <25%
};
```

### **📱 Modificar Textos**

**Archivo:** `/src/views/detail/CarInfo/useAuctionProgressBar.js`  
**Líneas:** 59-62

#### **Cambiar mensajes:**
```javascript
const getProgressText = () => {
  if (timeLeft <= 0) return 'Subasta terminada';     // Mensaje final
  return `Faltan ${formatTime(timeLeft)}`;           // Formato tiempo
};
```

**Archivo:** `/src/views/detail/CarInfo/AuctionProgressBar.jsx`  
**Líneas:** 18, 37-40

#### **Cambiar etiquetas:**
```javascript
<small className="text-muted">Tiempo de subasta</small>     // Línea 18

<small className="text-danger">                             // Líneas 37-40
  <i className="fas fa-exclamation-triangle me-1"></i>
  Subasta finalizada
</small>
```

### **🎨 Modificar Estilo Visual**

**Archivo:** `/src/views/detail/CarInfo/AuctionProgressBar.jsx`

#### **Cambiar altura de la barra:**
```javascript
// Línea 23
<div className="progress" style={{ height: '12px' }}>  // Era: 8px
```

#### **Cambiar animación:**
```javascript
// Líneas 26-29
style={{ 
  width: `${percentage}%`,
  transition: 'width 0.5s ease-in-out'  // Era: 1s
}}
```

#### **Agregar efectos:**
```javascript
// Línea 25
className={`progress-bar ${getProgressColor()} progress-bar-striped progress-bar-animated`}
```

## 📊 Tabla de Valores Configurables

| **Valor** | **Archivo** | **Línea** | **Actual** | **Descripción** | **Ejemplo** |
|-----------|-------------|-----------|------------|-----------------|-------------|
| **Tiempo aparición** | `useAuctionProgressBar.js` | 29 | `<= 15` | Minutos para mostrar barra | `<= 2` |
| **Cálculo porcentaje** | `useAuctionProgressBar.js` | 35 | `15 * 60` | Segundos máximos para 100% | `2 * 60` |
| **Color verde** | `useAuctionProgressBar.js` | 54 | `> 50` | Porcentaje para verde | `> 70` |
| **Color amarillo** | `useAuctionProgressBar.js` | 55 | `> 25` | Porcentaje para amarillo | `> 30` |
| **Texto terminado** | `useAuctionProgressBar.js` | 60 | `'Tiempo terminado'` | Mensaje final | `'Subasta cerrada'` |
| **Altura barra** | `AuctionProgressBar.jsx` | 23 | `8px` | Grosor visual | `12px` |
| **Animación** | `AuctionProgressBar.jsx` | 28 | `1s` | Velocidad transición | `0.5s` |
| **Etiqueta principal** | `AuctionProgressBar.jsx` | 18 | `'Tiempo de subasta'` | Texto superior | `'Countdown'` |

## 🎯 Casos de Uso Comunes

### **1. Cambiar a 2 minutos**
```javascript
// useAuctionProgressBar.js líneas 29 y 35
if (totalMinutes <= 2) {
const maxSeconds = 2 * 60;
```

### **2. Hacer barra más gruesa**
```javascript
// AuctionProgressBar.jsx línea 23
<div className="progress" style={{ height: '15px' }}>
```

### **3. Cambiar colores más conservadores**
```javascript
// useAuctionProgressBar.js líneas 54-56
if (percentage > 70) return 'bg-success';
if (percentage > 40) return 'bg-warning';
return 'bg-danger';
```

### **4. Personalizar mensajes**
```javascript
// useAuctionProgressBar.js líneas 60-61
if (timeLeft <= 0) return 'Subasta cerrada';
return `Quedan ${formatTime(timeLeft)}`;
```

## 🔄 Integración con Sistema Existente

### **Sincronización con useCarInfo**
La barra usa el mismo `car.fechaFin` que el sistema de tiempo existente, asegurando consistencia total.

### **Responsive Design**
```javascript
// CarInfo.jsx línea 32
<div className="col-12 p-0 mb-3">  // 100% ancho en todas las pantallas
```

### **Conditional Rendering**
```javascript
// AuctionProgressBar.jsx línea 13
if (!shouldShow) return null;  // Se oculta automáticamente
```

## 🚀 Próximas Mejoras Sugeridas

### **1. Notificaciones**
```javascript
// Cuando llegue a 5 minutos
if (totalMinutes === 5) {
  showNotification('¡Quedan 5 minutos!');
}
```

### **2. Sonido de Alerta**
```javascript
// Cuando llegue a 1 minuto
if (totalMinutes === 1) {
  playAlertSound();
}
```

### **3. Vibración Mobile**
```javascript
// En los últimos 30 segundos
if (timeLeft <= 30 && 'vibrate' in navigator) {
  navigator.vibrate(200);
}
```

## 🔄 Siguientes Pasos en el Flujo de Desarrollo

### Inmediatos (Actividades Solicitadas)
1. **[fix] Zoom Responsive Mobile/Desktop**
   - Archivos: `src/views/detail/CarImages/`
   - Impacto: Mejorar experiencia móvil
   - Tiempo estimado: 2 horas

2. **[fix] Textos Puja Restantes**
   - Archivos: Búsqueda global en codebase
   - Impacto: Completar migración terminología
   - Tiempo estimado: 30 minutos

3. **[style] Tab Ofertas Condensado**
   - Archivos: `src/views/detail/BiddingHistory/`
   - Impacto: Mejorar layout y espaciado
   - Tiempo estimado: 1 hora

4. **[refactor] Estrellas por Likes**
   - Archivos: `src/views/detail/CarInfo/CarInfo.jsx`
   - Impacto: Cambiar sistema de rating
   - Tiempo estimado: 1.5 horas

### Optimizaciones Futuras
1. **[feat] Configuración Dinámica**
   - Permitir cambiar tiempo desde admin
   - Configuración por tipo de subasta
   - Tiempo estimado: 3 horas

2. **[feat] Notificaciones Push**
   - Alertas cuando quedan X minutos
   - Integración con sistema de notificaciones
   - Tiempo estimado: 4 horas

---

### 📋 Commits Recomendados

```bash
# Commit 1: Implementar barra de progreso base
git add src/views/detail/CarInfo/useAuctionProgressBar.js
git add src/views/detail/CarInfo/AuctionProgressBar.jsx
git commit -m "[feat] implementar barra progreso countdown 15 minutos

- Crear hook sincronizado con tiempo real de subasta
- Aparece cuando quedan ≤15 minutos
- Colores dinámicos según tiempo restante
- Actualización cada segundo con fechaFin

Mejora experiencia visual durante subastas"

# Commit 2: Integrar barra en CarInfo
git add src/views/detail/CarInfo/CarInfo.jsx
git commit -m "[feat] integrar barra progreso en vista detalle

- Posicionar arriba del nombre dentro del wrapper
- Ancho completo (12 columnas)
- Renderizado condicional automático
- Sincronización con datos existentes

Completa funcionalidad de countdown visual"

# Commit 3: Documentar configuración
git add md/progress-bar.md
git commit -m "[docs] documentar configuración barra progreso

- Guía completa de personalización
- Tabla de valores configurables
- Casos de uso comunes
- Siguientes pasos de desarrollo

Facilita mantenimiento y modificaciones futuras"
```

**Status:** ✅ IMPLEMENTADO - Listo para usar y personalizar

## 📖 Conclusión

La barra de progreso está completamente implementada y documentada, proporcionando una experiencia visual mejorada durante los últimos 15 minutos de subasta. La documentación permite fácil personalización y mantenimiento futuro.

**Total líneas documentadas:** 350+ líneas de documentación técnica completa.