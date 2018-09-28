<style lang="sass">
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div id="app" class="container">
    <h1>User list!</h1>
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
};
</script>

