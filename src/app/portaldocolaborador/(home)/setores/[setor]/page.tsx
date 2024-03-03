'use client'

type routeParams = {
  params: {
    setor: string
  }
}

export default function AtendimentoPage({ params }: routeParams) {
  // const { getLinkByPage } = useLinkContext()

  // const data = getLinkByPage('atendimento')

  // if (!data) return <CardGroupSkeleton />

  console.log(params)

  return (
    <div className="mx-auto grid w-full h-full max-w-[1440px] grid-rows-[min_content_max-content]">
      <div className="w-full bg-secondary h-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Setor</h1>
      </div>
      {/* {data.map((link, index) => {
        return (
          <GenericSector
            hasHeader
            key={index}
            link={link}
            cardVariant="secondary"
          />
        )
      })} */}
    </div>
  )
}
