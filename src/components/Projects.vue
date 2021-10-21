<template>
  <div id="projects">
    <h1>Successful projects</h1>
    <ul>
      <li><a @click="changetab()" href="#">All</a></li>
      <li><a @click="changetab()" href="#">Applications</a></li>
      <li><a @click="changetab()" href="#">Telegram bot</a></li>
      <li><a @click="changetab()" href="#">CMS</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  methods: {
    changetab() {
      console.log('heylo')
    }
  }
}

</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    margin: auto;
    padding: 0;
    list-style-type: none;
    justify-content: center;
    li {
      margin: 0 15px;
      a {
        text-decoration: none;
      }
    }
  }
</style>
