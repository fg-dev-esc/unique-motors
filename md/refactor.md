# checklist refactor - unique motors

## resumen ejecutivo

**total archivos jsx analizados**: 73  
**requieren refactor**: 47 archivos (64%) - *BiddingInterface completado*  
**arquitectura completa**: 26 archivos (36%)  

### problemas principales identificados
- 📝 **hardcoding masivo**: 95% archivos tienen textos hardcodeados
- 🎨 **estilos inline**: 60% archivos con css inline
- 🏗️ **arquitectura incompleta**: 64% sin json/hook completo
- 🔄 **duplicacion**: wrappers profile, herosection repetido

### ✅ completado en sesion actual
- **BiddingInterface**: sistema ofertas funcional implementado
- **Badge styles**: mejoras ui globales aplicadas

---

## 🔴 commit 1: fix hardcoding critico - biddingbuttons

**archivo**: `src/components/auction/BiddingButtons.jsx`

**❌ problemas**:
- linea 18: `mayorPuja + 1000` → debe ir a json `increments.small`
- linea 19: `mayorPuja + 5000` → debe ir a json `increments.medium` 
- linea 20: `mayorPuja + 10000` → debe ir a json `increments.large`
- linea 35: `"+$1,000"` → debe ir a json `labels.increment1000`
- linea 43: `"+$5,000"` → debe ir a json `labels.increment5000`
- linea 51: `"+$10,000"` → debe ir a json `labels.increment10000`

**🔄 acciones**:
- crear `biddingButtonsData.json`
- extraer valores numericos y labels
- crear `useBiddingButtons.js` hook

**✅ objetivo**: valores de incremento configurables desde json

---

## 🔴 commit 2: fix hardcoding critico - profilesettings

**archivo**: `src/views/profile/ProfileSettings/ProfileSettings.jsx`

**❌ problemas**:
- linea 50: `"Last Name"` → `{labels.lastName}`
- linea 57: `placeholder="Last Name"` → `{placeholders.lastName}`
- linea 67: `"Email"` → `{labels.email}`
- linea 74: `placeholder="Email"` → `{placeholders.email}`
- linea 84: `"Phone"` → `{labels.phone}`
- linea 91: `placeholder="Phone"` → `{placeholders.phone}`
- linea 98: `"Address"` → `{labels.address}`
- linea 105: `placeholder="Address"` → `{placeholders.address}`
- linea 151: `"New Password"` → `{labels.newPassword}`
- linea 158: `placeholder="New Password"` → `{placeholders.newPassword}`
- linea 166: `"Re-Type Password"` → `{labels.reTypePassword}`
- linea 173: `placeholder="Re-Type Password"` → `{placeholders.reTypePassword}`

**🔄 acciones**:
- usar labels/placeholders existentes en json
- 12 lineas especificas a cambiar

**✅ objetivo**: ✅ json ya existe, solo aplicar usage correcto

---

## 🔴 commit 3: fix hardcoding critico - depositguarantee

**archivo**: `src/components/payment/DepositGuarantee.jsx`

**❌ problemas**:
- linea 26: `"Primero haz tu depósito en garantía para acceder a la subasta"`
- linea 38: `"Depósito de Garantía: $10,000 MXN"`
- lineas 39-42: parrafo completo explicacion deposito
- linea 45: `amount={10000}` → `config.depositAmount`
- linea 46: `currency="MXN"` → `config.currency`
- linea 55: `"Pago Seguro"`
- lineas 56-58: texto estandares seguridad
- linea 62: `"Métodos de pago aceptados"`
- linea 77: `"Transacción segura"`
- linea 81: `"Procesamiento instantáneo"`
- linea 85: `"Soporte 24/7"`
- linea 93: `"¿Tienes alguna duda? Contáctanos"`

**🔄 acciones**:
- crear `depositGuaranteeData.json`
- extraer todos los textos y valores numericos
- crear `useDepositGuarantee.js` hook

**✅ objetivo**: componente completamente configurable desde json

---

## 🟡 commit 4: fix hardcoding alto impacto - searchbar

**archivo**: `src/components/search/SearchBar.jsx`

**❌ problemas**:
- linea 45: `placeholder="Buscar vehículos..."`
- linea 78: `"Buscando sugerencias..."`
- linea 92: `"No se encontraron sugerencias"`
- linea 105: `"Ver todos los resultados"`
- linea 127: `"Búsqueda avanzada"`

**🔄 acciones**:
- crear `searchBarData.json`
- extraer placeholders y mensajes
- crear `useSearchBar.js` hook

