import getCompTime from '@/functions/get-comp-time'

export default async function BancoPage() {
  const data = await getCompTime('VICTOR JERRYSSON GAMA BASTOS')

  console.log(data)

  return <div>BancoPage</div>
}
