//src/components/FormularioTarea.tsx
'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { crearTarea } from '@/app/api/tareas/action'

export default function FormularioTarea() {
  const [titulo, setTitulo] = useState('')
  const [asignadoA, setAsignadoA] = useState('')
  const [estado, setEstado] = useState<'pendiente' | 'en progreso' | 'completada'>('pendiente')
  const [mensaje, setMensaje] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await crearTarea({ titulo, descripcion: '', asignadoA, estado })

      setTitulo('')
      setAsignadoA('')
      setEstado('pendiente')
      setMensaje('✅ Tarea creada con éxito')

      // Refrescar página 
      startTransition(() => {
        router.refresh()
        window.location.reload()
      })
    } catch {
      setMensaje('❌ Error al crear la tarea')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">Nueva Tarea</h2>

      <input
        type="text"
        placeholder="Nombre Tarea"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="text"
        placeholder="Estudiante asignado"
        value={asignadoA}
        onChange={e => setAsignadoA(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <select
        value={estado}
        onChange={e => setEstado(e.target.value as 'pendiente' | 'en progreso' | 'completada')}
        className="w-full border p-2 rounded"
      >
        <option value="pendiente">Pendiente</option>
        <option value="en progreso">En progreso</option>
        <option value="completada">Completada</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={isPending}
      >
        {isPending ? 'Creando...' : 'Crear Tarea'}
      </button>

      {mensaje && <p className="text-sm text-green-600">{mensaje}</p>}
    </form>
  )
}
