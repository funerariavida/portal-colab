
import { NextResponse } from "next/server";

type ReqProps = {
  cpf: string
}

export async function POST(request: Request) {
  const { cpf }: ReqProps = await request.json()

  const res = await fetch(`${process.env.API_BASE_URL}/auth`, {
    method: 'POST',
    headers: {
      'token': process.env.API_LOGIN_KEY
    },
    body: cpf
  })

  console.log(res)

  return NextResponse.json({
    res
  })
}