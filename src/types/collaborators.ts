export type CollabResponse = {
  code: number
  message?: string
  nome: string
  cargo: string
  cpf: string
  email: string
  telefone: string
  type_user: string
}

export type SessionCollab = {
  name: string
  role: string
  cpf: string
  telefone: string
}
