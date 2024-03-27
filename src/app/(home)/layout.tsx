// react
import { ReactNode } from 'react'

// next
import Image from 'next/image'

// assets
import Logo from '@/assets/logo/logo-secondary.png'

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
      <header className="flex h-[100px] w-full items-center justify-between bg-primary px-6 py-4 sm:px-24 sm:py-7">
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
          className="rounded-3xl border-[3px] border-white  bg-white text-primary hover:bg-white hover:text-primary sm:bg-transparent sm:text-white"
          asChild
        >
          <Link
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLScBrma8d15k3A7KOAasodqOoOW9jJr14Cc5zQNGPsTLFw9_Iw/viewform'
            }
            target="_blank"
          >
            <Headphones className="h-6 w-6 text-inherit sm:h-4 sm:w-4" />
            <span className="ms-4 hidden text-base font-semibold text-inherit sm:flex">
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
