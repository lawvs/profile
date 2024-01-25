import { createRoot } from 'react-dom/client'
// https://react.i18next.com/
import { I18nextProvider } from 'react-i18next'

import App from './components/App'
import i18n from './i18n'
import './printBuildInfo'
import { GlobalStyle } from './styles'

const container = document.querySelector('#root')
if (!container) {
  throw new Error('Root element not found')
}
const root = createRoot(container)
root.render(
  <>
    <GlobalStyle />
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </>,
)
