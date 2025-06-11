# Task List WPA

Una aplicación web progresiva (PWA) desarrollada en Next.js 15 con TypeScript, que permite la gestión de tareas en tiempo real con filtros por estado y persona asignada. La app puede instalarse, funciona offline y se refresca automáticamente al crear, editar o eliminar tareas.

**Deploy en Vercel:**  
https://task-list-wpa-aaeu.vercel.app/

---

## Tecnologías usadas

- **Next.js 15** (App Router, Server Actions)
- **React 19** (con `useTransition`, `useSearchParams`, `useState`)
- **TypeScript** (tipado estricto)
- **Tailwind CSS** (estilizado rápido y responsive)
- **Zod** (validación de datos)
- **Service Worker** + `manifest.json` (modo PWA con instalación y caché offline)

---

##  Estructura del proyecto

```
src/
├── app/
│   ├── api/tareas/             ← Server Actions y API route
│   │   ├── action.ts           ← CRUD de tareas con validación
│   │   └── route.ts            ← API para uso en componentes cliente
│   ├── layout.tsx              ← Layout general y PWA config
│   └── page.tsx                ← Página principal (con Server + Client components)
├── components/
│   ├── FormularioTarea.tsx     ← Crear nueva tarea
│   ├── EditarTareaForm.tsx     ← Editar tarea
│   ├── EliminarBoton.tsx       ← Eliminar tarea
│   ├── FiltroTareas.tsx        ← Filtros dinámicos
│   ├── ListaTareas.tsx         ← Lista de tareas dinámica
│   └── RegistrarSW.tsx         ← Registro del Service Worker
├── lib/
│   └── types.ts                ← Tipos de datos globales
public/
├── icons/                      ← Íconos PWA
├── manifest.json              ← Metadatos PWA
└── sw.js                       ← Service Worker offline
```

---

##  Cómo probarlo localmente

```bash
npm install
npm run dev
```

Y abrí: [http://localhost:3000](http://localhost:3000)

Para compilar la versión de producción:

```bash
npm run build
npm run start
```

---

##  Extras

- `src/app/api/tareas/action.ts`: maneja la lógica y validación con Server Actions (`'use server'`).
- `src/app/api/tareas/route.ts`: hace posible obtener tareas con `fetch` desde componentes cliente.
- `ListaTareas` escucha eventos globales (`tarea-creada`, `tarea-actualizada`) para refrescar automáticamente.

---

##  Preguntas del grupo

### 1. **Integrantes del grupo**

- Katherine Guatemala  
- Isaac Artavia Salazar  
- Joseph Quirós  
- Kaysha Carrillo

---

### 2.  **¿Qué técnica utilizaste para manejar el estado y por qué?**

Usamos **`useState`** para manejar el estado local de formularios, inputs y la lista de tareas en el cliente. También usamos **`useEffect`** y eventos personalizados con `window.dispatchEvent()` para comunicar entre componentes sin necesidad de una librería externa.

Esto nos permitió mantenerlo simple, reactivo y compatible con Server Actions.

---

### 3.  **¿Cómo evitaste renders y cálculos innecesarios?**

- Aplicamos filtros (`estado`, `asignadoA`) solo cuando cambian los `searchParams`.
- Usamos `useTransition()` en formularios para no bloquear la UI al enviar datos.
- Separación clara entre componentes clientes y server (como `FormularioTarea` vs `ListaTareas`) para aprovechar los beneficios de cada uno.

---

### 4.  **¿Cómo organizaste la lógica de carga y manejo de errores?**

- El manejo de errores en formularios se realiza con `try/catch` y validaciones con **Zod**.
- Para la carga de tareas, usamos una función `fetchTareas()` reutilizable.
- Al editar o eliminar, usamos `startTransition()` para hacer `router.refresh()` y evitar que la UI se congele.

---

### 5.  **¿Qué decisiones tomaste respecto a la estructura y tipado de los datos?**

- Centralizamos los tipos en `lib/types.ts` para mantener consistencia.
- Usamos un tipo `Tarea` con propiedades como `titulo`, `estado`, `asignadoA`, `id`, etc.
- Validamos la estructura de entrada con **Zod** antes de aceptar datos en los Server Actions.

---

### 6.  **¿Cómo garantizamos que la experiencia del usuario fuera fluida?**

- El formulario no recarga la página.
- Las tareas se actualizan automáticamente al crearlas, editarlas o eliminarlas.
- Los filtros responden instantáneamente con `router.push()` y `useSearchParams()`.
- La app es **instalable y funciona offline** gracias al Service Worker.
- El diseño responsivo con Tailwind garantiza usabilidad en desktop y móvil.

---

