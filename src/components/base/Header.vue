<template>
  <v-app-bar>
    <v-toolbar-title class="font-weight-black ma-2">IMGS APP</v-toolbar-title>
    <v-btn>MARS photos</v-btn>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          lang
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(lang, index) in langs"
          :key="index"
        >
          <v-list-item-title>
            <v-btn>{{ lang.lang }}</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    langs: [
      { lang: 'ES' },
      { lang: 'EN' }
    ]
  })
}
</script>