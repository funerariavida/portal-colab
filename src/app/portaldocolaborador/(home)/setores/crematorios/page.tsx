import HomePageLoader from "@/components/home-page-loader"
import LinkCard from "@/components/link-card"
import LinkProps from "@/types/links"

import axios from "axios"

import { Suspense } from "react"

export default async function CrematorioPage() {
  const data: LinkProps[] = await axios({
    url: 'http://localhost:3000/api/links',
    method: 'get',
  })
  .then((res) => res.data.data.filter((element: LinkProps) => element.page === 'crematórios'))

  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <div className='flex flex-wrap items-center justify-center h-full w-full'>
        <Suspense fallback={<HomePageLoader/>}>
          {data[0].infos.map((info) => {
            return (
              <LinkCard
                title={info.title}
                variant="primary"
                description={info.description}
                linkPath={info.linkPath}
                icon={info.icon}
              />
            )
          })}
        </Suspense>        
      </div>
    </div>
  ) 
}