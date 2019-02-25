import React, { useState } from 'react'
import styled from 'styled-components'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'

import Title from './Title'
import { USERNAME, CAREER, AVATAR_URL } from '../../constant'

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`

const RoundImg = styled.img`
  border: 1px solid #e1e4e8;
  border-radius: 100%;
`

const Icon = ({
  src,
  ...restProps
}: React.ImgHTMLAttributes<HTMLImageElement> | { src: Promise<string> }) => {
  const render = (props: React.ImgHTMLAttributes<HTMLImageElement>) => <RoundImg {...props} />
  if (typeof src === 'string') {
    return render({ src, ...restProps })
  }
  const [imgSrc, setSrc] = useState<string | null>(null)
  src && src.then(setSrc)
  if (!imgSrc) {
    return null
  }
  return render({ src: imgSrc, ...restProps })
}

const Header = ({ t }: { t: i18next.TFunction }) => (
  <HeaderWrapper>
    <Title title={USERNAME} subtitle={t(CAREER)} />
    <Icon width="128" height="128" src={AVATAR_URL} />
  </HeaderWrapper>
)

export default withTranslation()(Header)