**✅ objetivo**: textos de busqueda configurables

---

## 🟡 commit 5: refactor arquitectura - profile pages

**archivos**: 
- `src/views/profile/BillingInfoPage.jsx`
- `src/views/profile/FavoritesPage.jsx`
- `src/views/profile/MyListingsPage.jsx`
- `src/views/profile/ProfileSettingsPage.jsx`
- `src/views/profile/TransactionsPage.jsx`

**❌ problemas**:
- 5 wrappers identicos innecesarios
- no aportan valor, solo redirigen
- complican routing

**🔄 acciones**:
- eliminar wrappers page
- actualizar router directo a componentes
- simplificar arquitectura profile

**✅ objetivo**: routing directo sin wrappers intermedios

---

## 🟡 commit 6: fix estilos inline criticos - themetoggle

**archivo**: `src/components/ui/ThemeToggle.jsx`

**❌ problemas**:
- multiples funciones con estilos complejos inline
- colores hardcodeados en js
- logica de estilos mezclada con componente

**🔄 acciones**:
- mover estilos a css classes
- extraer colores a variables css
- crear `themeToggleData.json` para textos

**✅ objetivo**: separacion limpia estilos vs logica

---

## 🟡 commit 7: fix hardcoding alto impacto - imageuploader

**archivo**: `src/components/upload/ImageUploader.jsx`

**❌ problemas**:
- linea 150: `"Subir Imágenes"`
- linea 165: `"Arrastra las imágenes aquí"`
- linea 180: `"o haz clic para seleccionar"`
- linea 195: `"Formatos soportados: JPG, PNG"`
- linea 210: `"Tamaño máximo: 10MB por imagen"`
- valores tecnicos: `maxFiles = 10`, `maxSizeMB = 10`

**🔄 acciones**:
- crear `imageUploaderData.json`
- extraer textos ui y configuraciones
- crear `useImageUploader.js` hook

**✅ objetivo**: uploader completamente configurable

---

## 🟡 commit 8: fix hardcoding alto impacto - auctionstatus

**archivo**: `src/components/ui/AuctionStatus.jsx`

**❌ problemas**:
- textos de estado hardcodeados
- estilos inline para posicionamiento
- colores de estado en js

**🔄 acciones**:
- crear `auctionStatusData.json`
- mover estilos a css
- extraer textos de estado

**✅ objetivo**: estados configurables desde json

---

## 🟡 commit 9: fix hardcoding alto impacto - auctiontimer

**archivo**: `src/components/ui/AuctionTimer.jsx`

**❌ problemas**:
- textos de tiempo hardcodeados
- formatos de fecha en componente
- mensajes de estado inline

**🔄 acciones**:
- crear `auctionTimerData.json`
- extraer textos y formatos
- crear `useAuctionTimer.js` hook

**✅ objetivo**: timer completamente configurable

---

## 🟠 commit 10: completar arquitectura - carcomments

**archivo**: `src/views/detail/CarComments/CarComments.jsx`

**❌ problemas**:
- linea 60: `"Inicia sesión para poder comentar y calificar este vehículo"`
- linea 77: `rows="5"` → config value
- hook tiene extension `.jsx` incorrecta

**🔄 acciones**:
- extraer texto hardcodeado a json existente
- mover `rows` a configuracion
- renombrar hook `.jsx` → `.js`

**✅ objetivo**: ✅ arquitectura ya esta, solo fix detalles

---

## 🟠 commit 11: completar arquitectura - depositsection

**archivo**: `src/views/detail/DepositSection/DepositSection.jsx`

**❌ problemas**:
- linea 10: `style={{ backgroundColor: '#f8f9fa' }}`
- falta json y hook
- estructura incompleta

**🔄 acciones**:
- crear `depositSectionData.json`
- mover background color a css
- crear `useDepositSection.js` hook

**✅ objetivo**: estructura completa como otros sections

---

## 🟠 commit 12: fix hardcoding medio impacto - breadcrumb

**archivo**: `src/components/ui/Breadcrumb.jsx`

**❌ problemas**:
- background images inline
- textos de navegacion hardcodeados
- separadores hardcodeados

**🔄 acciones**:
- crear `breadcrumbData.json`
- mover estilos a css
- configurar textos desde json

**✅ objetivo**: breadcrumb configurable

---

## 🟠 commit 13: fix hardcoding medio impacto - scrolltop

**archivo**: `src/components/ui/ScrollTop.jsx`

**❌ problemas**:
- tooltip text hardcodeado
- threshold values hardcodeados
- estilos de posicion inline

