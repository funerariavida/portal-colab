import AppCard from '@/components/cards/applicattion-card'

// images

export default function Home() {
  return (
    <div className="grid min-h-full min-w-full place-items-center">
      <h1>Home page!</h1>
      <div className="flex min-w-full items-center justify-center">
        <AppCard
          text="Portal do colaborador"
          href={'https://www.empresavida.com.br/portaldocolaborador'}
        />
      </div>
    </div>
  )
}
