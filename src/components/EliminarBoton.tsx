'use client'

import { eliminarTarea } from '@/app/api/tareas/action'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'

export function EliminarBoton({ id }: { id: string }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleClick = async () => {
    await eliminarTarea(id)
    startTransition(() => {
      router.refresh()
      window.dispatchEvent(new Event('tarea-actualizada'))
      window.location.reload()
    })
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="text-sm text-red-600 hover:underline ml-2"
    >
      {isPending ? 'Eliminando...' : 'Eliminar'}
    </button>
  )
}