**🔄 acciones**:
- crear `scrollTopData.json`
- extraer configuraciones
- crear `useScrollTop.js` hook

**✅ objetivo**: scroll behavior configurable

---

## 🟠 commit 14: fix hardcoding medio impacto - sessionmessage

**archivo**: `src/components/feedback/SessionMessage.jsx`

**❌ problemas**:
- tipos de mensaje hardcodeados
- duraciones hardcodeadas
- estilos de estado inline

**🔄 acciones**:
- crear `sessionMessageData.json`
- extraer configuraciones tiempo
- configurar tipos mensaje

**✅ objetivo**: sistema mensajes configurable

---

## 🟠 commit 15: fix hardcoding medio impacto - loading

**archivo**: `src/components/feedback/Loading.jsx`

**❌ problemas**:
- mensajes de carga hardcodeados
- animaciones hardcodeadas
- timeouts en componente

**🔄 acciones**:
- crear `loadingData.json`
- extraer mensajes y tiempos
- crear `useLoading.js` hook

**✅ objetivo**: loading states configurables

---

## 🔵 commit 16: fix hardcoding bajo impacto - documentmanager

**archivo**: `src/components/documents/DocumentManager.jsx`

**❌ problemas**:
- textos de acciones hardcodeados
- tipos documento hardcodeados
- mensajes validacion inline

**🔄 acciones**:
- crear `documentManagerData.json`
- extraer textos y validaciones
- crear `useDocumentManager.js` hook

**✅ objetivo**: gestor documentos configurable

---

## 🔵 commit 17: fix hardcoding bajo impacto - paymentform

**archivo**: `src/components/payment/PaymentForm.jsx`

**❌ problemas**:
- placeholders tarjeta hardcodeados
- mensajes validacion inline
- formatos hardcodeados

**🔄 acciones**:
- crear `paymentFormData.json`
- extraer placeholders y validaciones
- crear `usePaymentForm.js` hook

**✅ objetivo**: formulario pago configurable

---

## 🔵 commit 18: fix hardcoding bajo impacto - searchfilters

**archivo**: `src/components/search/SearchFilters.jsx`

**❌ problemas**:
- labels filtros hardcodeados
- rangos valores hardcodeados
- opciones select hardcodeadas

**🔄 acciones**:
- crear `searchFiltersData.json`
- extraer opciones y rangos
- crear `useSearchFilters.js` hook

**✅ objetivo**: filtros completamente configurables

---

## 🔵 commit 19: fix hardcoding bajo impacto - searchresults

**archivo**: `src/components/search/SearchResults.jsx`

**❌ problemas**:
- textos paginacion hardcodeados
- mensajes sin resultados hardcodeados
- labels ordenamiento hardcodeados

**🔄 acciones**:
- crear `searchResultsData.json`
- extraer textos ui
- crear `useSearchResults.js` hook

**✅ objetivo**: resultados busqueda configurables

---

## 🔵 commit 20: limpieza final y validacion

**objetivo**: revision completa y limpieza

**🔄 acciones**:
- validar todos los json creados
- verificar no hay hardcoding restante
- probar todas las funcionalidades
- documentar patrones establecidos

**✅ objetivo**: proyecto 100% feature-based sin hardcoding

---

## resumen por prioridades

### 🔴 criticos (commits 1-3)
- biddingbuttons: valores negocio
- profilesettings: formularios usuario
- depositguarantee: pagos criticos

### 🟡 alto impacto (commits 4-9)
- searchbar: funcionalidad principal
- profile pages: arquitectura
- themetoggle: ui critica
- imageuploader: funcionalidad core
- auctionstatus: estados importantes
- auctiontimer: tiempo critico

### 🟠 medio impacto (commits 10-15)
- carcomments: interaccion usuario
- depositsection: completar arquitectura
- breadcrumb: navegacion
- scrolltop: ux
- sessionmessage: feedback
- loading: estados

### 🔵 bajo impacto (commits 16-20)
- documentmanager: funcionalidad especifica
- paymentform: formulario secundario
- searchfilters: filtros avanzados
- searchresults: presentacion
- limpieza final: validacion

---

## metricas objetivos

**antes del refactor**:
- hardcoding: ~300 lineas
- estilos inline: ~150 componentes
- arquitectura incompleta: 48 archivos

**despues del refactor**:
- hardcoding: 0 lineas ✅
- estilos inline: solo tecnicos ✅
- arquitectura completa: 73 archivos ✅
- mantenibilidad: 300% mejora ✅
- escalabilidad: full i18n ready ✅