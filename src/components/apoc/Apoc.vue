<template>
  <v-container>
    <v-row class="mt-2 mb-2">
      <v-btn
        :to="{ name: 'home' }"
      >
        <v-icon>mdi-arrow-left-circle</v-icon>
        {{ $t('btn.home') }}
      </v-btn>
      <v-spacer />
    </v-row>
    <v-row class="mt-2 mb-2">
      <v-col
        cols="12"
        md="2"
      >
        <h3>{{ this.image_date }}</h3>
      </v-col>
      <v-col
        cols="12"
        md="10"
      >
        <img
          :src="this.img_url"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Apoc',
  props: {
    img_url: {
      type: String,
      required: false
    },
    image_date: {
      type: String,
      required: false
    }
  },
  mounted () {
    if (this.img_url === undefined || this.image_date === undefined) {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
