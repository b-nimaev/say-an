<template>
  <div class="container">
    <h1>FrontendDeveloper</h1>
    <Projects/>
  </div>
</template>

<script>
// @ is an alias to /src
import Projects from '@/components/Projects.vue'


export default {
  name: 'Home',
  components: {
    Projects
  }
}
</script>
