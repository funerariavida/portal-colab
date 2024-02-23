import { NextResponse } from 'next/server'

export async function POST(request: Request) {
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
  })
}
