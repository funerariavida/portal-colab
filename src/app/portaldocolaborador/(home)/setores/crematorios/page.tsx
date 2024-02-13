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
    <div className='h-full w-full flex flex-col items-center justify-center'>
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