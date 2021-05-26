const path = require('path');

module.exports = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
