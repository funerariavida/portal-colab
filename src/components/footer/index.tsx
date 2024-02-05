import Link from 'next/link'

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

import { Button } from "../ui/button"


const Footer = () => {
  return (
  
<footer className="p-4 border-t shadow-md bg-background">
      <div className="flex items-center justify-center w-full gap-3 sm:flex-row sm:gap-0">
          <span className="flex items-center justify-center w-full gap-1 text-xs text-center text-gray-500 sm:text-sm sm:w-auto">
            © 2024
            <Link href="https://funerariavida.com.br/" className="hover:underline">
             Funerária Vida
            </Link>. 
            <strong>Todos os direitos reservados</strong>
          </span>

          {/* footer links */}
          {/* <div className="flex items-center justify-center gap-2">

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
          </div> */}
      </div>
</footer>

  )
}

export default Footer