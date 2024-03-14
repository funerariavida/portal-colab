import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(request: NextRequest) {
  const { telefone } = await request.json()
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return NextResponse.json({
    message: 'Requisição concluída',
    telefone,
  })
}
