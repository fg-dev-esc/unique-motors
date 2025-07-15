# Campos de la API - Subasta30 Backend

**Fecha:** Enero 2025  
**Tipo de Cambio:** `[feat]` - Definición de estructura de datos y endpoints
**Prioridad:** Crítica - Base para todas las funcionalidades
**Fase:** 2 - Arquitectura y Estructura de Componentes

## 🎯 Contexto del Proyecto

Esta documentación define la estructura de datos y endpoints del backend que alimenta el proyecto Unique Motors. Es la base sobre la cual se construyen todas las funcionalidades del frontend.

### Flujo de Desarrollo
1. **[config] Configuración Inicial** ✅ Completado
2. **[feat] Definición de API** ✅ Actual
3. **[feat] Implementación de Views** ⏳ Siguiente

## 📊 Métricas de Impacto

### Endpoints Documentados
- **Total endpoints**: 25+ endpoints
- **Categorías principales**: 8 categorías
- **Interfaces definidas**: 15+ interfaces TypeScript
- **Tiempo documentación**: 3 horas
- **Complejidad**: Alta

### Funcionalidades Cubiertas
- ✅ Autenticación y usuarios
- ✅ Gestión de artículos/vehículos
- ✅ Sistema de subastas y pujas
- ✅ Compradores y vendedores
- ✅ Categorías dinámicas
- ✅ Pagos y garantías
- ✅ Documentos y archivos
- ✅ Datos geográficos

## Estructura Principal de Datos

### **Artículos (Productos para Subasta)**
```typescript
interface ArticuloDTO {
  articuloID: string
  nombre: string                  // max 200 chars
  descripcion: string            // max 1000 chars
  montoSalida: number            // mínimo 0.01
  subcategoriaID: number
  municipioID: number
  cp: string                     // código postal, max 10 chars
  calle?: string                 // max 200 chars
  colonia?: string               // max 100 chars
  noExt?: string                 // número exterior, max 20 chars
  noInt?: string                 // número interior, max 20 chars
  otrosDatos?: string            // max 500 chars
  observaciones?: string         // max 1000 chars
  tipoVenta?: string             // max 100 chars
  contactoNombre?: string        // max 100 chars
  contactoTelefono?: string      // max 20 chars
  contactoEmail?: string         // email, max 100 chars
  diasAnticipo?: number          // 0-365 días
  diasLiquidacion?: number       // 0-365 días
  camposValor: CampoValorItem[]  // campos dinámicos por categoría
}
```

### **Usuarios y Autenticación**
```typescript
interface LoginDTO {
  email: string
  password: string
  app: string                    // identificador de aplicación
}

interface UserPostDTO {
  usuarioID?: string
  nombre: string
  email: string
  password: string
  estaActivo: boolean
  apps: string[]                 // aplicaciones permitidas
}
```

### **Compradores**
```typescript
interface CompradorFisicoDTO {
  compradorID?: string
  nombre: string
  apellidoPaterno: string
  apellidoMaterno: string
  rfc: string
  telefono: string
  email: string
  curp: string
  ocupacion: string
  calle: string
  noExt: string
  noInt?: string
  colonia: string
  cp: string
  municipioID: number
  nacionalidad: string
  clabeBancaria: string
  regimenFiscal: string
}

interface CompradorMoralDTO {
  compradorID?: string
  razonSocial: string
  giroMercantil: string
  nacionalidad: string
  rfc: string
  telefono: string
  email: string
  fechaConstitucion: string
  folioMercantil: string
  calle: string
  noExt: string
  noInt?: string
  colonia: string
  cp: string
  municipioID: number
  clabeBancaria: string
  regimenFiscal: string
  apoderadoNombre: string
  apoderadoApellidoPaterno: string
  apoderadoApellidoMaterno: string
}
```

### **Subastas**
```typescript
interface SubastaDTO {
  subastaID?: string
  rangoFecha: string[]           // [fechaInicio, fechaFin]
  descripcion: string
  nombre: string
  usuarioCreateSubastaID: string
}

interface TorreDTO {
  torreID: string
  numeroTorre: number
  fechaInicio: string
  fechaFin: string
  articuloID: string
}
```

### **Pujas**
```typescript
interface PujaDTO {
  torreID: string
  monto: number                  // monto de la puja
}

interface AdjudicarDTO {
  torreID: string
  usuarioEstableceAdjudicacionID: string
  usuarioAdjudicadoID: string
  pujaID: string
}
```

### **Categorías y Campos Dinámicos**
```typescript
interface CategoriaDTO {
  categoriaID?: number
  nombre: string
}

interface SubcategoriaDTO {
  subcategoriaID?: number
  categoriaID: number
  nombre: string
}

interface CampoDTO {
  campoID?: number
  subcategoriaID: number
  label: string
  tipo: string                   // text, number, select, etc.
  listaID?: number              // para campos tipo select
  orden?: number
}

interface CampoValorItem {
  campoID: number
  valor: string                  // max 500 chars
}
```

### **Pagos y Garantías**
```typescript
interface OrdenPagoDTO {
  compradorID: string
  descripcion: string
  monto: number
  fechaLimitePago: string        // formato date-time
  cuentaPagoID: number
  usuarioCreacionID: string
}

interface GarantiaDTO {
  compradorID: string
  monto: number
  // File se maneja como multipart/form-data
}
```

### **Clientes (Vendedores)**
```typescript
interface ClienteDTO {
  clienteID?: string
  nombreComercial: string
  razonSocial: string
  contactoNombre: string
  contactoCelular: string
  contactoEmail: string
  usuarioID: string
  modeloSubasta: string
}
```

