import { ReactNode } from 'react'
import { TitleWrapper } from './styles'

const Title = ({ title, subtitle }: { title: ReactNode; subtitle: ReactNode }) => (
  <TitleWrapper>
    {title && <h5>{title}</h5>}
    {subtitle && <p>{subtitle}</p>}
  </TitleWrapper>
)

export default Title
