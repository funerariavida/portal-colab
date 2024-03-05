import getCompTime from '@/actions/get-comp-time'


import { Suspense } from 'react'

export default async function BancoPage() {
  const data = await getCompTime('VICTOR JERRYSSON GAMA BASTOS')
  return (
    <div>
      <h1>Banco de horas</h1>
      <Suspense fallback={<p>Carregando registros...</p>}>
        <pre>{JSON.stringify(data.registros, null, 2)}</pre>
      </Suspense>
    </div>
  )
}
