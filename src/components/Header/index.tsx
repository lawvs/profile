import { useTranslation } from 'react-i18next'

import Title from './Title'
import { HeaderWrapper, RoundImg } from './styles'
import User from '../../../dist/user.json'

const Header = () => {
  const { t } = useTranslation()
  return (
    <HeaderWrapper>
      <Title title={User.name} subtitle={t(User.career)} />
      <RoundImg width="128" height="128" src={User.avatarUrl} />
    </HeaderWrapper>
  )
}

export default Header
