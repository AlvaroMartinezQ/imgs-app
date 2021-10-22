<template>
  <v-container>
    <v-row class="mt-2 mb-2">
      <v-flex>
        <v-card>  
          <v-card-title>{{ $t('desc.title') }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-spacer />
              <v-col
                cols="12"
                md="2"
                align="center"
                justify="center"
              >
                <v-img
                  height="50px"
                  width="50px"
                  src="../../assets/vuelogo.png"
                >
                </v-img>
              </v-col>
              <v-col
                cols="12"
                md="2"
                align="center"
                justify="center"
              >
                <v-img
                  height="50px"
                  width="130px"
                  src="../../assets/vue-flag.png"
                >
                </v-img>
              </v-col>
              <v-col
                cols="12"
                md="2"
                align="center"
                justify="center"
              >
                <v-img
                  height="50px"
                  width="130px"
                  src="../../assets/axios.png"
                >
                </v-img>
              </v-col>
              <v-spacer />
            </v-row>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-row>
    <v-row class="mt-2 mb-2">
      <v-flex>
        <DescHome />
      </v-flex>
    </v-row>
    <v-row class="mt-2 mb-2">
      <v-flex>
        <modules />
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
import DescHome from './Desc.vue'
import Modules from './Modules.vue'

export default {
  name: 'Home',
  components: {
    DescHome,
    Modules
  }
}
</script>
