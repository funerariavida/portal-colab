import getCompTime from '@/actions/get-comp-time'
import { LinkCard } from '@/components/link-card'

import LinkCardContent from '@/components/link-card/LinkCardContent'
import LinkCardIcons from '@/components/link-card/LinkCardIcons'

import { Suspense } from 'react'

export default async function BancoPage() {
  const data = await getCompTime('VICTOR JERRYSSON GAMA BASTOS')
  return (
    <div>
      <h1>Banco de horas</h1>
      <Suspense fallback={<p>Carregando registros...</p>}>
        <pre>{JSON.stringify(data.registros, null, 2)}</pre>
      </Suspense>

      <LinkCard.Root linkPath="/" variant="primary">
        <LinkCardContent
          variant="primary"
          title="title"
          description="Descrição"
          icon="a-arrow-down"
        />
        <LinkCardIcons iconAlign="center" variant="primary" />
      </LinkCard.Root>
    </div>
  )
}
