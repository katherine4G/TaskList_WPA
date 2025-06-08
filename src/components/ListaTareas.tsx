'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { obtenerTareas } from '@/app/api/tareas/action'
import { EditarTareaForm } from './EditarTareaForm'
import { EliminarBoton } from './EliminarBoton'
import { Tarea } from '@/lib/types'

export default function ListaTareas() {
  const searchParams = useSearchParams()
  const estado = searchParams.get('estado') || ''
  const asignado = searchParams.get('asignado') || ''

  const [tareas, setTareas] = useState<Tarea[]>([])

  useEffect(() => {
    const fetchTareas = async () => {
      let todas = await obtenerTareas()

      if (estado) {
        todas = todas.filter(t => t.estado === estado)
      }

      if (asignado) {
        todas = todas.filter(t =>
          t.asignadoA.toLowerCase().includes(asignado.toLowerCase())
        )
      }

      setTareas(todas)
    }

    fetchTareas()
  }, [estado, asignado])

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4 text-white">Lista de Tareas</h1>
      <ul className="space-y-2">
        {tareas.length === 0 ? (
          <li className="text-gray-400">No hay tareas con ese filtro.</li>
        ) : (
          tareas.map(t => (
            <li key={t.id} className="p-3 border rounded shadow-sm bg-white text-black">
              <div className="flex justify-between items-center">
                <div className="font-semibold">{t.titulo}</div>
                <div className="flex gap-2">
                  <EditarTareaForm tarea={t} />
                  <EliminarBoton id={t.id} />
                </div>
              </div>
              <div className="text-sm">Estado: {t.estado}</div>
              <div className="text-sm">Asignado a: {t.asignadoA}</div>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

// import { obtenerTareas } from '@/app/api/tareas/action'
// import { EditarTareaForm } from './EditarTareaForm'
// import { EliminarBoton } from './EliminarBoton'

// export default async function ListaTareas({
//   estado,
//   asignado,
// }: {
//   estado?: string
//   asignado?: string
// }) {
//   let tareas = await obtenerTareas()

//   if (estado) {
//     tareas = tareas.filter(t => t.estado === estado)
//   }

//   if (asignado) {
//     tareas = tareas.filter(t =>
//       t.asignadoA.toLowerCase().includes(asignado.toLowerCase())
//     )
//   }

//   return (
//     <section>
//       <h1 className="text-2xl font-bold mb-4 text-white">Lista de Tareas</h1>
//       <ul className="space-y-2">
//         {tareas.length === 0 ? (
//           <li className="text-gray-500">No hay tareas con ese filtro.</li>
//         ) : (
//           tareas.map(t => (
//             <li key={t.id} className="p-3 border rounded shadow-sm bg-white">
//               <div className="flex justify-between items-center">
//                 <div className="font-semibold">{t.titulo}</div>
//                 <div className="flex gap-2">
//                   <EditarTareaForm tarea={t} />
//                   <EliminarBoton id={t.id} />
//                 </div>
//               </div>
//               <div className="text-sm text-black">Estado: {t.estado}</div>
//               <div className="text-sm text-black">Asignado a: {t.asignadoA}</div>
//             </li>
//           ))
//         )}
//       </ul>
//     </section>
//   )
// }