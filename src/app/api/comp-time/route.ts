import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const req = await request.json()
  const nome = request.nextUrl.searchParams.get('nome')

  const params =
    nome &&
    new URLSearchParams({
      nome,
    })

  console.log('parâmetros:', nome)

  const response = await fetch(
    `${process.env.API_BASE_URL}/bancohoras?` + params,
    {
      method: 'post',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        token: process.env.API_COMP_TIME_KEY,
      },
      body: JSON.stringify({ nome }),
    },
  )

  const data = await response.json()

  return NextResponse.json({
    data,
  })
}
