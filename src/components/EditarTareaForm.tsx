'use client'

import { useState, useTransition } from 'react'
import { editarTarea } from '@/app/api/tareas/action'
import { useRouter } from 'next/navigation'
import { Tarea } from '@/lib/types'

export function EditarTareaForm({ tarea }: { tarea: Tarea }) {
  const router = useRouter()
  const [titulo, setTitulo] = useState(tarea.titulo)
  const [estado, setEstado] = useState(tarea.estado)
  const [asignadoA, setAsignadoA] = useState(tarea.asignadoA)
  const [editando, setEditando] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    await editarTarea(tarea.id, { titulo, estado, asignadoA })

    startTransition(() => {
      router.refresh()
    })
    setEditando(false)
  }

  if (!editando) {
    return (
      <button onClick={() => setEditando(true)} className="text-sm text-blue-600 hover:underline">
        Editar
      </button>
    )
  }

  return (
    <form onSubmit={handleEdit} className="space-y-2 text-sm mt-2">
      <input value={titulo} onChange={e => setTitulo(e.target.value)} className="border p-1 w-full" />
      <input value={asignadoA} onChange={e => setAsignadoA(e.target.value)} className="border p-1 w-full" />
      <select value={estado} onChange={e => setEstado(e.target.value as any)} className="border p-1 w-full">
        <option value="pendiente">Pendiente</option>
        <option value="en progreso">En progreso</option>
        <option value="completada">Completada</option>
      </select>
      <div className="flex gap-2">
        <button type="submit" className="bg-green-600 text-white px-2 py-1 rounded" disabled={isPending}>
          Guardar
        </button>
        <button type="button" className="bg-gray-400 text-white px-2 py-1 rounded" onClick={() => setEditando(false)}>
          Cancelar
        </button>
      </div>
    </form>
  )
}
