'use server'

import { CompTimeResponse } from '@/types/comp-time'
import { revalidateTag } from 'next/cache'

export default async function getCompTime(
  name: string,
): Promise<CompTimeResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/comp-time`,
    {
      next: {
        tags: ['comp-time'],
      },
      method: 'POST',
      body: JSON.stringify({ nome: name }),
    },
  )

  revalidateTag('comp-time')

  const data = await response.json()

  return data.data[0].registros
}
