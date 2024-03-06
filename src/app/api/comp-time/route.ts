import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const req = await request.json()

  const response = await fetch(`${process.env.API_BASE_URL}/bancohoras`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      token: process.env.API_COMP_TIME_KEY,
    },
    body: JSON.stringify(req),
  })

  const data = await response.json()

  return NextResponse.json({
    data,
  })
}
