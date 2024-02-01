import Image from "next/image"

import Link from 'next/link'

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

import { Separator } from "../ui/separator"

import logo from '@/assets/image/logo.png'
import { Button } from "../ui/button"
import collaboratorLinks from "@/configs/link-cards"


const Footer = () => {
  return (
  
<footer className="bg-background shadow-md border-t">
    <div className="flex flex-col gap-3 w-full p-4 py-6 lg:py-8">
      <div className="w-full py-4 px-6 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between">
        <div className='w-full lg:w-1/3 flex items-center justify-center'>
          <Image
            src={logo}
            alt='Logomarca empresa'
          />
        </div>
        <div className='flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5'>
          {collaboratorLinks.map((collab, index) => {
            return <div key={index} className="flex flex-col items-center justify-center">
              <h1 className="text-lg text-primary font-semibold capitalize">{collab.name}</h1>
              {collab.infos.map((link, index) => {
                return <Link 
                  className='text-base text-zinc-500 hover:text-primary text-center' 
                  key={index}
                  href={link.linkPath}
                  target="blank"
                  >
                    {link.title}
                  </Link>
              })}
            </div>
          })}
          <div></div>
          <div></div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between">
          <span className="flex items-center justify-center gap-1 text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <Link href="https://funerariavida.com.br/" className="hover:underline">
             Funerária Vida™
            </Link>. 
            <strong>Todos os direitos reservados</strong>
          </span>

          {/* footer links */}
          <div className="flex items-center justify-center gap-3">

            <Button
              variant={"outline"}
              size={'icon'}
            >
              <Facebook/>
            </Button>

            <Button
              variant={"outline"}
              size={'icon'}
            >
              <Instagram/>
            </Button>

            <Button
              variant={"outline"}
              size={'icon'}
            >
              <Linkedin/>
            </Button>

            <Button
              variant={"outline"}
              size={'icon'}
            >
              <Youtube/>
            </Button>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer