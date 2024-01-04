import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AVATAR_URL, CAREER, USERNAME } from '../../constant'
import Title from './Title'
import { HeaderWrapper, RoundImg } from './styles'

const Header = () => {
  const { t } = useTranslation()
  const [src, setSrc] = useState<string>()
  useEffect(() => {
    AVATAR_URL.then(setSrc)
  })
  return (
    <HeaderWrapper>
      <Title title={USERNAME} subtitle={t(CAREER) ?? ''} />
      {!!src && <RoundImg width="128" height="128" src={src} />}
    </HeaderWrapper>
  )
}

export default Header
