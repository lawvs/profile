import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

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
      if (prev.hasOwnProperty(curr)) {
        delete (prev as any)[curr]
      }
      return prev
    },
    { ...props },
  )

const renderChildren = ({ icon, text, children }: ButtonProps) => [
  icon && <FontAwesomeIcon key="icon" icon={icon} />,
  (text || children) && (
    <span key="text">
      {text}
      {children}
    </span>
  ),
]

const Button = (props: ButtonProps) => (
  <ButtonWrapper {...removeNonHTMLProps(props)}>{renderChildren(props)}</ButtonWrapper>
)

const AnchorButton = (props: AnchorButtonProps) => (
  <AnchorButtonWrapper role="button" {...removeNonHTMLProps(props)}>
    {renderChildren(props)}
  </AnchorButtonWrapper>
)

export default Button
export { AnchorButton }
