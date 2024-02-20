import LinkProps from '@/types/links'
import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(`${process.env.API_BASE_URL}/content`, {
    // doesn't store data on cache
    // cache: 'no-store',
    next: {
      tags: ['links-content'],
    },
    headers: {
      token: process.env.API_CONTENT_KEY,
    },
  })

  const data: LinkProps[] = await res.json()

  revalidateTag('links-content')

  console.log(data[0])

  return NextResponse.json({
    data,
  })
}
