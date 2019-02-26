import React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import Content from '../Content'
import { USERNAME } from '../../constant'

const Page = styled.div`
  position: relative;
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

const FooterWrapper = styled.footer`
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: #5f5f5f;
`

const Footer = () => (
  <FooterWrapper>
    CopyRight © {new Date().getFullYear()} {USERNAME}. All rights reserved.
  </FooterWrapper>
)

const MainPage = () => (
  <Page>
    <Header />
    <Content />
    <Footer />
  </Page>
)

export default MainPage
