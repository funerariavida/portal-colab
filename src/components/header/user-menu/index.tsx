import React from 'react'
import Link from 'next/link'

import { sessionType, useSessionStorage } from '@/hooks/use-session-storage'
import { useCollabContext } from '@/context/collaborator'

import { LogOut } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const UserMenu = () => {
  const {getItem, removeItem} = useSessionStorage<sessionType>('collab')
  const {collab} = useCollabContext()

  const item = getItem()?.toString()
  const userInfo = item != undefined && JSON.parse(item)
  const userName = userInfo.name.split(' ')[0].toLowerCase()
  const userRole = userInfo.role.toLowerCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='hidden lg:flex'>
        <Avatar className='border border-zinc-600'>
          <AvatarImage src="https://media.licdn.com/dms/image/C4E03AQF-Ir1phXmPcQ/profile-displayphoto-shrink_800_800/0/1655721804643?e=2147483647&v=beta&t=0pZVUJY5M8iN7IGKY9hob9sdhEB-_UYQvYbbVfPcMm8" alt="usuário" />
          <AvatarFallback>FV</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-44'>
        <DropdownMenuLabel className='flex flex-col items-start'>
          <span className='text-base font-semibold capitalize'>{userName ?? 'Usuário'}</span>
          <span className='text-sm font-medium capitalize'>{userRole ?? 'Cargo'}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <Link
              href={'/portaldocolaborador/login'}
              onClick={() => removeItem()}
              className='w-full flex items-center justify-between'
            >
              <LogOut className='w-4 h-4'/>
              Logout 
            </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default UserMenu