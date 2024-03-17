import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(request: NextRequest) {
  const userInfo = await request.json()

  const response = await fetch(`${process.env.API_BASE_URL}/update/telefone`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      token: process.env.PHONE_ENDPOINT_KEY,
    },
    body: JSON.stringify(userInfo),
  })

  const data = await response.json()

  return NextResponse.json({
    data,
  })
}
