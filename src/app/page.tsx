// import FormularioTarea from '@/components/FormularioTarea'
// import {FiltroTareas} from '@/components/FiltroTareas'
// import ListaTareas from '@/components/ListaTareas'

// export const dynamic = 'force-dynamic'

// export default async function Page({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] }
// }) {
//   const estado = searchParams?.estado as string | undefined
//   const asignado = searchParams?.asignado as string | undefined

//   return (
//     <main className="p-4 max-w-xl mx-auto space-y-8">
//       <FormularioTarea />
//       <FiltroTareas />
//       <ListaTareas estado={estado} asignado={asignado} />
//     </main>
//   )
// }

export const dynamic = 'force-dynamic'

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
