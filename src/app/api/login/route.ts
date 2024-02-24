import { NextResponse } from 'next/server'

import { geolocation } from '@vercel/edge'

export async function POST(request: Request) {
  const { city, country } = geolocation(request)
  const req = await request.json()

  const ip = request.headers.get('X-Forwarded-For')

  const data = await fetch(`${process.env.API_BASE_URL}/auth`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      token: process.env.API_LOGIN_KEY,
    },
    body: JSON.stringify(req),
  }).then((res) => res.json())

  return NextResponse.json({
    data,
    city,
    country,
  })
}
