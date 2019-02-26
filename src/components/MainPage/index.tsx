import React from 'react'

import Header from '../Header'
import Content from '../Content'
import { USERNAME } from '../../constant'
import { FooterWrapper, Page } from './styles'

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
