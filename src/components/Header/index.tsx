import React, { useState, useEffect } from 'react'
import { withTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'

import Title from './Title'
import { USERNAME, CAREER, AVATAR_URL } from '../../constant'
import { RoundImg, HeaderWrapper } from './styles'

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

const Header = ({ t }: { t: TFunction }) => (
  <HeaderWrapper>
    <Title title={USERNAME} subtitle={t(CAREER)} />
    <Icon width="128" height="128" src={AVATAR_URL} />
  </HeaderWrapper>
)

export default withTranslation()(Header)
