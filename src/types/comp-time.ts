type CompTime = {
  nome: string
  setor: string
  data: string
  duração: string
  motivo: string
  autorização: string
  status: string
}

type CompTimeResponse = {
  registros: CompTime[]
}

export type { CompTime, CompTimeResponse }
// eslint-disable-next-line prettier/prettier

