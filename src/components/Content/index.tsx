import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

import { AnchorButton, AnchorButtonProps } from '../Button'
import User from '../../../dist/user.json'

const BUTTON_DATA: AnchorButtonProps[] = [
  {
    text: 'GitHub',
    href: User.githubUrl,
    icon: faGithub,
  },
  {
    text: 'Blog',
    href: User.blog,
    icon: faBook,
  },
  {
    text: 'Email',
    href: User.email ?? undefined,
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

const Content = () => {
  const { t } = useTranslation()
  return (
    <Section>
      {BUTTON_DATA.map(({ text, ...restProps }) => (
        <AnchorButton
          key={text}
          text={(text && t(text)) ?? undefined}
          target="_blank"
          rel="noreferrer"
          {...restProps}
        />
      ))}
    </Section>
  )
}

export default Content
