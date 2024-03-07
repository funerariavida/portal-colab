'use server'

import { CompTimeResponse } from '@/types/comp-time'
import { revalidateTag } from 'next/cache'

export default async function getCompTime(
  name: string,
): Promise<CompTimeResponse> {
  const params = new URLSearchParams({
    nome: name,
  })

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/comp-time?` + params,
    {
      next: {
        tags: ['comp-time'],
      },
      method: 'GET',
    },
  )

  revalidateTag('comp-time')

  const data = await response.json()

  return data.data[0]
}
