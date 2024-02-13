import LinkCard from '@/components/link-card'
import SectionProps from '@/types/section'

const DepartmentSection = ({data, cardVariant, ...props}: SectionProps) => {
  return (
    <section
     {...props}
    >
    <h2 className="text-lg font-semibold text-secondary lg:text-2xl">
      Setores
    </h2>
    <div className="flex flex-wrap items-center justify-center w-full gap-4">
      {/* Card link */}
      {data[2].infos.map((link, index) => {
        return (
          <LinkCard
            className="w-4/5 sm:w-80 h-28"
            iconAlign="center"
            key={index}
            variant={cardVariant}
            title={link.title}
            description={link.description}
            icon={link.icon}
            linkPath={`portaldocolaborador/${link.linkPath}`}
          />
        )
      })}
    </div>
  </section>
  )
}

export default DepartmentSection