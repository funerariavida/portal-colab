// next
import Image from 'next/image'
import Link from 'next/link'

// url
import { Url } from 'url'

// props
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { AnchorHTMLAttributes } from 'react'

// tailwind-merge
import { twMerge } from 'tailwind-merge'

type AppCardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string | Url
  image?: string | StaticImport
  text: string
  imageAlt?: string
  imageWidthRender?: number
  imageHeightRender?: number
  disabled?: boolean
}

export default function AppCard({
  href,
  image,
  text,
  className,
  imageAlt,
  disabled,
  imageWidthRender,
  imageHeightRender,
  ...props
}: AppCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Link
        href={href}
        target="_blank"
        className={twMerge(
          'grid h-48 w-48 place-items-center rounded-3xl bg-zinc-100 shadow-md transition-all duration-300 hover:scale-105',
          className,
        )}
        {...props}
      >
        {image && (
          <Image
            className="w-full object-fill"
            src={image}
            alt={imageAlt ?? ''}
            width={imageWidthRender ?? 100}
            height={imageHeightRender ?? 100}
          />
        )}
      </Link>
      <span className="text-base font-medium text-black">{text}</span>
    </div>
  )
}
