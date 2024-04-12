// next
import Image from 'next/image'

// components
import LoginForm from '@/components/login-form'

export default function LoginPage() {
  return (
    <div className="flex h-full w-full items-center justify-center desktop-xl:border">
      {/* first part */}
      <div className="hidden min-h-full w-1/2 items-center justify-center text-primary md:flex">
        <div className="w-52">
          <Image
            className="w-full"
            src={'/logo/portal_logo.svg'}
            alt="Logomarca"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* second part */}
      <div className="flex min-h-full w-full flex-col items-center justify-center gap-5 bg-primary text-white md:w-1/2">
        <div className="mb-2 flex w-1/2 p-4 md:hidden">
          <Image
            className="w-full"
            src={'/logo/logo_white.svg'}
            alt="logomarca"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-xl font-bold text-white">Login</h1>
          <h2 className="text-lg font-medium text-zinc-300">
            Acesse sua conta
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
