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
          "w-full h-20 bg-background flex flex-col items-center justify-center",
        )}>
          <h1 className={
            classNames(
            "text-2xl font-bold",
            {
              "text-primary": cardVariant === 'primary'
            },
            {
              "text-secondary": cardVariant === 'secondary'
            },
            {
              "text-black": cardVariant !== 'default'
            }
          )}>
            {link.name}
          </h1>
        </div>
      )}

      {/* cards */}
      <div className="flex-1 flex flex-col items-center justify-center gap-3 p-6">
        {
          link.infos.map((info, index) => {
            return (
              <LinkCard
                key={index}
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