import LanguagesSwitcher from '../LanguagesSwitcher'
import Header from '../Header'
import Content from '../Content'
import { USERNAME } from '../../constant'
import { FooterWrapper, Paper } from './styles'

const Footer = () => (
  <FooterWrapper>
    CopyRight © {new Date().getFullYear()} {USERNAME}. All rights reserved.
  </FooterWrapper>
)

const MainPage = () => (
  <Paper>
    <LanguagesSwitcher />
    <Header />
    <Content />
    <Footer />
  </Paper>
)

export default MainPage
