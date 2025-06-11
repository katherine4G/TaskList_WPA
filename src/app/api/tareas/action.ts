//src/app/tareas/actions.ts
'use server'

import { z } from 'zod'
import { Tarea } from '@/lib/types'

// Simulación de base de datos temporal en memoria
const tareas: Tarea[] = []

// Esquema Zod para validar las tareas
const tareaSchema = z.object({
  titulo: z.string().min(1, 'El título es obligatorio'),
  descripcion: z.string().optional(),
  estado: z.enum(['pendiente', 'en progreso', 'completada']),
  asignadoA: z.string().min(1, 'Debe asignarse a alguien')
})

// Crear tarea
export async function crearTarea(data: unknown): Promise<Tarea> {
  const tareaValida = tareaSchema.parse(data)
  const nuevaTarea: Tarea = {
    ...tareaValida,
    id: crypto.randomUUID()
  }
  tareas.push(nuevaTarea)
  return nuevaTarea
}

// Obtener todas las tareas
export async function obtenerTareas(): Promise<Tarea[]> {
  return tareas
}

// Editar tarea por ID
export async function editarTarea(id: string, data: unknown): Promise<Tarea | null> {
  const tareaValida = tareaSchema.partial().parse(data)
  const index = tareas.findIndex(t => t.id === id)
  if (index === -1) return null

  tareas[index] = { ...tareas[index], ...tareaValida }
  return tareas[index]
}

// Eliminar tarea por ID
export async function eliminarTarea(id: string): Promise<boolean> {
  const index = tareas.findIndex(t => t.id === id)
  if (index === -1) return false
  tareas.splice(index, 1)
  return true
}

