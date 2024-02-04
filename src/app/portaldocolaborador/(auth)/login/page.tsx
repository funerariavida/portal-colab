'use client'

import React from 'react'

import Logo from '@/assets/image/logo.png'
import Image from 'next/image'

import LoginForm from '@/components/login-form'

const Login = () => {

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      {/* first part */}
      <div className='h-screen w-1/2 hidden md:flex items-center justify-center text-primary'>
        <div className='w-52'>
          <Image
            className='w-full'
            src={Logo}
            alt='Logomarca'
          />
        </div>
      </div>

      {/* second part */}
      <div className="bg-primary h-screen w-full md:w-1/2 flex gap-5 flex-col items-center justify-center text-white">
        <div className='w-1/2 p-4 mb-2 flex md:hidden bg-background'>
          <Image 
            src={Logo}
            alt='logomarca'
          />
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <h1 className='text-xl text-white font-bold'>Login</h1>
          <h2 className='text-lg text-zinc-300 font-medium'>Acesse sua conta</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login