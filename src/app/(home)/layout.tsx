// react
import { ReactNode } from 'react'

// next
import Image from 'next/image'

// assets
import Logo from '@/assets/image/logo.png'

// components
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

// icons
import { Headphones } from 'lucide-react'
import Link from 'next/link'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen min-w-full grid-cols-1 grid-rows-[max-content_auto_max-content]">
      {/* header */}
      <header className="flex h-[100px] w-full items-center justify-between px-[100px] py-[27px]">
        <div className="grid w-28 place-items-center">
          <Image
            className="min-w-full"
            src={Logo}
            width={80}
            height={80}
            alt={''}
          />
        </div>
        <Button
          variant={'outline'}
          className="rounded-3xl border-[3px]"
          asChild
        >
          <Link
            href={
              '/https://docs.google.com/forms/d/e/1FAIpQLScBrma8d15k3A7KOAasodqOoOW9jJr14Cc5zQNGPsTLFw9_Iw/viewform'
            }
            target="_blank"
          >
            <Headphones className="h-4 w-4" />
            <span className="ms-4 text-base font-semibold text-white">
              Suporte técnico
            </span>
          </Link>
        </Button>
      </header>
      <main className="col-span-1 grid h-full place-items-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
