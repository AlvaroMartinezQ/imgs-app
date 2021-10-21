<template>
  <div class="ml-4 mr-4">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '../components/base/Header.vue'

export default {
  name: 'MainLay',
  components: {
    Header
  }
}
</script>

