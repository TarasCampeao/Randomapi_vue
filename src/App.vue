<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div id="app" class="container">
    <navi-cell :class="{ scrolled: active, fix: always }"></navi-cell>
    <h1>Users list!</h1>
    <button class="add_user common_btn" @click="visible = !visible">Add user</button>
    <form-add v-show="!visible"></form-add>
    <name-list></name-list>
  </div>
</template>

<script>
import NameList from './components/NameList'
import FormAdd from './components/FormAdd'


export default {
  name: 'app',
  components: {
    NameList,
    FormAdd
  },
  data() {
    return {
      visible: 'true',
      active: 'false',
      always: 'true'
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
      }
  }
};
</script>

