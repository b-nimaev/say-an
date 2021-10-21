<template>
  <Navigation/>
  <div class="container-fluid">
    <div class="row">
      <Sidebar/>
      <main class="col-md-10">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/Navbar.vue'
  import Sidebar from './components/Sidebar.vue'

  export default {
    name: 'App',
    components: {
      Sidebar,
      Navigation
    }
  }
</script>

<style lang="scss">
  #app {
    padding: 1rem;
  }

  footer {
    background-color: #111;
  }
</style>
