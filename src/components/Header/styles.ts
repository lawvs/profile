import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const RoundImg = styled.img`
  border: 1px solid #e1e4e8;
  border-radius: 100%;
  animation: ${fadein} 1s ease;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-self: stretch;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    & > ${RoundImg} {
      margin-top: 40px;
    }
  }
`

export const TitleWrapper = styled.div`
  display: flex;
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
