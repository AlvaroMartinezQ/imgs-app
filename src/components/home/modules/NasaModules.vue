<template>
  <div>
    <v-card v-if="!this.loading">
      <v-img
        height="200px"
        :src="this.image_url"
        class="white--text align-end"
      >
        <v-card-title
          style="word-break: normal;"  
        >
          {{ $t('modules.nasa.title') }}
        </v-card-title>
        <v-card-subtitle
          v-if="this.image_date != null"
        >
          {{ $t('modules.nasa.sub') }}: {{ this.image_date }}
        </v-card-subtitle>
      </v-img>
      <v-card-text>
        {{ $t('modules.nasa.desc') }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          :to="{ name: 'apoc', params: { img_url: this.image_url, image_date: this.image_date } }"
          color="red"
          outlined
        >
          <v-icon>mdi-camera-burst</v-icon>{{ $t('modules.nasa.apoc') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { getImageOfTheDay } from '../../../requests/apod/utils'

export default {
  name: 'NasaModules',
  data: () => ({
    loading: false,
    image_url: null,
    image_date: null
  }),
  async mounted () {
    this.loading = true
    const res = await getImageOfTheDay()
    if (res) {
      this.image_url = res.url
      this.image_date = res.date
      this.loading = false
    }
  }
}
</script>
