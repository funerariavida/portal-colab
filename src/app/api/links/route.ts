import LinkProps from '@/types/links'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const res = await fetch(`${process.env.API_BASE_URL}/content`, {
    headers: {
      token: process.env.API_CONTENT_KEY,
    },
  })

  const data: LinkProps[] = await res.json()

  return NextResponse.json({
    data,
  })
}
