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

  const data = await fetch(`${process.env.API_BASE_URL}/auth`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      token: process.env.API_LOGIN_KEY,
    },
    body: JSON.stringify(requestJSON),
  }).then((res) => res.json())

  return NextResponse.json({
    data,
  })
}
