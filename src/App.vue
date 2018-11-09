<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div id="app" class="container">
    <h1>Users list!</h1>
    <name-list></name-list>
  </div>
</template>

<script>
import NameList from './components/NameList'

export default {
  name: 'app',
  components: {
    NameList
  },
  data() {
    return {
      visible: 'true',
      active: 'false',
      always: 'true',
      length: '',
    }
  },
  created: function () {
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
      handleScroll() {
          this.active = ((document.documentElement
          && document.documentElement.scrollTop)
          || document.body.scrollTop ) > 0.2 * window.innerHeight
      },
  }
};
</script>

