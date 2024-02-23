import LinkProps from '@/types/links'
import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(`${process.env.API_BASE_URL}/content`, {
    next: {
      tags: ['links-content'],
    },
    headers: {
      token: process.env.API_CONTENT_KEY,
    },
  })

  const data: LinkProps[] = await res.json()

  revalidateTag('links-content')

  return NextResponse.json({
    data,
  })
}
