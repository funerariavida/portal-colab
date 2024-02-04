import Image from "next/image"

import Link from 'next/link'

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

import { Separator } from "../ui/separator"

import logo from '@/assets/image/logo.png'
import { Button } from "../ui/button"
import collaboratorLinks from "@/configs/link-cards"


const Footer = () => {
  return (
  
<footer className="bg-background shadow-md border-t p-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between">
          <span className="flex items-center justify-center gap-1 text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024
            <Link href="https://funerariavida.com.br/" className="hover:underline">
             Funerária Vida
            </Link>. 
            <strong>Todos os direitos reservados</strong>
          </span>

          {/* footer links */}
          <div className="flex items-center justify-center gap-3">

            <Button
              variant={"outline"}
              className='fill-primary hover:fill-white'
              size={'icon'}
            >
              <Facebook className="text-transparent fill-inherit"/>
            </Button>

            <Button
              variant={"outline"}
               className='text-white fill-primary hover:text-primary hover:fill-white'
              size={'icon'}
            >
              <Instagram className="text-inherit fill-inherit"/>
            </Button>

            <Button
              variant={"outline"}
               className='fill-primary hover:fill-white'
              size={'icon'}
            >
              <Linkedin className="text-transparent fill-inherit"/>
            </Button>

            <Button
              variant={"outline"}
              className='text-white fill-primary hover:text-primary hover:fill-white'
              size={'icon'}
            >
              <Youtube className="text-inherit fill-inherit"/>
            </Button>
          </div>
      </div>
</footer>

  )
}

export default Footer