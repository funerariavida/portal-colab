const HomeLoader = () => {
  return (
    <div className="h-screen w-full bg-background">
      <header className="fixed top-0 z-10 flex items-center justify-center w-full h-20 px-3 py-6 shadow-md bg-background">
         carregando header...
      </header>
      <main className="h-full bg-background w-full flex items-center justify-center">
        carregando main...
      </main>
    </div>
  )
}

export default HomeLoader