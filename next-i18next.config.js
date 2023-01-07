const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'es', 'ru', 'zh', 'ko', 'ja', 'ja2'],
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/locales'),
  interpolation: {
    prefix: '{{',
    suffix: '}}',
  },
};
