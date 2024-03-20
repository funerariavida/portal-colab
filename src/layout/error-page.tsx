type Props = {
  message: string
  error?: Error
}

export default function ErrorPage({ message, error }: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="text-xl font-bold text-destructive">{message}</h1>
      {error && (
        <p className="text-lg font-medium text-zinc-500">{error.message}</p>
      )}
    </div>
  )
}
