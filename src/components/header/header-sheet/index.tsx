'use client'

// next
import Link from 'next/link'

// hooks
import useFormatter from '@/hooks/use-formatter'

// configs
import { portalTools } from '@/configs/data'

// react
import { useState } from 'react'

// components
import NewsDialog from '@/components/dialog/news-dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

// icons
import { LogOut, Menu } from 'lucide-react'

const HeaderSheet = () => {
  const { username, userrole } = useFormatter()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="flex lg:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto px-2">
        <SheetHeader className="px-2 py-3">
          <SheetTitle className="flex flex-col items-start">
            <span className="text-base font-semibold capitalize">
              {username ?? 'Usuário'}
            </span>
            <span className="text-sm font-medium uppercase">
              {userrole ?? 'Cargo'}
            </span>
          </SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="grid gap-4 p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={'index-1'}>
              <AccordionTrigger className="font-semibold capitalize text-primary">
                Ferramentas
              </AccordionTrigger>
              <AccordionContent className="flex flex-col items-start">
                {portalTools.map((tool, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => setIsOpen(false)}
                      className="hover:bg-secondary hover:text-white"
                      variant={'ghost'}
                      asChild
                    >
                      <Link href={tool.link} target={tool.target}>
                        <tool.icon className="mr-4 h-4 w-4 text-inherit" />
                        <span className="text-inherit">{tool.title}</span>
                      </Link>
                    </Button>
                  )
                })}
                <Separator />

                <NewsDialog onClick={() => setIsOpen(false)} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter>
          <div className="flex w-full flex-wrap items-start justify-between gap-3">
            <Button
              asChild
              onClick={() => window.sessionStorage.clear()}
              variant={'outline'}
            >
              <Link href={'/portaldocolaborador/login'}>
                <LogOut className="mr-4 h-4 w-4" />
                <span className="text-base">Sair</span>
              </Link>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default HeaderSheet
