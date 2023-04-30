import { createRoot } from 'react-dom/client'
// https://react.i18next.com/
import { I18nextProvider } from 'react-i18next'

import i18n from './i18n'
import { GlobalStyle } from './styles'
import App from './components/App'

const container = document.querySelector('#root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(
  <>
    <GlobalStyle />
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </>,
)
