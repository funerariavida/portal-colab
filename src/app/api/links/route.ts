import LinkProps from '@/types/links'
import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(`${process.env.API_BASE_URL}/content`, {
    next: {
      revalidate: 2000,
    },
    headers: {
      token: process.env.API_CONTENT_KEY,
    },
  })

  const data: LinkProps[] = await res.json()

  return NextResponse.json({
    data,
  })
}
