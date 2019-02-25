import styled, { css } from 'styled-components'

const baseStyle = css`
  appearance: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20px;
  width: 70px;
  padding: 8px 10px;
  margin: 10px;
  border-radius: 5px;
  font-size: 15px;
  background: rgba(167, 182, 194, 0.3);
  color: #3c3c3c;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`
export const ButtonWrapper = styled.button`
  ${baseStyle}
  cursor: pointer;
`

export const AnchorButtonWrapper = styled.a`
  ${baseStyle}
  text-decoration: none;
`
