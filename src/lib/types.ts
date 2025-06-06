export type Estado = 'pendiente' | 'en progreso' | 'completada'

export interface Tarea {
  id: string
  titulo: string
  descripcion?: string
  estado: Estado
  asignadoA: string
}
