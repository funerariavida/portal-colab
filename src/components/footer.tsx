import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="min-w-full p-4 shadow-md bg-black">
      <div className="flex items-center justify-center w-full gap-3 sm:flex-row sm:gap-0">
        <span className="flex items-center justify-center w-full gap-1 text-xs text-center text-white sm:text-sm sm:w-auto">
          © 2024
          <Link
            href="https://funerariavida.com.br/"
            className="hover:underline"
            target="blank"
          >
            Funerária Vida
          </Link>
          .<strong>Todos os direitos reservados</strong>
        </span>
      </div>
    </footer>
  )
}

export default Footer
