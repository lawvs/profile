import React from 'react'
import styled from 'styled-components'
import { withTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

import { AnchorButton, AnchorButtonProps } from '../Button'
import { GITHUB_URL, BLOG_URL, EMAIL_URL } from '../../constant'

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
  {
    text: 'Email',
    href: EMAIL_URL,
    icon: faEnvelope,
  },
].filter((i) => i.href)

const SectionWrapper = styled.div`
  display: flex;

  & > * + * {
    margin-left: 20px;
  }
`

const Section = ({ children }: { children?: React.ReactNode }) => (
  <SectionWrapper>{children}</SectionWrapper>
)

const Content = ({ t }: { t: TFunction }) => (
  <Section>
    {BUTTON_DATA.map(({ text, ...restProps }) => (
      <AnchorButton
        key={text}
        text={text && t(text)}
        target="_blank"
        rel="noreferrer"
        {...restProps}
      />
    ))}
  </Section>
)

export default withTranslation()(Content)