### **Documentos y Archivos**
```typescript
interface DocumentoDTO {
  // Para artículos
  ArticuloID: string
  Nombre: string
  UsuarioID: string
  Tipo: string                   // "imagen", "documento", etc.
  File: File                     // binary file upload
}

interface CompradorDocumentoDTO {
  CompradorID: string
  Nombre: string
  UsuarioID: string
  File: File
}
```

## Endpoints Clave por Funcionalidad

### **Autenticación**
- `POST /api/Login` - Login principal
- `POST /api/Login/Refresh` - Renovar token
- `POST /api/Login/CreateComprador` - Registro de comprador

### **Artículos (CRUD completo)**
- `GET /api/Articulos/GetArticulos` - Listar artículos
- `GET /api/Articulos/GetArticulo/{ArticuloID}` - Detalle de artículo
- `POST /api/Articulos/PostArticulo` - Crear artículo
- `POST /api/Articulos/UpdateArticulo` - Actualizar artículo
- `POST /api/Articulos/CambiaEstatusArticulo` - Cambiar estatus

### **Subastas**
- `GET /api/Subastas/GetSubastas` - Listar subastas
- `POST /api/Subastas/PostSubasta` - Crear subasta
- `POST /api/Subastas/PostArticulosSubasta` - Agregar artículos a subasta
- `GET /api/Subastas/GetTorres/{SubastaID}` - Torres de una subasta

### **Pujas**
- `POST /api/Pujas/Pujar` - Realizar puja
- `GET /api/Pujas/GetPujasUsuario/{UsuarioPujaID}/{TorreID}` - Pujas de usuario
- `POST /api/AdminPujas/AdjudicarTorre` - Adjudicar torre

### **Compradores**
- `GET /api/Compradores/GetCompradores` - Listar compradores
- `POST /api/Compradores/UpdateComprador` - Actualizar comprador
- `POST /api/Compradores/UpdateTipoPersona` - Física/Moral

### **Categorías**
- `GET /api/Categorias/GetCategorias` - Listar categorías
- `GET /api/Categorias/GetSubcategorias/{CategoriaID}` - Subcategorías
- `GET /api/Categorias/GetCampos/{SubcategoriaID}` - Campos por subcategoría

### **Archivos/Documentos**
- `POST /api/Articulos/PostDocumentoArticulo` - Subir documento de artículo
- `GET /api/Articulos/GetArticuloDocumento/{ArticuloDocumentoID}` - Descargar documento
- `POST /api/Compradores/PostDocumentoComprador` - Subir documento de comprador

### **Datos Genéricos**
- `GET /api/Genericos/GetEstados` - Estados/provincias
- `GET /api/Genericos/GetMunicipios/{EstadoID}` - Municipios por estado
- `GET /api/Genericos/GetRoles` - Roles de usuario

## Autenticación

La API usa **Bearer Token** authentication:
```
Authorization: Bearer {token}
```

Muchos endpoints requieren autenticación (marked with `"security": [{"oauth2": []}]`).

## Manejo de Archivos

Para upload de archivos, usar `multipart/form-data`:
```typescript
FormData {
  File: binary,
  [otherFields]: string
}
```

- Rangos de días (0-365)
- Tipos de persona (física/moral)

## 🔄 Siguientes Pasos en el Flujo de Desarrollo

### Inmediatos (Fase 3 - Funcionalidades Core)
1. **[feat] Implementación de Servicios API**
   - Archivos: `src/services/apiService.js`, `src/api/api.js`
   - Impacto: Conexión con backend funcional
   - Tiempo estimado: 4 horas

2. **[feat] Integración con Redux**
   - Archivos: `src/redux/features/`
   - Impacto: Manejo de estado global
   - Tiempo estimado: 6 horas

### Funcionalidades Principales (Fase 3)
1. **[feat] Sistema de Autenticación**
   - Dependencias: API de login y registro
   - Tiempo estimado: 8 horas

2. **[feat] Gestión de Artículos**
   - Dependencias: API de artículos y categorías
   - Tiempo estimado: 12 horas

3. **[feat] Sistema de Subastas**
   - Dependencias: API de subastas y pujas
   - Tiempo estimado: 16 horas

### Optimizaciones (Fase 4)
1. **[refactor] Optimización de Queries**
   - Archivos: Servicios API
   - Impacto: Mejor rendimiento
   - Tiempo estimado: 4 horas

---

### 📋 Commits Recomendados para API

```bash
# Commit 1: Documentar estructura de datos
git add md/api.md
git commit -m "[feat] documentar estructura de datos de API backend

- Definir interfaces TypeScript para todos los DTOs
- Documentar endpoints principales por funcionalidad
- Establecer validaciones y restricciones
- Crear guía de referencia para desarrollo frontend

Establece base técnica para integración con backend"

# Commit 2: Implementar servicios API
git add src/services/ src/api/
git commit -m "[feat] implementar servicios de conexión con API

- Crear servicio base para HTTP requests
- Implementar servicios específicos por funcionalidad
- Configurar interceptores para autenticación
- Establecer manejo de errores centralizado

Conecta frontend con backend Subasta30"

# Commit 3: Integrar con Redux
git add src/redux/
git commit -m "[feat] integrar servicios API con Redux store

- Crear thunks para operaciones asíncronas
- Implementar reducers para manejo de estado
- Configurar middleware para API calls
- Establecer patrones de loading y error

Completa integración de estado global con backend"
```

Esta documentación de API es fundamental para el desarrollo de todas las funcionalidades del frontend, proporcionando la base técnica necesaria para las siguientes fases del proyecto.