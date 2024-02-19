import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const req = await request.json()

  const data = await fetch(
    `https://n8n.empresavida.com.br/webhook/api/portal/auth`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        token: 'd770180fa872617edf0833fbd1a51455',
      },
      body: JSON.stringify(req),
    },
  ).then((res) => res.json())

  return NextResponse.json({
    data,
  })
}
