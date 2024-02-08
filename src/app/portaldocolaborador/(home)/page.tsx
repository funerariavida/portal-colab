'use client'

import useLinks from '@/hooks/use-links'

import LinkCard from '../../../components/link-card/index'

import HomePageLoader from '@/components/home-page-loader'
import collaboratorLinks from '@/configs/link-cards'

import UtilsSection from '@/components/sections/utilities'

export default function PortalColaborador() {
  const {data, isLoading, error} = useLinks()

  if(!data) return <HomePageLoader />

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <UtilsSection
        className='h-full w-full flex flex-col items-between justify-start'
        data={data}
        />

      {/* Training section */}
      <section className="h-[60vh] xl:h-screen bg-primary w-full flex flex-col gap-10 lg:gap-20 items-center justify-center">
        <h2 className="text-lg font-semibold text-white lg:text-2xl">
          Treinamentos
        </h2>
        <div className="flex flex-wrap items-center justify-center w-full gap-6">
          {/* Card link */}
          {collaboratorLinks[1].infos.map((link, index) => {
            return (
              <LinkCard
                key={index}
                title={link.title}
                iconAlign="center"
                description={link.description}
                linkPath={link.linkPath}
              />
            )
          })}
        </div>
      </section>

      {/* Department section */}
      <section className="p-3 h-full lg:h-screen w-full flex flex-col gap-10 items-center justify-center">
        <h2 className="text-lg font-semibold text-secondary lg:text-2xl">
          Setores
        </h2>
        <div className="flex flex-wrap items-center justify-center w-full gap-4">
          {/* Card link */}
          {collaboratorLinks[2].infos.map((link, index) => {
            return (
              <LinkCard
                className="w-4/5 sm:w-80 h-28"
                iconAlign="center"
                key={index}
                variant="secondary"
                title={link.title}
                description={link.description}
                icon={link.icon}
                linkPath={link.linkPath}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
