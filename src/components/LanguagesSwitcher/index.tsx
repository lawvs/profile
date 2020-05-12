import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import i18next, { lngList } from '../../i18n'

const Badge = styled.img`
  width: 32px;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%); /* triangle */
  opacity: 0.5;

  &:hover {
    cursor: pointer;
    clip-path: none;
    opacity: 1;
  }
`

const LanguagesSwitcher = () => {
  const [lng, setLng] = useState(i18next.language)
  useEffect(() => {
    i18next.changeLanguage(lng)
  })

  const lngIndex = lngList.findIndex((l) => l.tag === lng)
  const lngProps = lngList[lngIndex]
  const nextLng = lngList[(lngIndex + 1) % lngList.length]
  return <Badge src={lngProps.icon} alt={lngProps.lng} onClick={() => setLng(nextLng.tag)} />
}

export default LanguagesSwitcher
