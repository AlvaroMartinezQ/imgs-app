<template>
  <v-app-bar>
    <v-toolbar-title class="font-weight-black ma-2">IMGS APP</v-toolbar-title>
    <v-btn
      dark
      disabled
    >
      {{ $t('btn.mars') }}
    </v-btn>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(lang, index) in langs"
          :key="index"
        >
          <v-list-item-title>
            <v-btn @click="changeLocale(lang.locale)"><country-flag :country='lang.flag' size='normal'/>{{ lang.lang }}</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import i18n from '@/plugins/i18n'

export default {
  name: 'Header',
  data: () => ({
    langs: [
      { lang: 'EN', locale: 'en', flag: 'us' },
      { lang: 'ES', locale: 'es', flag: 'es' }
    ]
  }),
  methods: {
    changeLocale (locale) {
      i18n.locale = locale
    }
  }
}
</script>