import Image from "next/image"

import Link from 'next/link'

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

import { Separator } from "../ui/separator"

import logo from '@/assets/image/logo.png'
import { Button } from "../ui/button"
import collaboratorLinks from "@/configs/link-cards"


const Footer = () => {
  return (
  
<footer className="p-4 border-t shadow-md bg-background">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-0">
          <span className="flex items-center justify-center gap-1 text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024
            <Link href="https://funerariavida.com.br/" className="hover:underline">
             Funerária Vida
            </Link>. 
            <strong>Todos os direitos reservados</strong>
          </span>

          {/* footer links */}
          <div className="flex items-center justify-center gap-2">

            <Button
              variant={"default"}
              className='fill-white hover:bg-transparent hover:fill-primary'
              size={'icon'}
            >
              <Facebook className="text-transparent fill-inherit"/>
            </Button>

            <Button
              variant={"default"}
              className='fill-white text-primary hover:bg-transparent'
              size={'icon'}
            >
              <Instagram className="text-inherit fill-inherit"/>
            </Button>

            <Button
              variant={"default"}
              className='hover:bg-transparent fill-white hover:fill-primary'
              size={'icon'}
            >
              <Linkedin className="text-transparent fill-inherit"/>
            </Button>

            <Button
              variant={"default"}
              className='fill-primary hover hover:bg-transparent'
              size={'icon'}
            >
              <Youtube className="text-inherit fill-inherit" strokeWidth={2}/>
            </Button>
          </div>
      </div>
</footer>

  )
}

export default Footer