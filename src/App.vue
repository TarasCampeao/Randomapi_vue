<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div id="app" class="container">
    <navi-cell :class="{ scrolled: active, fix: always }"></navi-cell>
    <h1>Users list!</h1>
    <button class="add_user common_btn" @click="showForm()">Add user</button>
    <form-add :items.sync="items" v-show="visible"></form-add>
    <name-list :items.sync="items"></name-list>
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
      visible: false,
      active: false,
      always: true,
        items: []
    }
  },
  created() {
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
  },
    mounted() {
        fetch("https://randomuser.me/api/?results=6")
            .then(response => response.json())
            .then((data) => {
                this.items = data;
                console.log(this.items)
            });
    },
  methods: {
      handleScroll(r) {
          this.active = ((document.documentElement
          && document.documentElement.scrollTop)
          || document.body.scrollTop ) > 0.2 * window.innerHeight
      },
      showForm() {
          this.visible = true;
      }
  }
};
</script>

