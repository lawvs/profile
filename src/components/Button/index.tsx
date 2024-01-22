import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-common-types'

import { ButtonWrapper, AnchorButtonWrapper } from './styles'

export interface ButtonProps {
  icon?: IconDefinition
  text?: string
  children?: React.ReactNode
}

export type AnchorButtonProps = ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

/** A collection of curated prop keys used across ButtonProps which are not valid HTMLElement props. */
const INVALID_PROPS: string[] = ['icon', 'text', 'children']
const removeNonHTMLProps = (props: { [x: string]: any }, invalidProps = INVALID_PROPS) =>
  invalidProps.reduce(
    (prev, curr) => {
      if (prev[curr]) {
        delete (prev as any)[curr]
      }
      return prev
    },
    { ...props },
  )

const ButtonChildren = ({ icon, text, children }: ButtonProps) => (
  <>
    {icon && <FontAwesomeIcon key="icon" icon={icon} />}
    {(text || children) && (
      <span key="text">
        {text}
        {children}
      </span>
    )}
  </>
)

const Button = (props: ButtonProps) => (
  <ButtonWrapper {...removeNonHTMLProps(props)}>
    <ButtonChildren {...props}></ButtonChildren>
  </ButtonWrapper>
)

const AnchorButton = (props: AnchorButtonProps) => (
  <AnchorButtonWrapper role="button" {...removeNonHTMLProps(props)}>
    <ButtonChildren {...props}></ButtonChildren>
  </AnchorButtonWrapper>
)

export default Button
export { AnchorButton }
