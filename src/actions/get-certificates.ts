'use server'

import CertificateProps from '@/types/certificate'
import { revalidateTag } from 'next/cache'

export default async function getCertificates(
  name: string,
): Promise<CertificateProps> {
  const params = new URLSearchParams({
    name,
  })

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/certificate?` + params,
    {
      method: 'GET',
      next: {
        tags: ['get-certificates'],
      },
    },
  )

  revalidateTag('get-certificates')

  const data = await response.json()

  return data
}
