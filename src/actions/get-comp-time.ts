'use server'

import { CompTimeResponse } from '@/types/comp-time'

export default async function getCompTime(
  name: string,
): Promise<CompTimeResponse> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/comp-time`,
    {
      method: 'POST',
      body: JSON.stringify({ name }),
    },
  )
    .then((res) => res.json())
    .then((data) => data.data)

  return data
}
