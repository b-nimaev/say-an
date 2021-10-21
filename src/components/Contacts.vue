<template>
  <div>
    <h1>{{ message + ' ' +greeting }}!</h1>
    <transition name="slide-fade">
      <p v-if="show">counter: {{ count }}</p>
    </transition>
    <button @click="show = !show">show</button>
    <p><a href="//t.me/alexandrbnimaev" target="_blank">@alexandrbnimaev</a></p>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      show: true,
      greeting: 'World',
      count: 1
    }
  },

  props: {
    message: String
  }
}
</script>
