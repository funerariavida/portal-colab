export type CompTime = {
  nome: string
  setor: string
  data: string
  duração: string
  motivo: string
  autorização: string
  status: string
}

export type CompTimeFilter = {
  data: string
  duração: string
  motivo: string
  autorização: string
  status: string
}

export type CompTimeResponse = {
  registros: CompTime[]
}
