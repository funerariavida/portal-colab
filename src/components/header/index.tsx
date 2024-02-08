'use client'

import Link from 'next/link'

import Image from 'next/image'

import Logo from '@/assets/image/logo.png'

import { LogOut } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import HeaderNavigation from './header-navigation'
import HeaderSheet from './header-sheet'

import { useSessionStorage } from '@/hooks/use-session-storage'

import useFormatter from '@/hooks/use-formatter'

const Header = () => {
  const { removeItem } = useSessionStorage(
    process.env.NEXT_PUBLIC_SESSION_STORAGE_NAME,
  )
  const { userName, userRole } = useFormatter()

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full h-20 px-3 py-6 shadow-md bg-background lg:px-5">
      <div className="w-32 ms-7 lg:m-0">
        <Image className="w-full" src={Logo} alt="Logomarca" />
      </div>
      <div className="flex items-center justify-center h-full gap-4 ms-auto">
        <HeaderNavigation />
        <Separator
          orientation="vertical"
          className="w-[2px] h-full hidden lg:flex bg-primary"
        />
        {userName && userRole && (
          <div className="flex-col hidden mr-2 lg:flex">
            <h1 className="text-base font-bold capitalize">
              {userName ?? 'Usuário'}
            </h1>
            <h2 className="text-sm uppercase">{userRole ?? 'Cargo'}</h2>
          </div>
        )}
        <Button
          asChild
          variant={'outline'}
          onClick={() => removeItem()}
          className="hidden lg:flex hover:bg-transparent hover:text-primary"
        >
          <Link href={'/portaldocolaborador/login'}>
            <LogOut className="w-4 h-4 mr-4" />
            <span className="text-base">Sair</span>
          </Link>
        </Button>
      </div>
      <HeaderSheet />
    </header>
  )
}

export default Header
