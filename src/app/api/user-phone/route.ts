import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(request: NextRequest) {
  const { phone } = await request.json()
  await new Promise((resolve) => setTimeout(resolve, 2000))

  console.log({
    telefone: phone,
  })

  return NextResponse.json({
    message: 'Requisição concluída',
    telefone: phone,
  })
}
