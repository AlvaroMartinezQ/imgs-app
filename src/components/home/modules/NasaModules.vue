<template>
  <div>
    <v-card>
      <v-img
        height="200px"
        :src="this.image_url"
      >
        <v-card-title
          class="white--text"
          style="word-break: normal;"  
        >{{ $t('modules.nasa.title') }}</v-card-title>
        <v-card-subtitle
          v-if="this.image_date != null"
          class="white--text"
        >
          {{ $t('modules.nasa.sub') }}: {{ this.image_date }}
        </v-card-subtitle>
      </v-img>
    </v-card>
  </div>
</template>

<script>
import { getImageOfTheDay } from '../../../requests/apod/utils'

export default {
  name: 'NasaModules',
  data: () => ({
    image_url: null,
    image_date: null
  }),
  async mounted () {
    const res = await getImageOfTheDay()
    if (res) {
      this.image_url = res.url
      this.image_date = res.date
    }
  }
}
</script>
