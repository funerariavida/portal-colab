'use server'

export default async function UpdateUserPhone(phone: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/user-phone`,
    {
      method: 'POST',
      cache: 'no-store',
      headers: {
        // token: '',
        body: JSON.stringify({ phone }),
      },
    },
  )

  const data = await response.json()

  return data
}
