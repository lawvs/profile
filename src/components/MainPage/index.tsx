import React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import Content from '../Content'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 0.1 1 700px;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;

  padding: 20px;
  margin: 20px;
  border-radius: 3px;
  box-shadow: 0 4px 8px #00000033;
  background-color: #fff;
`

const MainPage = () => (
  <Page>
    <Header />
    <Content />
  </Page>
)

export default MainPage
