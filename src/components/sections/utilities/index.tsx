import LinkCard from '@/components/link-card'

import LinkProps from '@/types/links'

type Props = {
  data: LinkProps[]
}

const UtilsSection = ({data}: Props) => {
  return (
    <section className="h-full w-full flex flex-col items-between justify-start">
      <div className="w-full bg-primary h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
          Portal do Colaborador
        </h1>
      </div>
      <div className="px-2 py-3 flex flex-wrap items-center justify-center w-full gap-3">
        <div className="w-full text-center">
          <h3 className="text-lg font-semibold lg:text-2xl text-secondary">
            {data[0].name}
          </h3>
        </div>
        {/* Card link */}           
        {data[0].infos.map((link, index) => {
          return (
            <LinkCard
              variant="primary"
              key={index}
              title={link.title}
              description={link.description}
              icon={link.icon}
              linkPath={link.linkPath}
             />
          )
        })}
    </div>
  </section>
  )
}

export default UtilsSection