import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AVATAR_URL, CAREER, USERNAME } from '../../constant'
import Title from './Title'
import { HeaderWrapper, RoundImg } from './styles'

const Icon = ({
  src,
  ...restProps
}: React.ImgHTMLAttributes<HTMLImageElement> | { src: Promise<string> }) => {
  const state = useState(src)
  src = state[0]
  const setSrc = state[1]
  useEffect(() => {
    if (src && typeof src !== 'string') {
      src.then(setSrc)
    }
  })
  if (typeof src === 'string') {
    return <RoundImg src={src} {...restProps} />
  }
  return null
}

const Header = () => {
  const { t } = useTranslation()
  return (
    <HeaderWrapper>
      <Title title={USERNAME} subtitle={t(CAREER) ?? ''} />
      <Icon width="128" height="128" src={AVATAR_URL} />
    </HeaderWrapper>
  )
}

export default Header
