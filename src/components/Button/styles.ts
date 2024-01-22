import styled, { css } from 'styled-components'

const baseStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20px;
  min-width: 70px;
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 15px;
  background: rgba(167, 182, 194, 0.3);
  color: #3c3c3c;
  white-space: nowrap;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }
`
export const ButtonWrapper = styled.button`
  ${baseStyle}
  cursor: pointer;
`

export const AnchorButtonWrapper = styled.a`
  ${baseStyle}
  text-decoration: none;

  & > * + * {
    margin-left: 5px;
  }
`
