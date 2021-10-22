<template>
  <div>
    <v-row>
      <v-spacer />
      <v-col
        cols="12"
        md="4"
      >
        <nasa-modules />
      </v-col>
      <v-spacer />
    </v-row>
  </div>
</template>

<script>
import NasaModules from './modules/NasaModules.vue'

export default {
  name: 'Modules',
  components: {
    NasaModules
  }
}
</script>