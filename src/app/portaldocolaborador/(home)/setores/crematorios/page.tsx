import GenericSector from "@/components/sections/generic-sector"
import LinkProps from "@/types/links"

import axios from "axios"


export default async function CrematorioPage() {
  const data: LinkProps[] = await axios({
    url: 'http://localhost:3000/api/links',
    method: 'get',
  })
  .then((res) => res.data.data.filter((element: LinkProps) => element.page === 'crematórios'))

  return (
    <div className='mx-auto grid w-full h-full max-w-[1440px] grid-rows-[min_content_max-content]'>
      <div className="w-full bg-secondary h-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">
          Crematórios
        </h1>
      </div>
      {
        data.map((link, index) => {
          return(
            <GenericSector
              key={index}
              hasHeader
              link={link}
              cardVariant="secondary"
            />
          )
        })
      }
    </div>
  ) 
}