'use client'

import { useState } from 'react'

// configs
import { portalTools } from '@/configs/data'

// next
import Link from 'next/link'

// icons
import { ExternalLink } from 'lucide-react'

// components
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

export default function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState<string>('')

  return (
    <NavigationMenu
      className="hidden lg:flex"
      value={isOpen}
      onValueChange={setIsOpen}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary capitalize text-white focus:bg-primary">
            Ferramentas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid max-h-[400px] w-[300px] gap-3 overflow-auto p-4">
              {portalTools.map((tool, index) => {
                return (
                  <Link
                    key={index}
                    href={tool.link}
                    // target={tool.target}
                    onClick={() => setIsOpen('')}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className="flex items-start justify-between rounded-lg p-4 text-center transition-all hover:bg-secondary hover:text-white">
                      {tool.title}
                      <ExternalLink className="h-4 w-4" />
                    </NavigationMenuLink>
                  </Link>
                )
              })}
              <Separator />

              {/* Whats new */}
              <NewsDialog onClick={() => setIsOpen('')} />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
