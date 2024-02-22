export type CollabResponse = {
  data: [
    {
      code: number
      message: string
      nome: string
      cargo: string
      cpf: string
      type_user: string
    },
  ]
}

export type Collaborators = {
  nome: string
  cargo: string
  cpf: string
}
