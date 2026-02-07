import { createI18n } from 'vue-i18n'
import home_ru from './locales/home/ru.json'
import home_en from './locales/home/en.json'

const messages = {
  ru: home_ru,
  en: home_en
}

// Создаем экземпляр i18n
const i18n = createI18n({
  legacy: false, // обязательно false для Vue 3 Composition API
  locale: localStorage.getItem('locale') || 'en', // язык по умолчанию
  fallbackLocale: 'en', // резервный язык
  messages,
  globalInjection: true, // делает $t доступным глобально
  warnHtmlMessage: false // отключает предупреждения об HTML в переводах
})

export default i18n