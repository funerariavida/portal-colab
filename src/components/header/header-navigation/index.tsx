import React from 'react'

import collaboratorLinks from '@/configs/link-cards'

import {ExternalLink} from 'lucide-react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
  

const HeaderNavigation = () => {
  return (
    <NavigationMenu className='hidden lg:flex'>
        <NavigationMenuList>
            {/* Percorrendo array de links */}
            {collaboratorLinks.map((link, index) => {    
                return (<NavigationMenuItem key={index}>
                    <NavigationMenuTrigger  
                        className='text-white capitalize bg-primary focus:bg-primary'>
                        {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid w-[300px] gap-3 p-4'>
                            {/* Percorrendo array de infos */}
                            {link.infos.map((info, index) => {
                                return <Link key={index} href={info.linkPath} target='blank' legacyBehavior passHref>
                                    <NavigationMenuLink className='flex items-start justify-between p-4 transition-all rounded-lg hover:bg-secondary hover:text-white'>
                                        {info.title}
                                        <ExternalLink size='16'/>
                                    </NavigationMenuLink>
                                 </Link>
                            })}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                )
                
            })}

        </NavigationMenuList>
    </NavigationMenu>

  )
}

export default HeaderNavigation