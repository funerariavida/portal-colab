import Link  from 'next/link';

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { useSessionStorage } from "@/hooks/use-session-storage"

import { ExternalLink, LogOut, Menu } from "lucide-react"

import collaboratorLinks from "@/configs/link-cards"

import { Separator } from "@/components/ui/separator";

import useFormatter from '@/hooks/use-formatter';

const HeaderSheet = () => {
  const {removeItem} = useSessionStorage('isLogged');
  const {userName, userRole} = useFormatter();

  return (
    <Sheet>
      <SheetTrigger asChild className="flex lg:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-2 overflow-auto">
        <SheetHeader className="px-2 py-3">
          <SheetTitle className='flex flex-col items-start'>
            <span className='text-base font-semibold capitalize'>{userName ?? 'Usuário'}</span>
            <span className='text-sm font-medium uppercase'>{userRole ?? 'Cargo'}</span>
          </SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="grid gap-4 p-4">
          <Accordion type="single" collapsible className="w-full">
            {collaboratorLinks.map((data,index) => {
              return <AccordionItem key={index} value={`index-${index}`}>
              <AccordionTrigger className="font-semibold capitalize text-primary">{data.name}</AccordionTrigger>
              <AccordionContent className="flex flex-col items-start">
                {data.infos.map((link, index) => {
                  return <Button className='hover:bg-secondary hover:text-white' key={index} variant={'ghost'} asChild>
                   <Link href={link.linkPath} target="blank">
                      <ExternalLink className="w-4 h-4 mr-4 text-inherit"/> 
                      <span className="text-inherit">{link.title}</span>
                    </Link>
                  </Button>
                })}
              </AccordionContent>
            </AccordionItem>
            })}

          </Accordion>
        </div>
        <SheetFooter>
          <div className="flex items-start w-full">
            <Button 
              asChild
              onClick={() => removeItem()}
              variant={'outline'}
            >
              <Link href={'/portaldocolaborador/login'}>
                <LogOut className="w-4 h-4 mr-4"/>
                <span>Sair</span>
              </Link>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
  </Sheet>
  )
}

export default HeaderSheet