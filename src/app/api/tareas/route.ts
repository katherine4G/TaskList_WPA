import { NextResponse } from 'next/server'
import { obtenerTareas } from './action'

export async function GET() {
  const tareas = await obtenerTareas()
  return NextResponse.json(tareas)
}
