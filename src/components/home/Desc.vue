<template>
  <div>
    <v-card>
      <v-card-title>{{ $t('desc.apis.title') }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-spacer />
            <v-col
              cols="12"
              md="2"
              align="center"
              justify="center"
            >
              <a
                href="https://api.nasa.gov/"
              >
                <v-img
                  height="100px"
                  width="150px"
                  src="https://miro.medium.com/max/904/1*0tPTi7jNKZbV05A2m0i3Bg.png"
                  class="image_link"
                >
                </v-img>
              </a>
            </v-col>
          <v-spacer />
        </v-row>
        <p class="text-lg-right font-weight-bold">{{ $t('desc.apis.end') }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DescHome'
}
</script>


<style>
.image_link {
  border: 1px solid black;
  border-radius: 10%;
}
</style>
