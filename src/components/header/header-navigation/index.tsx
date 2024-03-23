// configs
import { portalTools } from '@/configs/data'

// cookies

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
  return (
    <NavigationMenu className="hidden lg:flex">
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
                    target={tool.target}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className="flex items-start justify-between rounded-lg p-4 text-center transition-all hover:bg-secondary hover:text-white"
                      target="blank"
                    >
                      {tool.title}
                      <ExternalLink className="h-4 w-4" />
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
      </NavigationMenuList>
    </NavigationMenu>
  )
}
