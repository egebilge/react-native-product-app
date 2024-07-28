type CompanyLogoOptionProps = {
  id: string
  source: any
  position: { bottom: number; left: number }
}

export const companyLogoOptions: CompanyLogoOptionProps[] = [
  {
    id: '1',
    source: require('assets/img/large_coca_cola_logo.png'),
    position: { bottom: 15, left: 15 },
  },
  {
    id: '5',
    source: require('assets/img/large_sprite_logo.png'),
    position: { bottom: 15, left: 15 },
  },
]
