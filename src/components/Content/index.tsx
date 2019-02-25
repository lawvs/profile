import React from 'react'
import styled from 'styled-components'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

import { AnchorButton, AnchorButtonProps } from '../Button'
import { GITHUB_URL, BLOG_URL } from '../../constant'

const BUTTON_DATA: AnchorButtonProps[] = [
  {
    text: 'GitHub',
    href: GITHUB_URL,
    icon: faGithub,
  },
  {
    text: 'Blog',
    href: BLOG_URL,
    icon: faBook,
  },
]

const SectionWrapper = styled.div`
  display: flex;
`

const Section = ({ children }: { children?: React.ReactNode }) => (
  <SectionWrapper>{children}</SectionWrapper>
)

const Content = ({ t }: { t: i18next.TFunction }) => (
  <Section>
    {BUTTON_DATA.map(({ text, ...restProps }, i) => (
      <AnchorButton
        key={i}
        text={text && t(text)}
        target="_blank"
        rel="noreferrer"
        {...restProps}
      />
    ))}
  </Section>
)

export default withTranslation()(Content)
