import axios from 'axios'

import GenericSector from '@/components/sections/generic-sector'

import LinkProps from '@/types/links'

export default async function RecursosHumanosPage() {
  const data: LinkProps[] = await axios({
    url: `${process.env.NEXT_PUBLIC_NODE_API_BASE_URL}/links`,
    method: 'get',
  }).then((res) =>
    res.data.data.filter((element: LinkProps) => element.page === 'rh'),
  )

  return (
    <div className="mx-auto grid w-full h-full max-w-[1440px] grid-rows-[min_content_max-content]">
      <div className="w-full bg-secondary h-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">Recursos Humanos</h1>
      </div>
      {data.map((link, index) => {
        return (
          <GenericSector
            key={index}
            hasHeader
            link={link}
            cardVariant="secondary"
          />
        )
      })}
    </div>
  )
}
