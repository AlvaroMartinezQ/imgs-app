<template>
  <div class="ml-4 mr-4">
    <Header />
    <br>
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

