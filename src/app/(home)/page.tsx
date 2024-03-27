import AppCard from '@/components/cards/applicattion-card'

// images

export default function Home() {
  return (
    <div className="grid min-h-full min-w-full place-items-center gap-6 py-5 sm:gap-4 sm:py-0">
      <h1 className="text-xl font-semibold text-black sm:text-heading-2">
        Qual aplicação você deseja usar?
      </h1>
      <div className="flex h-full min-w-full flex-wrap items-center justify-center gap-4 sm:gap-28">
        {/* portal */}
        <AppCard
          text="Portal do colaborador"
          href={'https://www.empresavida.com.br/portaldocolaborador'}
        />

        {/* Lumina */}
        <AppCard text="Lumina" href={'/'} />

        {/* University */}
        <AppCard text="Universidade Vida" href={'/'} />
      </div>
    </div>
  )
}
