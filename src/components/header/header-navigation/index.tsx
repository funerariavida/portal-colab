/* eslint-disable prettier/prettier */
'use client'

import { ExternalLink } from 'lucide-react'

import NewsDialog from '@/components/dialog/news-dialog'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

import { portalTools } from '@/configs/data'
import { useLinkContext } from '@/context/link'
import Link from 'next/link'

export default function HeaderNavigation() {
  const { getLinkByPage } = useLinkContext()

  const data = getLinkByPage('main')

  if(!data) {
    return (
      <div className="hidden lg:flex h-full items-center justify-center gap-3">
      <Skeleton className="h-full w-24 rounded-lg" />
      <Skeleton className="h-full w-24 rounded-lg" />
      <Skeleton className="h-full w-24 rounded-lg" />
      </div>
    )
  }

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white capitalize bg-primary focus:bg-primary">
            Ferramentas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] max-h-[400px] overflow-auto gap-3 p-4">
              {portalTools.map((tool, index) => {
                return (
                  <Link
                  key={index}
                  href={tool.link}
                  target={tool.target}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink 
                    className="flex items-start justify-between text-center p-4 transition-all rounded-lg hover:bg-secondary hover:text-white"
                    target='blank'
                  >
                    {tool.title}
                    <ExternalLink className="w-4 h-4" />
                  </NavigationMenuLink>
                </Link>
                )
              })}
              <Separator />

              {/* Whats new */}
              <NewsDialog />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Percorrendo array de links */}
        {/* {data.map((link, index) => {
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger className="text-white capitalize bg-primary focus:bg-primary">
                {link.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] max-h-[400px] overflow-auto gap-3 p-4">
                  {link.infos.map((info, index) => {
                    return (
                      <Link
                        key={index}
                        href={`${info.linkPath}`}
                        target="blank"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink 
                          className="flex items-start justify-between p-4 transition-all rounded-lg hover:bg-secondary hover:text-white"
                          target='blank'
                        >
                          {info.title}
                          <ExternalLink size="16" />
                        </NavigationMenuLink>
                      </Link>
                    )
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })} */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}