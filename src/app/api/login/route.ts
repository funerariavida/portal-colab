import { NextResponse } from 'next/server'

import { geolocation } from '@vercel/edge'

export async function POST(request: Request) {
  const { city, country, region, latitude, longitude } = geolocation(request)
  const { cpf } = await request.json()

  const ip = request.headers.get('X-Forwarded-For')

  const requestJSON = {
    cpf,
    ip,
    city,
    country,
    region,
    latitude,
    longitude,
  }

  const response = await fetch(
    'https://n8n.empresavida.com.br/webhook/api/hub/auth',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: process.env.API_LOGIN_KEY,
      },
      body: JSON.stringify(requestJSON),
    },
  )

  const data = await response.json()

  return NextResponse.json(data)
}
