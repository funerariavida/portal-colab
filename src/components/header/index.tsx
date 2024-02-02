'use client'

import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import Logo from '@/assets/image/logo.png'

import { LogOut } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'

import HeaderNavigation from './header-navigation'
import HeaderSheet from './header-sheet'

import { useSessionStorage } from '@/hooks/use-session-storage'
import { useCollabContext } from '@/context/collaborator'

import userFormatter from '@/utils/user-formatter'


const Header = () => {
  const {removeItem} = useSessionStorage('isLogged')
  const {userName, userRole} = userFormatter();

  return (
    <header className='sticky z-10 top-0 w-full bg-background h-20 px-5 py-6 shadow-md flex items-center justify-center'>
       <HeaderSheet />
        <div className='w-32 ms-7 lg:m-0'>
            <Image 
            className='w-full'  
              src={Logo}
              alt='Logomarca'
            />
        </div>
        <div className='ms-auto h-full gap-4 flex items-center justify-center'>
          <HeaderNavigation />
          <Separator orientation='vertical' className='w-[2px] h-full hidden lg:flex bg-primary'/>
          {userName && userRole && <div className='hidden lg:flex flex-col mr-2'>
              <h1 className='text-base font-bold capitalize'>{userName ?? 'Usuário'}</h1>
              <h2 className='text-sm capitalize'>{userRole ?? 'Cargo'}</h2>
            </div>}
          <Button 
            asChild
            variant={'outline'}
            onClick={() => removeItem()}
            className='hidden lg:flex hover:bg-transparent hover:text-primary'>
              <Link
                href={'/portaldocolaborador/login'}
                
              >
                <LogOut className='w-4 h-4 mr-4'/>
                <span className='text-base'>Sair</span>
              </Link>
          </Button>
        </div>
    </header>
  )
}

export default Header