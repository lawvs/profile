import { TitleWrapper } from './styles'

const Title = ({
  title,
  subtitle,
}: {
  title: string | JSX.Element
  subtitle: string | JSX.Element
}) => (
  <TitleWrapper>
    {title && <h5>{title}</h5>}
    {subtitle && <p>{subtitle}</p>}
  </TitleWrapper>
)

export default Title
