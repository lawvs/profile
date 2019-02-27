import styled, { keyframes } from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const RoundImg = styled.img`
  border: 1px solid #e1e4e8;
  border-radius: 100%;
  animation: ${fadein} 1s ease;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex: 0.5 1 200px;
  flex-direction: column;
  align-items: stretch;
  /* title */
  h5 {
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;

    margin: 10px 5px;
  }
  /* subtitle */
  p {
    font-size: 16px;
    margin: 5px;
  }
`

export const Line = styled.div`
  flex: 1 1;
  height: 2px;
  background: #ebebeb;
`
