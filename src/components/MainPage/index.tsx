import LanguagesSwitcher from '../LanguagesSwitcher'
import Header from '../Header'
import Content from '../Content'
import { FooterWrapper, Paper } from './styles'
import User from '../../../dist/user.json'

const Footer = () => (
  <FooterWrapper>
    CopyRight © {new Date().getFullYear()} {User.name}. All rights reserved.
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
