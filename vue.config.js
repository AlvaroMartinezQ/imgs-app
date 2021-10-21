module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/imgs-app/'
  : '/',

  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}
