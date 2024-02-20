import LinkProps from '@/types/links'
import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(`${process.env.API_BASE_URL}/content`, {
    cache: 'no-store', // doesn't store data on cache
    headers: {
      token: process.env.API_CONTENT_KEY,
    },
  })

  const data: LinkProps[] = await res.json()

  console.clear()
  console.log(data[0])

  return NextResponse.json({
    data,
  })
}
