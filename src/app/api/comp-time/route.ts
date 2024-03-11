import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const nome = request.nextUrl.searchParams.get('nome')

  const params =
    nome &&
    new URLSearchParams({
      nome,
    })

  const response = await fetch(
    `${process.env.API_BASE_URL}/bancohoras?` + params,
    {
      method: 'get',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        token: process.env.API_COMP_TIME_KEY,
      },
    },
  )

  const data = await response.json()

  return NextResponse.json({
    data,
  })
}
