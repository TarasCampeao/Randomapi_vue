<style lang="sass">
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons')
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div id="app" class="container">
    <h1>Users list!</h1>
    <button class="add_user" @click="visible = !visible">Add user</button>
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
      visible: 'true'
    }
  },
  methods: {

  }
};
</script>

