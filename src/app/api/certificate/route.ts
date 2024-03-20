import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name')

  const params =
    name &&
    new URLSearchParams({
      name,
    })

  const response = await fetch(
    `${process.env.API_BASE_URL}/atestados_declaracoes?` + params,
    {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        token: process.env.CERTIFICATE_ENDPOINT_KEY,
      },
    },
  )

  const data = await response.json()

  return NextResponse.json({
    data,
  })
}
