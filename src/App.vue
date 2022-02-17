<template>
  <div class="container-fluid">
    <Navbar/>
    <div class="row">
      <div class="col col-sm-11 m-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/app.scss';
</style>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>