import { axiosInstance } from '@/configs/axios-base-config'

import LinkProps from '@/types/links'

import useSWR, { Fetcher } from 'swr'
const fetcher: Fetcher<LinkProps[], string> = (url: string) => {
  const res = axiosInstance({
    method: 'get',
    url: url,

    headers: {
      "token": "c590d2c06e8d1cc2ddd9d0130b49a211fa6e8a67",
    },
  }).then((res) => res.data)

  return res
}

const data: LinkProps[] = [
  {
      "page": "main",
      "name": "Utilitários",
      "infos": [
          {
              "title": "Ouvidoria interna",
              "description": "Um espaço voltado para ouvir você colaborador",
              "icon": "speech",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSeQ49v1-TElICd24sF1SjF5bHx2BkKw-rzuHErdj16iRPNWQQ/viewform"
          },
          {
              "title": "Folha de ponto",
              "description": "Receba a sua folha de ponto em segundos",
              "icon": "sticky-note",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSe3_aItRoojkaj-IFT6K9LSpnLCN6kXgfeH9TR6MhBog4zIZg/viewform"
          },
          {
              "title": "Banco de horas",
              "description": "Lance as suas horas que fora geradas",
              "icon": "clock",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSfKiv85P3YYzT6rZjqQ8LMjBwT2D1f0hZin73VYL2fyyK8OPQ/viewform"
          },
          {
              "title": "Suporte T.I",
              "description": "Solicite suporte técnico da equipe de T.I",
              "icon": "computer",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScBrma8d15k3A7KOAasodqOoOW9jJr14Cc5zQNGPsTLFw9_Iw/viewform"
          },
          {
              "title": "Manutenção predial",
              "description": "Solicite manutenção predial e de mobília",
              "icon": "wrench",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSevgtJvrf9Bd7d4NmH15nDgSe6uiTleLSHNr4MAs7cL2ybE4A/viewform"
          },
          {
              "title": "Material Comercial",
              "description": "Solicite propostas, contratos, fichas e etc",
              "icon": "layers-3",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSdtjKjyUxJLfsEuFYCbzm_Kbpk5nuFmDg54RSvl13riSWEbZg/viewform"
          },
          {
              "title": "Anexar atestado/declarações",
              "description": "Anexe os seus atestados e declarações",
              "icon": "file-plus",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSd7wU7TUXteChqFzOY5Gf3Z6mwsqI9E_BLhRnA5nQpYV-yKZA/viewform"
          },
          {
              "title": "Avantino",
              "description": "Acesse a plataforma mobile do Avante",
              "icon": "tablet-smartphone",
              "linkPath": "https://avantino.pbr.digital/vida/"
          }
      ]
  },
  {
      "page": "main",
      "name": "Treinamentos",
      "infos": [
          {
              "title": "Transmissão de velório",
              "description": "Aprenda todos os processos de uma transmissão de velório",
              "icon": "monitor-play",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSd7wU7TUXteChqFzOY5Gf3Z6mwsqI9E_BLhRnA5nQpYV-yKZA/viewform"
          }
      ]
  },
  {
      "page": "main",
      "name": "Setores",
      "infos": [
          {
              "title": "Atendimento",
              "description": "",
              "icon": "users",
              "linkPath": "/setores/atendimento"
          },
          {
              "title": "Crematórios",
              "description": "",
              "icon": "flame",
              "linkPath": "/setores/crematorios"
          },
          {
              "title": "Departamento pessoal",
              "description": "",
              "icon": "tablet-smartphone",
              "linkPath": "/setores/dp"
          },
          {
              "title": "Operacional",
              "description": "",
              "icon": "skull",
              "linkPath": "/setores/operacional"
          },
          {
              "title": "Recursos humanos",
              "description": "",
              "icon": "person-standing",
              "linkPath": "/setores/rh"
          },
          {
              "title": "T.I",
              "description": "",
              "icon": "computer",
              "linkPath": "/setores/ti"
          }
      ]
  },
  {
      "page": "atendimento",
      "name": "Ordem de serviço",
      "infos": [
          {
              "title": "Lançar informações",
              "description": "Lançe informações referentes a ordem de serviço atendida",
              "icon": "book-plus",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSc9wjTQNu00LUb3z_ahnPKjLCWEFR9-vbOifk9YBeeNGLK8uQ/viewform"
          },
          {
              "title": "Arquivamento digital de documentos",
              "description": "Arquive os documentos referentes a ordem de serviço atendida",
              "icon": "folder-up",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScLdut0AbrZrFQbCIreCwv_YZjP4eKii9cn0wC-slww3snxCw/viewform"
          }
      ]
  },
  {
      "page": "atendimento",
      "name": "Transmissão de velório",
      "infos": [
          {
              "title": "Termo de responsabilidade",
              "description": "Primeiro passo para poder criar uma transmissão de velório",
              "icon": "scroll-text",
              "linkPath": "https://drive.google.com/drive/folders/1a07z1hi00pSxQalQVQ4d9bdN-ZLe3G51"
          },
          {
              "title": "Criar transmissão de velório",
              "description": "",
              "icon": "plus-square",
              "linkPath": "https://adiau.com.br/admin/login"
          },
          {
              "title": "Link para família assistir",
              "description": "",
              "icon": "eye",
              "linkPath": "https://drive.google.com/file/d/1nW9SSASLHw21lXo_R_keJxkIaoj36pUy/view"
          },
          {
              "title": "Lançar informações",
              "description": "",
              "icon": "book-plus",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScibfRPX8uyXb3xMGB6kDLhYoHuRsDYPonWxgMDmG3Kdbc8Cg/viewform"
          },
          {
              "title": "Material de apoio",
              "description": "Tutoriais, senhas, termos, links e etc",
              "icon": "folder-search",
              "linkPath": "https://drive.google.com/drive/folders/1wLABHqxX5nVjJZQYjCp6fd6btkbQTKNG"
          }
      ]
  },
  {
      "page": "crematórios",
      "name": "Geral",
      "infos": [
          {
              "title": "Manutenções preventivas",
              "description": "",
              "icon": "settings",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSdfBMm4zB7snU9AVJjg-zSWQYRcdj-3caNSf9no03Wzi_Jc5g/viewform"
          }
      ]
  },
  {
      "page": "crematórios",
      "name": "Consumo de gás",
      "infos": [
          {
              "title": "Crematório humano",
              "description": "",
              "icon": "user-round",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSd67uMWDebh85Z6wxe_BM8UPUKoS39jjl8kNQyTCqFgO9Mnyw/viewform"
          },
          {
              "title": "Crematório pet",
              "description": "",
              "icon": "paw-print",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSdZdyQqv5GmJjLd_YU425Gw_ndJxj-nHstecTL8_pXQwO8n6g/viewform"
          }
      ]
  },
  {
      "page": "dp",
      "name": "Geral",
      "infos": [
          {
              "title": "Folha de ponto",
              "description": "Receba a sua folha de ponto em segundos",
              "icon": "sticky-note",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSe3_aItRoojkaj-IFT6K9LSpnLCN6kXgfeH9TR6MhBog4zIZg/viewform"
          },
          {
              "title": "Banco de horas",
              "description": "Lance as suas horas que fora geradas",
              "icon": "clock",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSfKiv85P3YYzT6rZjqQ8LMjBwT2D1f0hZin73VYL2fyyK8OPQ/viewform"
          },
          {
              "title": "Cadastro pessoal",
              "description": "Cadastre-se para garantir para garantir que seus dados estejam atualizados e seguros em nosso sistema ",
              "icon": "user-plus",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSfqicaMAHW0hIa6lHLvVfJWz7HuxDlsiyLtBGBVVGzevsEBJg/viewform"
          },
          {
              "title": "Anexar atestado/declarações",
              "description": "Anexe os seus atestados e declarações",
              "icon": "file-plus",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSd7wU7TUXteChqFzOY5Gf3Z6mwsqI9E_BLhRnA5nQpYV-yKZA/viewform"
          }
      ]
  },
  {
      "page": "operacional",
      "name": "Processos operacionais",
      "infos": [
          {
              "title": "Recolhimento",
              "description": "",
              "icon": "ambulance",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSfLklF6Xzp2Zi7lfTgU7bqptRLDQu3XWu_V1GCgnYBq1zuqNw/viewform"
          },
          {
              "title": "Material",
              "description": "",
              "icon": "truck",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSdW575ejJ3K5l6d5zfaq8oSIjZ9qodRULha_3RU1tvG_uIF9Q/viewform"
          },
          {
              "title": "Tanatopraxia",
              "description": "",
              "icon": "syringe",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScdNUWhx3oB_pOWU6oRgBHb2dWLLAT0Qoy32oeTe9gHwbflcg/viewform"
          },
          {
              "title": "Ornamentação",
              "description": "",
              "icon": "shower-head",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSd3tWZA_OByw-Z4b7BMiUYNQSBEBKGFREWwjonR571N1aKDhg/viewform"
          },
          {
              "title": "Entregar corpo",
              "description": "",
              "icon": "car",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScAwLfVvLvBOvBoT-1qf38ogoaDMtHVefG_uZ36qOOfJaZ9nw/viewform"
          },
          {
              "title": "Sepultamento/Cortejo",
              "description": "",
              "icon": "ghost",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSeu0oI4dT489xrfE2g8B1Z7N1vaBL2SAyw64O3hHAjqslQbSg/viewform"
          },
          {
              "title": "Cremação",
              "description": "",
              "icon": "flame",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScm3MmL66b8jGRWmSnNUv8TPlLQJ4YIC_210T4UvHC1e3w8ug/viewform"
          },
          {
              "title": "Observações das OS",
              "description": "",
              "icon": "sticky-note",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSd8a8ctjn4lePNLZzVALy9JXLTMgxQ1PzLd_RxXfZPllMGoyA/viewform"
          }
      ]
  },
  {
      "page": "operacional",
      "name": "Outros processos",
      "infos": [
          {
              "title": "Troca de plantões",
              "description": "",
              "icon": "refresh-cw",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSc2QXeRUep4EVB9htqqXIMMtlT_LxQymuHrLWyp8dZbu9g7dQ/viewform"
          },
          {
              "title": "Troca de assistência familiar",
              "description": "",
              "icon": "car-front",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSeRmmCk3ZiHtjOuVB2JeEo5liRzODwPQVPr03Uc3cInbcIlKw/viewform"
          },
          {
              "title": "Outras demandas",
              "description": "",
              "icon": "clipboard-list",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSf0JVzK4qOtkauKjrX_-PfPMKdcXNjx3jVCIrvGK6-GA6zylA/viewform"
          }
      ]
  },
  {
      "page": "rh",
      "name": "Colaboradores",
      "infos": [
          {
              "title": "Análise e descrição de cargo",
              "description": "",
              "icon": "gantt-chart-square",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScnXrgZJN6YcVZwnEF3c0Yo1FL5EEUZ13fuTSHlYTHzQd2vbQ/viewform"
          },
          {
              "title": "Avaliação de curso/treinamento",
              "description": "",
              "icon": "bar-chart-4",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSczwVNXxkGtA-l2u-VQXjX0xyxXdkybXvPf950mbWGpD8WNGg/viewform"
          },
          {
              "title": "Avaliação de clima organizacional",
              "description": "",
              "icon": "cloud",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSfV905nc7dyunQx1ggJoUACiSxAH6W0uxJfcb51nl4wIUJu6A/viewform"
          }
      ]
  },
  {
      "page": "rh",
      "name": "Gestão",
      "infos": [
          {
              "title": "Requisição de desligamento de colaboradores",
              "description": "",
              "icon": "user-round-x",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSd6iy3reNTKi5eWltGcqB1yh5NOOWG2gUX2aeFPwzZx3InNSA/viewform"
          },
          {
              "title": "Solicitação de novos funcionários",
              "description": "",
              "icon": "user-round-plus",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSd14p4A_e_dMHMG4ELOJxFJtd6RWOrgUnOR9FhpIj_by9oHkQ/viewform"
          },
          {
              "title": "Avaliação de desempenho e novos funcionários",
              "description": "",
              "icon": "user-cog",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLSfAKTaOAN-5BqjV83CAlfwohUk45OBgmyjtZtaP2ALLqcUHLw/viewform"
          },
          {
              "title": "Acompanhamento funcional",
              "description": "",
              "icon": "trending-up",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScIzC05_A-5gbt1dD_I9rGX4-qFbdnmprUjv6UaP1KVOi8Y_Q/viewform"
          },
          {
              "title": "Avaliação de desempenho mensal",
              "description": "",
              "icon": "chevrons-up-down",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScotF8Fh3nC3kjLCYXxfoPIogxNnMDNbQl3ZGMalM9-lp6WGQ/viewform"
          }
      ]
  },
  {
      "page": "t.i",
      "name": "Geral",
      "infos": [
          {
              "title": "Suporte T.I",
              "description": "Solicite suporte técnico da equipe de T.I",
              "icon": "computer",
              "linkPath": "https://docs.google.com/forms/d/e/1FAIpQLScBrma8d15k3A7KOAasodqOoOW9jJr14Cc5zQNGPsTLFw9_Iw/viewform"
          },
          {
              "title": "Email empresarial",
              "description": "Acesse agora seu email empresarial",
              "icon": "mail",
              "linkPath": "https://mail.hostinger.com/"
          },
          {
              "title": "Baixar AVANTE",
              "description": "Baixe agora o AVANTE",
              "icon": "download",
              "linkPath": "https://pbr.digital/baixar/"
          },
          {
              "title": "Avantino",
              "description": "Acesse a plataforma mobile do Avante",
              "icon": "tablet-smartphone",
              "linkPath": "https://avantino.pbr.digital/vida/"
          }
      ]
  }
]

export default function useLinks() {
  const {isLoading, error} = useSWR<LinkProps[], Error>('/content', fetcher)

  return {data, isLoading, error}

}