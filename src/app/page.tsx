import FormularioTarea from '@/components/FormularioTarea'
import { FiltroTareas } from '@/components/FiltroTareas'
import ListaTareas from '@/components/ListaTareas'

export default function Page() {
  return (
    <main className="p-4 max-w-xl mx-auto space-y-8">
      <FormularioTarea />
      <FiltroTareas />
      <ListaTareas />
    </main>
  )
}

// import FormularioTarea from '@/components/FormularioTarea'
// import { obtenerTareas } from './api/tareas/action'
// import { EliminarBoton } from '@/components/EliminarBoton'
// import { EditarTareaForm } from '@/components/EditarTareaForm'
// import { FiltroTareas } from '@/components/FiltroTareas'

// export default async function Page({
//   searchParams,
// }: {
//   searchParams?: Record<string, string | string[] | undefined>
// }) {
//   const estado = searchParams?.estado as string | undefined
//   const asignado = searchParams?.asignado as string | undefined

//   let tareas = await obtenerTareas()

//   if (estado) {
//     tareas = tareas.filter((t) => t.estado === estado)
//   }

//   if (asignado) {
//     tareas = tareas.filter((t) =>
//       t.asignadoA?.toLowerCase().includes(asignado.toLowerCase())
//     )
//   }

//   return (
//     <main className="p-4 max-w-xl mx-auto space-y-8">
//       <FormularioTarea />
//       <FiltroTareas />
//       <section>
//         <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
//         <ul className="space-y-2">
//           {tareas.length === 0 ? (
//             <li className="text-gray-500">No hay tareas con ese filtro.</li>
//           ) : (
//             tareas.map((t) => (
//               <li key={t.id} className="p-3 border rounded shadow-sm bg-white">
//                 <div className="flex justify-between items-center">
//                   <div className="font-semibold">{t.titulo}</div>
//                   <div className="flex gap-2">
//                     <EditarTareaForm tarea={t} />
//                     <EliminarBoton id={t.id} />
//                   </div>
//                 </div>
//                 <div className="text-sm text-black">Estado: {t.estado}</div>
//                 <div className="text-sm text-black">Asignado a: {t.asignadoA}</div>
//               </li>
//             ))
//           )}
//         </ul>
//       </section>
//     </main>
//   )
// }
