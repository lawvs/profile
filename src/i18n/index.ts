// https://www.i18next.com/
import i18next from 'i18next'

import en_US from './en-US.json'
import ja_JP from './ja-JP.json'
import zh_CN from './zh-CN.json'
import chinaIcon from './icon/china_icon.svg'
import japanIcon from './icon/japan_icon.svg'
import ukIcon from './icon/uk_icon.svg'

const DEBUG = process.env.NODE_ENV === 'development'

const LOCALES = [
  {
    tag: 'zh-CN',
    lng: '简体中文',
    res: zh_CN,
    icon: chinaIcon,
  },
  {
    tag: 'ja-JP',
    lng: '日本語',
    res: ja_JP,
    icon: japanIcon,
  },
  {
    tag: 'en-US',
    lng: 'English',
    res: en_US,
    icon: ukIcon,
  },
]

// LOCALES -> {'zh-CN': {translation: {...}}}
const resources = LOCALES.reduce(
  (acc, { tag, res }) => ({ ...acc, [tag]: { translation: res } }),
  {},
)

const standardizeLocale = (language: string) => {
  if (resources.hasOwnProperty(language)) {
    return language
  }
  switch (language.substr(0, 2).toLowerCase()) {
    case 'zh':
      return 'zh-CN'
    case 'ja':
      return 'ja-JP'
    default:
      return 'en-US'
  }
}

const DEFAULT_LANG = navigator.language
const language = standardizeLocale(DEFAULT_LANG)

i18next.init({
  lng: language,
  resources,
  debug: DEBUG,
  interpolation: {
    escapeValue: false,
  },
})

export { LOCALES as lngList }
export default i18next
