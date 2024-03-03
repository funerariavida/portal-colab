export default async function getLinks() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/links`,
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((data) => data.data)

  return data
}
