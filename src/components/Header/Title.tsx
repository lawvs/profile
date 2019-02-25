import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
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

const Line = styled.div`
  flex: 1 1;
  height: 2px;
  background: #ebebeb;
`

const Title = ({
  title,
  subtitle,
}: {
  title: string | JSX.Element
  subtitle: string | JSX.Element
}) => (
  <TitleWrapper>
    {title && <h5>{title}</h5>}
    <Line />
    {subtitle && <p>{subtitle}</p>}
  </TitleWrapper>
)

export default Title
