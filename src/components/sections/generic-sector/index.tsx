import LinkCard from "@/components/link-card"
import LinkProps from "@/types/links"
import SectionProps from "@/types/section"
import classNames from "classnames"


type Props = SectionProps &  {
  link: LinkProps
  hasHeader?: boolean
}

export default function GenericSector({hasHeader = false, cardVariant,link, ...props}: Props) {

  return (
    <section 
      className="mx-auto grid w-full max-w-[1440px] grid-rows-[min_content_max-content] gap-5"
      {...props}
    >
      {/* header */}
      {hasHeader && (
        <div className={
          classNames(
          "w-full h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center",
          {
            "bg-background" : cardVariant === 'default'
          },
          {
            "bg-primary" : cardVariant === 'primary'
          },
          {
            "bg-secondary" : cardVariant === 'secondary'
          },
        )}>
          <h1 className={
            classNames(
            "text-2xl font-bold sm:text-4xl lg:text-5xl",
            {
              "text-primary": cardVariant === 'default'
            }
          )}>
            {link.name}
          </h1>
        </div>
      )}

      {/* cards */}
      <div className="flex-1 flex items-center justify-center flex-wrap gap-3 p-6">
        {
          link.infos.map((info) => {
            return (
              <LinkCard
                title={info.title}
                variant={cardVariant}
                description={info.description}
                icon={info.icon}
                linkPath={info.linkPath}
              />
            )
          })
        }
      </div>
    </section>
  )
}