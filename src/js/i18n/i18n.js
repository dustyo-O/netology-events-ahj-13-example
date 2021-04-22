/* eslint-disable quote-props */
const language = 'en';

export default function i18n(key) {
  return {
    ru: {
      'Звонить': 'Звонить',
      'Подробная информация о клиенте': 'Подробная информация о клиенте',
    },
    en: {
      'Звонить': 'Call',
      'Подробная информация о клиенте': 'Detailed information about the client',
    },
  }[language][key];
}
