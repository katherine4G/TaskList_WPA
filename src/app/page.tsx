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
