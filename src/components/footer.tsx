import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="min-w-full bg-black p-4 shadow-md">
      <div className="flex w-full items-center justify-center gap-3 sm:flex-row sm:gap-0">
        <span className="flex w-full items-center justify-center gap-1 text-center text-xs text-white sm:w-auto sm:text-sm">
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
