import LinkCardsProps from './../types/link-card'

type Props = {
  name: string
  infos: LinkCardsProps[]
}

const collaboratorLinks: Props[] = [
  {
    name: 'utilitários',
    infos: [
      {
        title: 'Ouvidoria Interna',
        description: 'Um espaço para ouvir você colaborador',
        icon: 'speech',
        linkPath:
          'https://docs.google.com/forms/d/e/1FAIpQLSeQ49v1-TElICd24sF1SjF5bHx2BkKw-rzuHErdj16iRPNWQQ/viewform',
      },
      {
        title: 'Folha de ponto',
        description: 'Receba sua folha de ponto em poucos segundos',
        icon: 'book',
        linkPath:
          'https://docs.google.com/forms/d/e/1FAIpQLSe3_aItRoojkaj-IFT6K9LSpnLCN6kXgfeH9TR6MhBog4zIZg/viewform',
      },
      {
        title: 'Banco de horas',
        description: 'Lance suas horas geradas',
        icon: 'clock',
        linkPath:
          'https://docs.google.com/forms/d/e/1FAIpQLSfKiv85P3YYzT6rZjqQ8LMjBwT2D1f0hZin73VYL2fyyK8OPQ/viewform',
      },
      {
        title: 'Suporte T.I',
        description: 'Solicite suporte técnico da equipe de T.I',
        icon: 'computer',
        linkPath:
          'https://docs.google.com/forms/d/e/1FAIpQLScBrma8d15k3A7KOAasodqOoOW9jJr14Cc5zQNGPsTLFw9_Iw/viewform',
      },
      {
        title: 'Manutenção Predial',
        description: 'Solicite manutenção predial',
        icon: 'settings',
        linkPath: 'https://forms.gle/ngCiEPHsm6xTPAZH6',
      },
      {
        title: 'Solicitar material comercial',
        description: 'Solicite propostas, contratos, recibos, fichas e etc.',
        icon: 'file-text',
        linkPath:
          'https://docs.google.com/forms/d/e/1FAIpQLSdtjKjyUxJLfsEuFYCbzm_Kbpk5nuFmDg54RSvl13riSWEbZg/viewform?usp=sf_link',
      },
    ],
  },
  {
    name: 'treinamento',
    infos: [
      {
        title: 'Transmissão de velório',
        description: '',
        icon: 'radio',
        linkPath: 'http://funerariavida.com.br/',
      },
    ],
  },
  {
    name: 'setores',
    infos: [
      {
        title: 'Atendimento',
        description: '',
        linkPath: 'https://beacons.ai/atendimento_fv',
      },
      {
        title: 'Crematórios',
        description: '',
        linkPath: 'https://beacons.ai/crematorios_fv',
      },
      {
        title: 'Departamento Pessoal',
        description: '',
        linkPath: 'https://beacons.ai/dp_fv',
      },
      {
        title: 'Operacional',
        description: '',
        linkPath: 'https://beacons.ai/operacional_fv',
      },
      {
        title: 'Recursos Humanos',
        description: '',
        linkPath: 'https://beacons.ai/rh_fv',
      },
      {
        title: 'T.I',
        description: '',
        linkPath: 'https://beacons.ai/ti_fv',
      },
    ],
  },
]

export default collaboratorLinks
