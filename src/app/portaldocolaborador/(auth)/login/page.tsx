import Logo02 from '@/assets/image/logo-02.png'
import Logo from '@/assets/image/logo.png'
import Image from 'next/image'

import LoginForm from '@/components/login-form'

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* first part */}
      <div className="items-center justify-center hidden w-1/2 h-screen md:flex text-primary">
        <div className="w-52">
          <Image className="w-full" src={Logo} alt="Logomarca" />
        </div>
      </div>

      {/* second part */}
      <div className="flex flex-col items-center justify-center w-full h-screen gap-5 text-white bg-primary md:w-1/2">
        <div className="flex w-1/2 p-4 mb-2 md:hidden">
          <Image src={Logo02} alt="logomarca" />
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

export default Login
