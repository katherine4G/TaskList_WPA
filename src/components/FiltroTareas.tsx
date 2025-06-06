'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

export function FiltroTareas() {
  const router = useRouter()
  const [estado, setEstado] = useState('')
  const [asignado, setAsignado] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleFiltrar = () => {
    const params = new URLSearchParams()
    if (estado) params.set('estado', estado)
    if (asignado) params.set('asignado', asignado)

    startTransition(() => {
      router.push(`/?${params.toString()}`)
    })
  }

  return (
    <div className="mb-4 flex flex-col gap-2">
      <select
        value={estado}
        onChange={e => setEstado(e.target.value)}
        className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
      >
        <option value="">Todos los estados</option>
        <option value="pendiente">Pendiente</option>
        <option value="en progreso">En progreso</option>
        <option value="completada">Completada</option>
      </select>

      <input
        type="text"
        placeholder="Filtrar por Nombre Estudiante"
        value={asignado}
        onChange={e => setAsignado(e.target.value)}
        className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={handleFiltrar}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
        disabled={isPending}
      >
        {isPending ? 'Filtrando...' : 'Filtrar'}
      </button>
    </div>
  )
}